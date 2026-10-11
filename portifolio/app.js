const GITHUB_USER = "SamLoboTi";
const CONTACT_EMAIL = "samanthaocireulobo93@icloud.com";

const seedRepos = [
  {
    name: "Projeto-ETL",
    description: "Pipeline ETL em Python para API, tratamento em CSV, carga SQL e evidencias no Databricks.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/Projeto-ETL",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "Code-ki-ARENA-TEC---GAMEPLAY-",
    description: "Plataforma gamificada de programacao com arena 3D, trilhas, backend seguro e dados educacionais.",
    language: "JavaScript",
    html_url: "https://github.com/SamLoboTi/Code-ki-ARENA-TEC---GAMEPLAY-",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "AUTOMACAO-Think-BUSINESS-whatssap",
    description: "Monitoramento inteligente para WhatsApp Business com alertas, dashboard e operacao empresarial.",
    language: "TypeScript",
    html_url: "https://github.com/SamLoboTi/AUTOMACAO-Think-BUSINESS-whatssap",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "PROJETO-ERP-WMS-TMS",
    description: "Dashboard analitico de logistica com ERP, WMS, TMS, KPIs, APIs JSON e revisao de metricas.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/PROJETO-ERP-WMS-TMS",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "-FactoryMind-AI",
    description: "Monitoramento industrial inteligente com Python, NestJS, React, IA preditiva e dashboard operacional.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/-FactoryMind-AI",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "modular-com-Clean-Architecture-simplificada",
    description: "Motor full stack de turismo com Django, React e Clean Architecture simplificada em monolito modular.",
    language: "TypeScript",
    html_url: "https://github.com/SamLoboTi/modular-com-Clean-Architecture-simplificada",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "Projeto-de-An-lise-de-Vendas-com-Python-SQL-",
    description: "Analise de vendas com Python, SQL, SQLite e Power BI para ticket medio e frequencia de compra.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/Projeto-de-An-lise-de-Vendas-com-Python-SQL-",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "Previs-o-de-Riscos-de-Acidentes-de-transito-Kaggle",
    description: "Analise de dados com base em desafio Kaggle para prever risco de acidentes de transito.",
    language: "Jupyter Notebook",
    html_url: "https://github.com/SamLoboTi/Previs-o-de-Riscos-de-Acidentes-de-transito-Kaggle",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "PROJETO_SIS_engenier",
    description: "Projeto Python voltado a sistemas, engenharia e automacao.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/PROJETO_SIS_engenier",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "ANALISE_vendas-2",
    description: "Analise de vendas com Python para leitura de desempenho e oportunidades.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/ANALISE_vendas-2",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "google.colab.import",
    description: "Anotacoes praticas sobre uso de google.colab para montar Drive e manipular arquivos no Colab.",
    language: "Jupyter Notebook",
    html_url: "https://github.com/SamLoboTi/google.colab.import",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
];

const readmeCovers = {
  "Projeto-ETL": {
    src: "https://raw.githubusercontent.com/SamLoboTi/Projeto-ETL/main/964b5c18-9f7d-4ce1-afae-0161c3a21144.jfif",
    alt: "Tabela produtos refinados no Databricks",
  },
  "Code-ki-ARENA-TEC---GAMEPLAY-": {
    src: "https://raw.githubusercontent.com/SamLoboTi/Code-ki-ARENA-TEC---GAMEPLAY-/main/public/characters/goku-data-engineer.png",
    alt: "Code Ki Arena TEC - Goku engenheiro de dados",
  },
  "AUTOMACAO-Think-BUSINESS-whatssap": {
    src: "https://raw.githubusercontent.com/SamLoboTi/AUTOMACAO-Think-BUSINESS-whatssap/main/docs/assets/think-monitoramento-readme.png",
    alt: "Think Monitoramento Business WhatsApp",
  },
  "PROJETO-ERP-WMS-TMS": {
    src: "https://raw.githubusercontent.com/SamLoboTi/PROJETO-ERP-WMS-TMS/main/assets/logimax-marketing-banner.png",
    alt: "LogiMAX - Dashboard Analitico de Logistica",
  },
  "-FactoryMind-AI": {
    src: "https://raw.githubusercontent.com/SamLoboTi/-FactoryMind-AI/main/docs/smart-factory-system-overview.svg",
    alt: "Visao geral do sistema Smart Factory",
  },
  "modular-com-Clean-Architecture-simplificada": {
    src: "plansvel-home.png",
    alt: "Preview da Home Plansvel",
  },
  "teste_spark_Samantha_Lobo.ipynb": {
    src: "assets/project-covers/spark-notebook.svg",
    alt: "Notebook PySpark transformando arquivos de origem em uma tabela analítica validada",
  },
  "Marketing-Analytics-com-PySpark": {
    src: "marketing-pyspark-workspace.png",
    alt: "Workspace real do projeto Marketing Analytics com PySpark",
  },
  "Power-bi-": {
    src: "assets/project-covers/power-bi-dashboards.svg",
    alt: "Dashboard de Business Intelligence com indicadores, série temporal e filtros",
  },
  "PROJETO_SIS_engenier": {
    src: "assets/project-covers/systems-engineering.svg",
    alt: "Diagrama de engenharia de sistemas com APIs e serviços conectados",
  },
  "Previs-o-de-Riscos-de-Acidentes-de-transito-Kaggle": {
    src: "assets/project-covers/traffic-risk-kaggle.svg",
    alt: "Mapa de vias com áreas de risco e previsões de acidentes de trânsito",
  },
  "ANALISE_vendas-2": {
    src: "assets/project-covers/sales-analytics.svg",
    alt: "Relatório de análise de vendas com pedidos, receita e desempenho mensal",
  },
};

const palettes = [
  ["#dbeafe", "#94b7e8"],
  ["#d9f2ee", "#86c8bd"],
  ["#e6e7fa", "#a9a9d8"],
  ["#e4edf5", "#93b1c9"],
  ["#f7eddb", "#dac18f"],
  ["#e1efe4", "#9ac5a6"],
];

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function cleanDescription(repo) {
  const fallback = "Projeto publico no GitHub com codigo, historico e evolucao tecnica.";
  return escapeHtml((repo.description || fallback).replace(/\*\*/g, ""));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}

function getRepoCover(repo) {
  return readmeCovers[repo.name] || null;
}

function getArtworkProfile(repo) {
  const identity = `${repo.name} ${repo.description || ""} ${repo.language || ""}`.toLowerCase();

  if (/factory|industry|industrial|manufactur/.test(identity)) {
    return { label: "INDUSTRIAL ANALYTICS", title: "Operação em foco", icon: "activity" };
  }
  if (/think|whatsapp|automat|monitor|alert|message/.test(identity)) {
    return { label: "AUTOMAÇÃO E MONITORAMENTO", title: "Sinais em ação", icon: "workflow" };
  }
  if (/code.?ki|game|learning|educ|arena/.test(identity)) {
    return { label: "TECNOLOGIA E APRENDIZAGEM", title: "Progresso por dados", icon: "graduation-cap" };
  }
  if (/touris|hotel|travel|modular|full.?stack|plansvel/.test(identity)) {
    return { label: "PRODUTO DIGITAL", title: "Experiência conectada", icon: "layers-2" };
  }
  if (/notebook|colab|kaggle|risk|previs|predict/.test(identity)) {
    return { label: "ANÁLISE E EXPLORAÇÃO", title: "Da hipótese ao insight", icon: "flask-conical" };
  }
  if (/etl|pipeline|databrick|spark|engineer/.test(identity)) {
    return { label: "ENGENHARIA DE DADOS", title: "Dados em movimento", icon: "database" };
  }
  if (/power.?bi|dashboard|sales|venda|analyt|sql|data/.test(identity)) {
    return { label: "DADOS E BUSINESS INTELLIGENCE", title: "Métricas para decidir", icon: "chart-no-axes-combined" };
  }

  return { label: "ENGENHARIA E TECNOLOGIA", title: "Solução em construção", icon: "blocks" };
}

function repositoryArtwork(repo, index) {
  const artwork = getArtworkProfile(repo);
  const color = palettes[index % palettes.length];
  const bars = Array.from({ length: 7 }, (_, position) => {
    const height = 18 + ((repo.name.length * (position + 5) + index * 13) % 49);
    const x = 248 + position * 19;
    return `<rect x="${x}" y="${154 - height}" width="10" height="${height}" rx="3" fill="${color[1]}" opacity="${0.42 + (position % 3) * 0.18}"/>`;
  }).join("");

  return `
    <div class="repo-art" aria-hidden="true">
      <svg viewBox="0 0 430 190" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="repo-gradient-${index}" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="${color[0]}"/>
            <stop offset="1" stop-color="${color[1]}"/>
          </linearGradient>
        </defs>
        <rect width="430" height="190" rx="12" fill="url(#repo-gradient-${index})"/>
        <path d="M0 150 430 32M-30 190 395 0M0 95h430M0 135h430" stroke="#fff" stroke-opacity=".25"/>
        <rect x="26" y="26" width="180" height="136" rx="9" fill="#fff" fill-opacity=".8"/>
        <rect x="40" y="40" width="152" height="10" rx="5" fill="#274766" fill-opacity=".16"/>
        <rect x="40" y="61" width="82" height="7" rx="3.5" fill="#274766" fill-opacity=".12"/>
        <circle cx="64" cy="105" r="23" fill="none" stroke="#168a85" stroke-width="8" stroke-dasharray="104 42" transform="rotate(-90 64 105)"/>
        <path d="M107 128V98h11v30zm20 0V79h11v49zm20 0V91h11v37zm20 0V68h11v60z" fill="#2879bc" fill-opacity=".76"/>
        <rect x="230" y="38" width="174" height="116" rx="10" fill="#fff" fill-opacity=".84"/>
        <rect x="248" y="53" width="76" height="8" rx="4" fill="#274766" fill-opacity=".2"/>
        ${bars}
        <circle cx="375" cy="60" r="8" fill="#118c7c"/>
        <rect x="248" y="163" width="156" height="4" rx="2" fill="#fff" fill-opacity=".5"/>
      </svg>
      <span class="repo-art-caption"><i data-lucide="${artwork.icon}"></i><span><small>${artwork.label}</small><strong>${artwork.title}</strong></span></span>
    </div>
  `;
}

function formatDate(dateValue) {
  if (!dateValue) return "Atualizado recentemente";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateValue));
}

