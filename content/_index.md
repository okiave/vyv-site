---
title: 'Home'
date: 2025-06-06
type: landing

sections:
  - block: hero
    content:
      eyebrow: Hello · Hola · Anchorage, AK
      title: "Your [vibe] deserves a real [partner]."
      text: VYV is one person — me, Oscar — available, invested, and good at this. I built it because I kept seeing the same gap&#58; people who want to move, reconnect, or try something new, but no one to do it with. If that's you, let's fix that.
      primary_action:
        text: Let's connect
        url: "#connect"
        icon: heart
        style: gradient
      secondary_action:
        text: How it works
        url: "#how-it-works"
        icon: arrow-down
        style: ghost
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      section_break:
        fade_bottom: "#101828"
      background:
        color: "#1a0a2e"
        gradient:
          type: radial
          start: "rgba(240,78,110,0.45)"
          end: "transparent"
          position: "50% -10%"
          shape: ellipse
          size: "80% 80%"
        gradient_mesh:
          enable: true
          style: orbs
          intensity: medium
          animation: pulse
          colors: ["primary-500/25", "secondary-500/25"]
          orb_count: 2
          positions: ["top-1/3 left-1/4", "bottom-1/3 right-1/4"]
          sizes: ["w-[32rem] h-[32rem]", "w-[26rem] h-[26rem]"]

  - block: steps
    id: how-it-works
    content:
      title: How VYV works
      text: Simple. Low-stakes. Actually fun.
      items:
        - title: Tell us what you're into
          text: Fill out the quick form — activities, availability, what you're working through. No essay required.
          icon: pencil-square
        - title: We vibe-check
          text: A real human follows up (that's me, hi). We figure out what fits, when, and how.
          icon: chat-bubble-left-right
        - title: Show up and do the thing
          text: Meet your companion. Move your body. Feel good. That's the whole plan.
          icon: check-badge
    design:
      layout: horizontal
      marker_style: icon
      connector: none

  - block: features
    id: activities
    content:
      subtitle: What we do together
      title: "Pick your [vamos]."
      text: Nine activities and counting. If it gets you moving, there's a good chance we're into it.
      items:
        - name: Swimming
          icon: sun
          description: Open lanes at the pool or guided open-water sessions. Good for the body, great for the mind.
        - name: Roller Skating
          icon: bolt
          description: Rink nights, trail skating, or just figuring out how to stay upright. All skill levels welcome.
        - name: Yoga
          icon: sparkles
          description: Studio sessions or outdoor flows. Bring whatever version of yourself showed up today.
        - name: Rock Climbing
          icon: fire
          description: Bouldering or top-rope — we'll spot you, literally and figuratively.
        - name: Biking
          icon: map
          description: Anchorage's trail system is genuinely spectacular. Let's ride it together.
        - name: Dancing
          icon: musical-note
          description: Salsa, two-step, freestyle kitchen dancing — the point is to move, not to be perfect.
        - name: Visual Arts
          icon: paint-brush
          description: Pottery, sketching, painting — making things is good for the soul. We'll make things.
        - name: Music
          icon: star
          description: Learning something new, practicing together, or just jamming. No performance required.
        - name: Hiking
          icon: flag
          description: Chugach trails from chill to gnarly. We go at your pace.
    design:
      layout: bento
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: cta-image-paragraph
    id: who
    content:
      items:
        - title: New in town or remote-working solo?
          text: Anchorage is spectacular and surprisingly hard to break into socially. VYV gives you a knowledgeable local who's excited to get out with you — no awkward networking, no tour-bus energy.
          feature_icon: check
          features:
            - "Local knowledge, genuine enthusiasm"
            - "One-time or recurring — your call"
            - "Activities you'd actually choose yourself"
          image: makers-shipping.jpg
          button:
            text: Let's connect
            url: "#connect"
        - title: Life changed. Your social life can too.
          text: Divorce, new co-parenting schedule, empty nest — transitions leave gaps. VYV is a low-pressure way to rebuild momentum without pretending everything's fine or starting from zero alone.
          feature_icon: heart
          features:
            - "No judgment, no pressure, no weird vibes"
            - "Consistent availability built around your schedule"
            - "Someone who actually shows up"
          image: teams-collaboration.jpg
          button:
            text: Tell us your situation
            url: "#connect"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

  - block: markdown
    id: connect
    content:
      title: Ready to vamos?
      subtitle: Fill this out. I'll be in touch within 24 hours.
      text: |
        <form name="vyv-lead" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="mt-8 space-y-6 max-w-2xl mx-auto text-left">
          <input type="hidden" name="form-name" value="vyv-lead" />
          <p style="display:none"><input name="bot-field" /></p>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">Name *</label>
              <input type="text" name="name" required style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;" />
            </div>
            <div>
              <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">Email *</label>
              <input type="email" name="email" required style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;" />
            </div>
          </div>

          <div>
            <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">Neighborhood / Area in Anchorage</label>
            <input type="text" name="location" placeholder="e.g. Midtown, South Addition, Eagle River…" style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;" />
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">Availability</label>
              <select name="availability" style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;">
                <option value="">Select one…</option>
                <option>One-time</option>
                <option>Weekly</option>
                <option>Ongoing</option>
                <option>Flexible</option>
              </select>
            </div>
            <div>
              <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">Budget (per hour)</label>
              <select name="budget" style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;">
                <option value="">Select one…</option>
                <option>$25–50/hr</option>
                <option>$50–100/hr</option>
                <option>$100+/hr</option>
              </select>
            </div>
          </div>

          <div>
            <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.5rem;">Activity interests (pick all that apply)</label>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Swim" /> Swim</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Roller skate" /> Roller skate</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Yoga" /> Yoga</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Rock climb" /> Rock climb</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Biking" /> Biking</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Dancing" /> Dancing</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Visual arts" /> Visual arts</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Music" /> Music</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Hiking" /> Hiking</label>
            </div>
          </div>

          <div>
            <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">What's your situation?</label>
            <select name="persona" style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;">
              <option value="">Select one…</option>
              <option>Remote worker / new to town</option>
              <option>Life transition (divorce, new schedule, etc.)</option>
              <option>Older adult / looking for an active body double</option>
              <option>Just want company for activities</option>
            </select>
          </div>

          <div>
            <button type="submit" style="padding:0.75rem 2rem; border-radius:0.5rem; background:#f04e6e; color:white; font-weight:500; font-size:0.875rem; border:none; cursor:pointer;">
              Let's vamos →
            </button>
          </div>
        </form>
    design:
      css_class: "bg-white dark:bg-gray-950"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: faq
    id: faq
    content:
      title: "Questions? Fair."
      subtitle: Here's what people usually ask.
      items:
        - question: What exactly is VYV?
          answer: |
            VYV (Vibe & Vamos) is a solo-operated companionship and activity service based in Anchorage, AK. You get a real person — skilled, fun, non-weird — to do activities with you. Think of it as having a socially fluent friend who's actually available.
        - question: Is this a dating service?
          answer: |
            No. This is an activity companion service. VYV is about movement, genuine connection, and having a good time doing things — not romance. If that's what you're looking for, Tinder exists.
        - question: How does pricing work?
          answer: |
            Rates are based on activity type, duration, and scheduling. Use the form to connect and we'll work out what makes sense for your situation. No rigid packages, no surprise fees.
        - question: What if I've never done the activity before?
          answer: |
            That's kind of the point. Beginners are welcome — often preferred, honestly. VYV is about trying things and getting moving, not performing expertise.
        - question: Where in Anchorage do you operate?
          answer: |
            Most activities happen within Anchorage proper — Midtown, South Addition, the Coastal Trail area. Some hiking goes into the Chugach. We work out logistics together after you connect.
        - question: How quickly will you follow up?
          answer: |
            Within 24 hours on weekdays. If you submit over the weekend, expect a Monday reply. No auto-responder — a real human reads every form.

  - block: cta-card
    content:
      title: "Stop putting it off. ¡Vamos!"
      text: Anchorage is too good to experience alone. Let's get you out there.
      button:
        text: Connect now →
        url: "#connect"
    design:
      section_break:
        fade_top: "#ffffff"
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
        css_style: ""
---
