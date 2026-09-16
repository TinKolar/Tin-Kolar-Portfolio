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
    images      - array of screenshot paths for the gallery on the project page
    links       - any of github / itch / download, omit ones you don't have
*/

const PROJECTS = [
  {
    id: "neon-drift",
    title: "Neon Drift",
    category: "unreal",
    year: 2025,
    featured: true,
    tags: ["Solo Project", "C++", "Unreal Engine 5"],
    thumbnail: "media/placeholder/thumb-neon-drift.svg",
    youtubeId: "",
    images: [
      "media/placeholder/shot-generic-1.svg",
      "media/placeholder/shot-generic-2.svg"
    ],
    model3d: null,
    description: "A short one-line hook about the project for the card and top of the detail page.",
    role: "Solo Developer",
    tools: "Unreal Engine 5, C++, Blender",
    writeup: [
      "Replace this with a couple of paragraphs about the project: what it is, what problem it solves or what experience it delivers.",
      "Then talk about your specific contribution and a technical challenge you solved — this is the part recruiters actually read."
    ],
    links: { github: "#", itch: "#" }
  },
  {
    id: "orbit-forge",
    title: "Orbit Forge",
    category: "unity",
    year: 2024,
    featured: true,
    tags: ["Team Project", "C#", "Unity"],
    thumbnail: "media/placeholder/thumb-orbit-forge.svg",
    youtubeId: "",
    images: [
      "media/placeholder/shot-generic-1.svg",
      "media/placeholder/shot-generic-2.svg"
    ],
    model3d: null,
    description: "A short one-line hook about the project for the card and top of the detail page.",
    role: "Gameplay Programmer",
    tools: "Unity, C#, FMOD",
    writeup: [
      "Replace this with a couple of paragraphs about the project.",
      "Team size, your role, and a technical highlight go well here."
    ],
    links: { github: "#" }
  },
  {
    id: "relic-bust",
    title: "Relic Bust",
    category: "3d",
    year: 2025,
    featured: true,
    tags: ["Environment Art", "Blender", "Substance Painter"],
    thumbnail: "media/placeholder/thumb-relic-bust.svg",
    youtubeId: "",
    images: [
      "media/placeholder/shot-generic-1.svg"
    ],
    model3d: null,
    description: "A rotatable 3D model piece — once you add a .glb path above, this becomes an interactive viewer.",
    role: "3D Artist",
    tools: "Blender, Substance Painter",
    writeup: [
      "Replace this with the story behind the model: reference, sculpting/retopo/bake/texture pipeline, poly count, etc."
    ],
    links: { artstation: "#" }
  },
  {
    id: "pocket-tracker",
    title: "Pocket Tracker",
    category: "app",
    year: 2024,
    featured: false,
    tags: ["Mobile", "Unity"],
    thumbnail: "media/placeholder/thumb-pocket-tracker.svg",
    youtubeId: "",
    images: [
      "media/placeholder/shot-generic-1.svg"
    ],
    model3d: null,
    description: "A short one-line hook about the project for the card and top of the detail page.",
    role: "Developer",
    tools: "Unity, C#",
    writeup: [
      "Replace this with a couple of paragraphs about the project."
    ],
    links: { download: "#" }
  }
];
