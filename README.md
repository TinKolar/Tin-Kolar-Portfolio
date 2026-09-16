# Portfolio

Plain HTML/CSS/JS portfolio site. No build step — open `index.html` directly in a browser, or use VS Code's "Live Server" extension for auto-refresh while editing.

For a quick local preview with a real server (needed so `project.html?id=...` links work), run `node .devserver.js` and open http://localhost:5173.

## Adding a project

1. Make a folder under `media/` for it, e.g. `media/my-project/`, and put a thumbnail image + screenshots in there. For a 3D model, add a `.glb` file.
2. Open `data/projects-data.js`, copy one of the existing objects, edit the fields (see the comment at the top of that file for what each field does), and add it to the `PROJECTS` array.
3. Save, then in GitHub Desktop: review the change, commit, push.

That's it — nothing else needs to change. The home page, projects grid, filter tabs, and project detail page all read from that one file.

## Deploying

Pushed to GitHub Pages from the `main` branch (root). Live at: _add your URL here once set up_.
