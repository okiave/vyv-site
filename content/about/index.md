---
title: 'Hi. I''m Oscar.'
description: "The person behind VyV — Oscar (Oki). A few frames and the short version."
date: 2026-06-10
type: landing

sections:
  - block: hero
    content:
      eyebrow: Oscar · Oki · Anchorage, AK
      title: "Who is [Oscar]?"
      text: "Before you reach out, it's fair to want to know who you'd actually be spending time with. So — hi. This is me."
      primary_action:
        text: Let's connect
        url: "/#connect"
        icon: heart
        style: gradient
      secondary_action:
        text: Back to home
        url: "/"
        icon: arrow-left
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

  - block: photo-grid
    id: gallery
    content:
      title: "Frames &amp; motion"
      subtitle: "A few of mine — click any tile to see it full size."
      # Pulls every image from assets/media/albums/oscar — drop new photos
      # in that folder and they appear here automatically (sorted by filename).
      album: media/albums/oscar
    design:
      columns: 3
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: markdown
    id: story
    content:
      title: "The short version"
      subtitle: ""
      text: |
        I grew up in Alaska when Alaska still felt like a place where who you knew shaped everything — your weekends, your summer, your sense of what was possible in the depths of winter. That's not nostalgia. It's a reference point.

        Over the years I've worked as a photographer, a storyteller, an IT person, and someone who helps organizations hold together when things get complicated. Good work, all of it. But somewhere along the way I noticed something: the more connected our tools got, the less connected the people seemed. Not just at work — everywhere.

        VyV is my attempt to do something about that.

        The idea is one-on-one activities, chosen to match where you are — your interests, your comfort level, your pace. Not a class. Not therapy. Just a real reason to get out, try something new, and spend time with someone who's genuinely paying attention. A little novelty. A little serendipity. The kind of afternoon that quietly changes how ordinary life feels.

        The longer hope is that it becomes something more. That you meet someone through VyV and later run into them at the farmers market, or recognize them in the elevator at work, and actually have something to say. That one afternoon becomes a thread in something larger.

        Alaska taught me that the people make the place. Let me show you what is possible.
    design:
      css_class: "bg-white dark:bg-gray-950"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: cta-card
    content:
      title: "Think we'd vibe?"
      text: "Only one way to find out. Fill out the form and I'll be in touch within 24 hours — no pitch, just a real conversation."
      button:
        text: Connect now →
        url: "/#connect"
    design:
      section_break:
        fade_top: "#111827"
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
        css_style: ""
---
