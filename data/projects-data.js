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
      { src: "media/slippy-rails/title-screen.jpg", caption: "Main menu, with coin balance and shop" },
      { src: "media/slippy-rails/gameplay-start.jpg", caption: "Round start" },
      { src: "media/slippy-rails/gameplay-night.jpg", caption: "Night level" },
      { src: "media/slippy-rails/loading-screen.jpg", caption: "Loading screen" }
    ],
    model3d: null,
    description: "A hypercasual mobile game about throwing bananas onto the rails to stop the trains.",
    role: "Solo Developer",
    tools: "Unity, C#",
    writeup: [
      "A hypercasual mobile game set in a stylised jungle. You throw bananas onto the tracks so the trains slip on them — the goal is to stop them getting to the other side.",
      "Made for landscape play. Includes a main menu, a coin economy with a shop, three power-ups, and a lives system."
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
      "A recreation of the browser game Tank Trouble. Players share one keyboard and duel in a maze arena, firing shells that bounce off the walls.",
      "Includes a main menu, a player-select screen and several arena layouts."
    ],
    links: {}
  }
];