function isStableHomepage(url) {
  if (!url) return false;
  const blockedHosts = ["ngrok-free.dev", "trycloudflare.com"];

  try {
    const { hostname } = new URL(url);
    return !blockedHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));
  } catch (error) {
    return false;
  }
}

function renderRepos(repos) {
  const grid = document.querySelector("#repo-grid");
  if (!grid) return;

  const visibleRepos = repos.filter((repo) => !repo.fork && repo.name !== GITHUB_USER).slice(0, 12);

  grid.innerHTML = visibleRepos
    .map((repo, index) => {
      const [a, b] = palettes[index % palettes.length];
      const language = repo.language || "Projeto";
      const homepage = isStableHomepage(repo.homepage) ? repo.homepage.trim() : "";
      const cover = getRepoCover(repo);
      return `
        <article class="repo-card reveal is-visible" style="--card-a: ${a}; --card-b: ${b}">
          <div class="repo-visual ${cover ? "has-cover" : ""}">
            ${repositoryArtwork(repo, index)}
            ${
              cover
                ? `<img src="${cover.src}" alt="${cover.alt}" loading="lazy" />`
                : ""
            }
            <span>${language}</span>
          </div>
          <div class="repo-body">
            <h3>${escapeHtml(repo.name)}</h3>
            <p>${cleanDescription(repo)}</p>
            <div class="repo-meta">
              <span>${icon("star")} ${repo.stargazers_count || 0}</span>
              <span>${icon("git-fork")} ${repo.forks_count || 0}</span>
              <span>${icon("clock-3")} ${formatDate(repo.updated_at)}</span>
            </div>
            <div class="repo-actions">
              <a href="${repo.html_url}" target="_blank" rel="noreferrer">${icon("external-link")} Codigo</a>
              ${
                homepage
                  ? `<a href="${homepage}" target="_blank" rel="noreferrer">${icon("monitor-play")} Preview</a>`
                  : ""
              }
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll(".repo-visual img").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.closest(".repo-visual").classList.remove("has-cover");
        image.remove();
      },
      { once: true },
    );
  });

  document.querySelector("#repo-count").textContent = visibleRepos.length || 9;
  if (window.lucide) window.lucide.createIcons();
}

async function loadGithub() {
  if (!document.querySelector("#repo-grid")) return;

  renderRepos(seedRepos);

  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`),
    ]);

    if (!profileResponse.ok || !reposResponse.ok) throw new Error("GitHub indisponivel");

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    document.querySelector("#avatar").src = profile.avatar_url;
    document.querySelector("#github-meta").textContent =
      `${profile.public_repos} repos publicos | perfil criado em ${formatDate(profile.created_at)}`;
    renderRepos(repos);
  } catch (error) {
    document.querySelector("#github-meta").textContent = "Mostrando repositorios salvos localmente";
  }
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupContact() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Contato profissional - ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
    const target = CONTACT_EMAIL ? CONTACT_EMAIL : "";
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  });
}

