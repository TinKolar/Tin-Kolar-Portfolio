// Builds project cards / detail pages from data/projects-data.js.
// Depends on the global PROJECTS array being loaded first.

function projectCardHTML(project) {
  const hasVideo = Boolean(project.youtubeId);
  return `
    <a class="project-card reveal" href="project.html?id=${project.id}">
      <div class="card-thumb">
        <img src="${project.thumbnail}" alt="${project.title} thumbnail" loading="lazy">
        ${hasVideo ? `<div class="play-badge"><span>&#9654;</span></div>` : ""}
      </div>
      <div class="card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="card-tags">
          ${project.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>
    </a>
  `;
}

function renderFeaturedProjects() {
  const el = document.getElementById("featuredGrid");
  if (!el) return;
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  el.innerHTML = featured.map(projectCardHTML).join("");
}

function renderProjectsGrid() {
  const el = document.getElementById("projectsGrid");
  if (!el) return;

  const tabs = document.querySelectorAll(".filter-tab");

  function draw(filter) {
    const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    el.innerHTML = list.length
      ? list.map(projectCardHTML).join("")
      : `<p style="color:var(--text-dim)">No projects in this category yet.</p>`;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      draw(tab.dataset.filter);
    });
  });

  draw("all");
}

function renderProjectDetail() {
  const el = document.getElementById("projectDetail");
  if (!el) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    el.innerHTML = `
      <div class="page-section container">
        <h1>Project not found</h1>
        <p class="writeup">Check the link, or head back to <a class="accent" href="projects.html">all projects</a>.</p>
      </div>`;
    return;
  }

  document.title = `${project.title} — Tin Kolar`;

  const mediaBlock = project.youtubeId
    ? `<iframe src="https://www.youtube.com/embed/${project.youtubeId}" title="${project.title} video" allowfullscreen loading="lazy"></iframe>`
    : project.model3d
      ? `<model-viewer src="${project.model3d}" camera-controls auto-rotate shadow-intensity="1" style="background:var(--bg-elevated-2)"></model-viewer>`
      : `<div class="placeholder-box">No video or 3D model added yet.<br>Set "youtubeId" or "model3d" for this project in data/projects-data.js.</div>`;

  const linksHTML = Object.entries(project.links || {})
    .map(([label, url]) => `<a class="btn btn-outline" href="${url}" target="_blank" rel="noopener">${label}</a>`)
    .join("");

  el.innerHTML = `
    <div class="project-hero container">
      <p class="eyebrow reveal">${project.category.toUpperCase()} · ${project.year}</p>
      <h1 class="reveal">${project.title}</h1>
      <div class="project-meta reveal">
        <div><strong>${project.role || "—"}</strong>Role</div>
        <div><strong>${project.tools || "—"}</strong>Tools</div>
        <div><strong>${project.year}</strong>Year</div>
      </div>
    </div>
    <div class="container">
      <div class="media-embed reveal">${mediaBlock}</div>

      ${project.images && project.images.length ? `
        <div class="gallery-grid reveal">
          ${project.images.map((src) => `<img src="${src}" alt="${project.title} screenshot" loading="lazy">`).join("")}
        </div>` : ""}

      <div class="writeup reveal">
        ${(project.writeup || []).map((p) => `<p>${p}</p>`).join("")}
      </div>

      ${linksHTML ? `<div class="project-links reveal">${linksHTML}</div>` : ""}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProjects();
  renderProjectsGrid();
  renderProjectDetail();

  // re-run scroll reveal setup for elements injected after main.js's own DOMContentLoaded pass
  const revealEls = document.querySelectorAll(".reveal:not(.in-view)");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
});
