/* =====================================================================
   ADDED BY CLAUDE (baseline build) — this whole file is new.
   Content comes from your resume; edit the arrays below to update the site.
   ===================================================================== */

/* ---------- CONTENT ----------
   Each entry: title, meta (role/dates), bullets (array), image, link, linkText.
   TODO: every `image` currently points at the placeholder. Replace with real
   screenshots/photos in ./assets/ when you have them.
   Leave `link` empty ("") to hide the link button. */
const PLACEHOLDER_IMG = "./assets/placeholder.jpg"; // TODO: missing assets use this

const projects = [
  {
    title: "Reid: AI-Powered Adult Literacy App",
    meta: "LA Hacks 2026 · Spring 2026",
    bullets: [
      "Built a cross-platform iOS/Android app in React Native and TypeScript with a team of 4 to help low-literacy adults practice reading through AI-generated lessons tailored to their goals and reading level.",
      "Designed the Supabase (Postgres) schema for lesson and user data and connected the app to the database for storing and retrieving lessons and user progress.",
      "Developed the lesson plan and evaluation metrics based on Duke and Cartwright's Active View of Reading model, drawing on literacy research.",
    ],
    image: "./assets/REID-img.png", // TODO: Reid screenshot
    link: "https://devpost.com/software/reid",
    linkText: "View on Devpost",
  },
  {
    title: "Bugland",
    meta: "Solo project, CS 146J · Spring 2026",
    bullets: [
      "Solo project for CS 146J to creatively apply web application foundations, built with basic JavaScript and HTML/CSS.",
      "Educational browser game concept designed to introduce native Californian insect life to the player.",
    ],
    image: "./assets/Bugland-img.png", // TODO: Bugland screenshot
    link: "https://braveyoungcowboys.neocities.org/bugland/",
    linkText: "Play the demo",
  },
  {
    title: "Last Dive: Hybrid Escape Room Game",
    meta: "CS 247G, team project · Spring 2025",
    bullets: [
      "Worked in a small team to design and develop a self-guided escape room combining physical immersion with a digital interface built in React Native.",
      "Created a puzzle management system and narrative framework using web technologies.",
      "Co-led visual and user experience design.",
    ],
    image: "./assets/LastDive-img.png", // TODO: Last Dive photo/screenshot
    link: "https://mechanicsofmagic.com/2025/06/07/p2-last-dive-group-21/",
    linkText: "View project showcase",
  },
];

const experiences = [
  {
    title: "Student Intern, Intumit Inc.",
    meta: "June 2026 – August 2026",
    bullets: [
      "Independently designed and built demos of multi-agent AI systems for industry use cases using prompt engineering, JSON, and Groovy script; presented to the entire company.",
      "Researched and presented on current applications of agentic AI in industry to the Market Development team.",
      "Developed proof-of-concept prototypes for education-sector clients, consolidated them into demos, and presented them to 3 executives from the client company.",
    ],
    image: PLACEHOLDER_IMG, // TODO: Intumit image
    link: "",
    linkText: "",
  },
  {
    title:
      "Computational Analysis Intern, Dahlberg Lab, SLAC National Accelerator Laboratory",
    meta: "June 2025 – August 2025",
    bullets: [
      "Designed bespoke image correlation software to align Cryo-SEM and CryoNanoSIMS data, handling irregular resolution, image deformation, and degradation.",
      "Implemented image processing pipelines with OpenCV and built an interactive UI with Napari and Matplotlib for real-time data visualization and modification.",
      "Processed and analyzed Cryo-SEM data using image deconvolution and segmentation, and trained machine learning models to segment patterns in cellular tomography data.",
    ],
    image: PLACEHOLDER_IMG, // TODO: SLAC image
    link: "https://github.com/yinlinzhao/cryonanosims-registration/tree/main",
    linkText: "View GitHub repository",
  },
  {
    title: "Resident Student Leader, Stanford Residential Education",
    meta: "May 2026 – June 2027",
    bullets: [
      "Provide on-call crisis response for a community of 80 residents, de-escalating situations and making sound judgment calls under pressure; connect residents with campus resources.",
      "Run social events with an average attendance of 30–40 students.",
      "Manage dormitory funds by tracking expenses and creating budget plans for supplies and events.",
    ],
    image: PLACEHOLDER_IMG, // TODO: ResEd image
    link: "",
    linkText: "",
  },
  {
    title: "Student Assistant, Stanford ITALIC",
    meta: "March 2026 – June 2026",
    bullets: [
      "Coordinated a mentorship program between ITALIC alumni and current students, matching 20 students with alumni and managing program funding.",
      "Designed informational materials in Figma to promote awareness of and engagement with the ITALIC program.",
      "Prepared materials for ITALIC course workshops and facilitated communication between students and instructors.",
    ],
    image: PLACEHOLDER_IMG, // TODO: ITALIC image
    link: "",
    linkText: "",
  },
];

/* ---------- GALLERY ----------
   Fills the existing .showcase markup in each gallery and wires up the
   left/right arrow images (the two .lr images inside .lr-buttons). */
function setupGallery(galleryId, items) {
  const gallery = document.getElementById(galleryId);
  if (!gallery || items.length === 0) return;

  const info = gallery.querySelector(".showcase-info");
  const image = gallery.querySelector(".showcase-image");
  const link = gallery.querySelector(".showcase > a");
  const [prevBtn, nextBtn] = gallery.querySelectorAll(".lr");
  let index = 0;

  function render() {
    const item = items[index];

    info.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    const meta = document.createElement("p");
    meta.className = "showcase-meta";
    meta.textContent = `${item.meta}  (${index + 1} of ${items.length})`;
    const desc = document.createElement("div");
    desc.className = "showcase-desc";
    const ul = document.createElement("ul");
    item.bullets.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });
    desc.appendChild(ul);
    info.append(h3, meta, desc);

    image.src = item.image || PLACEHOLDER_IMG;
    image.alt = item.title;

    if (item.link) {
      link.href = item.link;
      link.textContent = item.linkText || "View page";
      link.target = "_blank";
      link.rel = "noopener";
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  }

  function step(direction) {
    index = (index + direction + items.length) % items.length; // wraps around
    render();
  }

  // make the arrow images behave like accessible buttons
  [
    [prevBtn, -1, "Previous"],
    [nextBtn, 1, "Next"],
  ].forEach(([el, dir, label]) => {
    if (!el) return;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("alt", label);
    el.addEventListener("click", () => step(dir));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        step(dir);
      }
    });
  });

  render();
}

/* ---------- NAV BUTTONS + RETURN TO TOP ---------- */
function setupNav() {
  document.querySelectorAll(".nav-btn[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const topBtn = document.querySelector("footer button");
  if (topBtn) {
    topBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }
}

/* ---------- NAME TOGGLE ---------- */
function setupNameToggle() {
  const name = document.querySelector("header h1");
  if (!name) return;

  const names = ["YINLIN ZHAO", "AILEEN ZHAO"];
  let i = 0;

  function toggle() {
    i = (i + 1) % names.length;
    name.textContent = names[i];
  }

  // make it keyboard accessible too
  name.setAttribute("role", "button");
  name.setAttribute("tabindex", "0");
  name.setAttribute("title", "Click to switch names");
  name.addEventListener("click", toggle);
  name.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupGallery("projects-gallery", projects);
  setupGallery("experiences-gallery", experiences);
  setupNav();
  setupNameToggle(); // ADDED
});
