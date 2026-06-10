---
title: 'Who Is Behind VYV?'
description: "The person behind VYV — Oscar (Oki). A few frames and the short version."
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
      subtitle: "Placeholder copy — about a 20-second read. Swap in real words when you're ready."
      text: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
