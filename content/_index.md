---
title: 'Home'
date: 2025-06-06
type: landing

sections:
  - block: hero
    content:
      eyebrow: Hello · Hola · Anchorage, AK
      title: "Motion is the medicine."
      text: "Presence is the practice."
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
        color: "#0d0816"
        gradient:
          type: radial
          start: "rgba(100,45,150,0.55)"
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
      title: How VyV Works
      text: Simple. Low-stakes. Actually fun.
      items:
        - title: "Tell Oscar what you're into."
          text: Fill out the quick form — activities, availability, what you're working through. No essay required.
          icon: pencil-square
        - title: We vibe-check
          text: I follow up with you by email for a remote meeting where we figure out what fits, when, and how.
          icon: chat-bubble-left-right
        - title: Meet up
          text: "Based on our conversation we'll get together to share in an activity that feels good. That's the whole plan."
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
          icon: custom/swimming
          description: Open lanes at the pool or guided open-water sessions. Good for the body, great for the mind too — can feel meditative.
        - name: Roller Skating
          icon: custom/roller-skating
          description: Rink nights, trail skating, or just figuring out how to stay upright. All skill levels welcome.
        - name: Yoga
          icon: custom/yoga
          description: "Studio sessions or outdoor flows. Bring whatever version of yourself showed up today. Let's get to know what practice and studio aligns with you."
        - name: Rock Climbing
          icon: custom/rock-climbing
          description: "Bouldering or top-rope (within limits) — I'll spot you literally and figuratively."
        - name: Biking
          icon: custom/biking
          description: "Anchorage's trail system is spectacular. Let's ride it together or I can teach you basic maintenance at <a href=\"https://www.offthechainak.org/wordpress/\" target=\"_blank\" rel=\"noopener\">Off the Chain Bike CoOp</a> where I volunteer."
        - name: Dancing
          icon: custom/dancing
          description: "Salsa, two-step, contra or just freestyle kitchen dancing — the point is to move, not to be perfect."
        - name: Visual Arts
          icon: custom/visual-arts
          description: "Origami, embroidery, sketching, photography — making things is good for the soul. We'll make creativity time a ritual."
        - name: Thrifting
          icon: custom/thrifting
          description: "Let's explore your sense of style and expression and don the outfit out for an event or gathering."
        - name: Hiking
          icon: custom/hiking
          description: "Chugach trails from chill to gnarly. We go at your pace. Mountain runners need not apply."
    design:
      layout: grid
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: cta-image-paragraph
    id: who
    content:
      items:
        - title: "Too much screen time? I know that feeling."
          text: Anchorage is spectacular and surprisingly hard to break into, so screen time becomes the default. I built VyV partly because I've been that person — wanting to get out and do things, but not knowing anyone who was actually free. That gap doesn't have to be yours.
          feature_icon: check
          features:
            - "Local knowledge, genuine enthusiasm"
            - "One-time or recurring — your call"
            - "Activities you'd actually pick yourself"
          image: persona-remote.jpg
          button:
            text: Let's connect
            url: "#connect"
        - title: "Life shifted. Your rhythm can too."
          text: Transitions have a way of clearing the calendar without asking. VyV isn't therapy and it isn't a fix — it's someone reliable to move alongside you. I show up to hold space with presence for what's already seeking to emerge through a process of companionship. Like a water lily 🪷 just beneath the surface&#58; you need the right conditions to breakthrough.
          feature_icon: heart
          features:
            - "No judgment, no pressure, no weird vibes"
            - "Consistent availability around your schedule"
            - "Someone who actually shows up"
          image: persona-transition.jpg
          button:
            text: Tell me your situation
            url: "#connect"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

  - block: markdown
    id: connect
    content:
      title: Ready to vamos?
      subtitle: Fill this out. I'll be in touch within 24 hours.
      text: |
        <form name="vyv-lead" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field" class="mt-8 space-y-6 max-w-2xl mx-auto text-left">
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
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Thrifting" /> Thrifting</label>
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;"><input type="checkbox" name="activity" value="Hiking" /> Hiking</label>
            </div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">What's your situation?</label>
              <select name="persona" style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;">
                <option value="">Select one…</option>
                <option>Remote worker / new to Anchorage</option>
                <option>Work non-traditional hours</option>
                <option>Life in transition</option>
                <option>Older adult / looking for an active body double</option>
                <option>Just want company for activities</option>
              </select>
            </div>
            <div>
              <label style="display:block; font-size:0.875rem; font-weight:500; margin-bottom:0.25rem;">What are you after?</label>
              <select name="intent" style="width:100%; border:1px solid #d1d5db; border-radius:0.5rem; padding:0.625rem 1rem; font-size:0.875rem; background:white; box-sizing:border-box;">
                <option value="">Select one…</option>
                <option>A walk or getting outside</option>
                <option>Coffee or a meal</option>
                <option>A night out</option>
                <option>An activity partner</option>
                <option>An accountability buddy</option>
              </select>
            </div>
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
        - question: What Exactly is VyV?
          answer: |
            VyV stands for Vibe & Vamos — vibes and let's go. It's me — Oscar or Oki, if you've gotten to know me and my spirited sense of play disposition. I'm a [change management consultant](https://hello.okiave.com) and [visual artist](https://okiave.com) who built this because I kept seeing the same gap: people wanting to get active and connected, but no reliable, interesting person to do it with. So I became that person. Activity companion. Presence holder. Someone who shows up. I'm currently based in Anchorage, AK and branching out to Austin, TX area.
        - question: Is this a dating service?
          answer: |
            No. This is an activity companion service. VyV is about movement, genuine connection, and having a good time doing things — not romance. If that's what you're looking for, you've got Tinder and other platforms to explore.
        - question: How does pricing work?
          answer: |
            Currently, rates are based on activity type. Use the form above to connect and we'll work out what makes sense for your situation. No rigid packages, no surprise fees.
        - question: What if I've never done the activity before?
          answer: |
            That's kind of the point. We're all beginners at something in life. VyV is about trying things and getting moving, not performing expertise. Think of it as a way to nurture a new hobby, skill or habit you want to practice.
        - question: Where in Anchorage do you operate?
          answer: |
            Most activities happen within Anchorage proper — Midtown, South Addition and the Coastal Trail area. Photo walks and hiking experiences go as far as Turnagain and Palmer, AK.
        - question: How quickly will you follow up?
          answer: |
            Within 24 hours on weekdays. If you submit over the weekend, expect a Monday reply. No auto-responder — I read every form.
        - question: Are you a Facebook hiking group?
          answer: |
            Nope — just me, Oscar. VyV is one person, not a group page or a club. That said, if you're after accessible group hikes in South Central, I'd point you to <a href="https://www.facebook.com/share/g/1ERqniFBEY/?mibextid=wwXIfr" target="_blank" rel="noopener" style="color:#f04e6e;text-decoration:underline;text-underline-offset:3px;">Happy Hikers</a> — they meet every Wednesday and are a great crew. I'm also happy to tag along with you and whoever you bring.
        - question: I'm not really an active person, but I'd love company for coffee or food. Is that something you do?
          answer: |
            Absolutely. Food is how people actually connect — and I'm pretty adventurous about cuisine: 🌮🍜🍛🥙🥟 and anything I haven't tried yet. I'll even dress up and go somewhere with real ambiance if that's your thing. Low pressure, good company, great meal.
        - question: I'm an introvert and don't need a lot of talking. Can we just share space and work on something quietly?
          answer: |
            Completely. I'm an artist — I embroider and do origami — and I genuinely love the quiet that settles in when you're deep in a craft. No pressure to fill the silence. We could share space at the <a href="https://consortiumlibrary.org/" target="_blank" rel="noopener" style="color:#f04e6e;text-decoration:underline;text-underline-offset:3px;">UAA Library</a>, the <a href="https://www.anchoragemuseum.org/" target="_blank" rel="noopener" style="color:#f04e6e;text-decoration:underline;text-underline-offset:3px;">Anchorage Museum</a>, or a coworking spot like <a href="https://akelaspace.com/" target="_blank" rel="noopener" style="color:#f04e6e;text-decoration:underline;text-underline-offset:3px;">Akela</a> or <a href="https://coworkbyrsd.com/" target="_blank" rel="noopener" style="color:#f04e6e;text-decoration:underline;text-underline-offset:3px;">Cowork by RSD</a>. Or somewhere you already feel at home.
        - question: I keep procrastinating. Could you sit with me as an accountability partner for a stretch?
          answer: |
            Yes. Whether it's studying for an exam or finally getting through that pile of paperwork — I'm good at sitting alongside someone who needs an accountability anchor. We can treat our time as a light co-working sprint: map out what you want to get through, then I'm right there while you work. Sometimes just not being alone with the task is the whole thing.

  - block: cta-card
    content:
      title: "Will we vibe though?"
      text: Fill out the form using the button below and I'll respond within 24 hours so we can remote meetup. No pitch. Just a real conversation about what you're looking for. If we vibe cool. If not, all good.
      button:
        text: Connect now →
        url: "#connect"
    design:
      section_break:
        fade_top: "#111827"
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
        css_style: ""
---