function setupVideoPreviews() {
  const modal = document.querySelector("#video-modal");
  if (!modal) return;

  const player = document.querySelector("#video-modal-player");
  const title = document.querySelector("#video-modal-title");
  const closeButton = modal.querySelector(".video-close");
  let activeTrigger = null;

  function closePreview() {
    modal.setAttribute("aria-hidden", "true");
    player.pause();
    player.removeAttribute("src");
    player.load();
    document.body.classList.remove("has-open-modal");
    if (activeTrigger) activeTrigger.focus();
  }

  document.querySelectorAll(".preview-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      activeTrigger = trigger;
      title.textContent = trigger.dataset.videoTitle || "Preview";
      player.src = trigger.dataset.videoSrc;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("has-open-modal");
      player.play().catch(() => {});
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closePreview);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePreview();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closePreview();
  });
}

function setupCanvas() {
  const canvas = document.querySelector("#motion-field");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particles = [];
  let animationFrame = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const amount = Math.min(52, Math.max(30, Math.floor(window.innerWidth / 26)));
    particles = Array.from({ length: amount }, (_, index) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 0.22 + Math.random() * 0.28,
      size: 1.6 + Math.random() * 1.1,
      hue: index % 4,
    }));
    draw(!reducedMotion);
  }

  function draw(animate = true) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle, index) => {
      if (animate) {
        particle.y -= particle.speed;
        particle.x += Math.sin(Date.now() * 0.00025 + index) * 0.08;
      }

      if (particle.y < -20) {
        particle.y = window.innerHeight + 20;
        particle.x = Math.random() * window.innerWidth;
      }

      const colors = ["#245fd2", "#078f8a", "#178f55", "#ad7416"];
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = colors[particle.hue];
      context.globalAlpha = 0.72;
      context.shadowBlur = 10;
      context.shadowColor = colors[particle.hue];
      context.fill();
      context.shadowBlur = 0;
      context.globalAlpha = 1;

      for (let i = index + 1; i < particles.length; i += 1) {
        const other = particles[i];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 178) {
          context.globalAlpha = ((178 - distance) / 178) * 0.48;
          context.lineWidth = 0.8;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = colors[particle.hue];
          context.stroke();
          context.globalAlpha = 1;
        }
      }
    });

    if (animate && !document.hidden) animationFrame = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(animationFrame);
    if (document.hidden) return;
    draw(!reducedMotion);
  });

  resize();
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  setupCanvas();
  setupReveal();
  setupContact();
  setupVideoPreviews();
  loadGithub();
});
