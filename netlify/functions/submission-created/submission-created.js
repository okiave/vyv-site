const { Client } = require('@notionhq/client');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body).payload;
  } catch {
    return { statusCode: 400, body: 'Invalid payload' };
  }

  const fields = payload.data || {};
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  // activity can be a string (single) or array (multiple checkboxes)
  const activities = Array.isArray(fields.activity)
    ? fields.activity
    : fields.activity
    ? [fields.activity]
    : [];

  try {
    await notion.pages.create({
      parent: { database_id: process.env.DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: fields.name || '' } }],
        },
        Email: {
          email: fields.email || null,
        },
        'Location / Neighborhood': {
          rich_text: [{ text: { content: fields.location || '' } }],
        },
        Availability: {
          select: fields.availability ? { name: fields.availability } : null,
        },
        Budget: {
          select: fields.budget ? { name: fields.budget } : null,
        },
        'Activity Interest': {
          multi_select: activities.map((a) => ({ name: a })),
        },
        Persona: {
          select: fields.persona ? { name: fields.persona } : null,
        },
        Status: {
          select: { name: 'New' },
        },
      },
    });

    return { statusCode: 200, body: 'Lead created in Notion' };
  } catch (err) {
    console.error('Notion API error:', err);
    return { statusCode: 500, body: 'Failed to create Notion record' };
  }
};
