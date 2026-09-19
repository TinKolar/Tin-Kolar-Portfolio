/*
  ADD YOUR PROJECTS HERE.

  Each project is one object in the PROJECTS array below. To add a new project:
    1. Make a folder under media/ for it, e.g. media/my-project/
       and drop screenshots + a thumbnail image in there (.jpg/.png).
       For a 3D model, export a .glb file into that same folder.
    2. Copy one of the objects below, change the values, add it to the array.
    3. Save this file, commit, push. That's the whole workflow.

  Field notes:
    id          - unique, url-safe, no spaces. Used in the address bar as project.html?id=this
    category    - one of: "unreal" | "unity" | "app" | "3d"  (controls the filter tabs)
    featured    - true shows it on the home page (keep it to ~3 featured projects)
    youtubeId   - just the ID from the YouTube URL, e.g. https://youtube.com/watch?v=XXXXXXXX -> "XXXXXXXX"
                  leave as "" if you don't have a video yet
    model3d     - path to a .glb file for an interactive 3D viewer, or null if none
    images      - array of screenshot paths for the gallery. Either a plain path,
                  or { src: "path", caption: "text under the image" }
    links       - any of github / itch / download / artstation, omit ones you don't have
*/

const PROJECTS = [
  {
    id: "slippy-rails",
    title: "Slippy Rails",
    category: "app",
    year: 2025,
    featured: true,
    tags: ["Mobile", "Unity", "3D"],
    thumbnail: "media/slippy-rails/thumb.jpg",
    youtubeId: "",
    images: [
      { src: "media/slippy-rails/title-screen.jpg", caption: "Main menu with coin balance and in-game shop" },
      { src: "media/slippy-rails/gameplay-start.jpg", caption: "Round start — lives, banana counter and power-up slots" },
      { src: "media/slippy-rails/gameplay-night.jpg", caption: "Night run: dodging a rocket while collecting bananas" },
      { src: "media/slippy-rails/loading-screen.jpg", caption: "Loading screen" }
    ],
    model3d: null,
    description: "A mobile arcade game where you run the rails, dodge hazards and cash in bananas.",
    role: "Solo Developer",
    tools: "Unity, C#, Blender",
    writeup: [
      "Slippy Rails is a mobile arcade game set in a stylised jungle. You move between train tracks, collect bananas, and survive incoming hazards for as long as you can. Bananas convert into coins, which feed a shop and a set of power-ups.",
      "Built as a full release-ready package rather than a prototype: it ships with a main menu, a loading flow, a persistent coin economy, a shop, three collectible power-ups, and a lives system, all driven by touch controls designed for one-handed play."
    ],
    links: {}
  },
  {
    id: "tank-trouble",
    title: "Tank Trouble Recreation",
    category: "unity",
    year: 2026,
    featured: true,
    tags: ["Unity 6", "C#", "Local Multiplayer", "2D"],
    thumbnail: "media/tank-trouble/thumb.jpg",
    youtubeId: "",
    images: [
      { src: "media/tank-trouble/editor-level-blockout.jpg", caption: "Development shot: arena blockout in the Unity scene view, with tank spawn points" },
      { src: "media/tank-trouble/editor-arena-scene.jpg", caption: "Development shot: a second arena layout and the scene's manager objects" }
    ],
    model3d: null,
    description: "A 2D local-multiplayer tank duel built in Unity 6, recreating the browser classic.",
    role: "Solo Developer",
    tools: "Unity 6, C#, TextMesh Pro",
    writeup: [
      "A recreation of the browser game Tank Trouble: two or more players share a keyboard and fight through a maze arena, firing bouncing shells that are just as likely to kill you as your opponent.",
      "The project is structured around a full scene flow rather than a single playable level — a loader, a main menu, a player-select screen, a waiting lobby, and multiple arena scenes, coordinated by dedicated spawn and match-end managers."
    ],
    links: {}
  }
];
