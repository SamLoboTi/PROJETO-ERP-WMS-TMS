const GITHUB_USER = "SamLoboTi";
const CONTACT_EMAIL = "";

const featuredRepoOrder = [
  "Dashboard-Power-BI-MiBusca-Crescimento-Clientes",
  "Code-ki-ARENA-TEC---GAMEPLAY-",
  "PROJETO-ERP-WMS-TMS",
  "Projeto-ETL",
  "Projeto-de-An-lise-de-Vendas-com-Python-SQL-",
  "-FactoryMind-AI",
  "AUTOMACAO-Think-BUSINESS-whatssap",
];

const seedRepos = [
  {
    name: "Dashboard-Power-BI-MiBusca-Crescimento-Clientes",
    description: "Dashboard Power BI para crescimento de clientes, vendas, financeiro, LTV, contratos, fidelidade e medidas DAX.",
    language: "Power BI",
    html_url: "https://github.com/SamLoboTi/PROJETO-ERP-WMS-TMS/tree/codex/realtime-restructure-validation/portifolio/assets/mibusca-powerbi",
    homepage: "assets/mibusca-powerbi/README.md",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-24T23:20:21Z",
  },
  {
    name: "Projeto-ETL",
    description: "Pipeline ETL em Python com extração via API, tratamento, carga SQL e validação no Databricks.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/Projeto-ETL",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "Code-ki-ARENA-TEC---GAMEPLAY-",
    description: "EdTech para formação em Dados com Python, SQL, 20 mil desafios, progresso, dashboards e automação.",
    language: "JavaScript",
    html_url: "https://github.com/SamLoboTi/Code-ki-ARENA-TEC---GAMEPLAY-",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "AUTOMACAO-Think-BUSINESS-whatssap",
    description: "Monitoramento para WhatsApp Business com alertas, dashboard, dados operacionais e automação.",
    language: "TypeScript",
    html_url: "https://github.com/SamLoboTi/AUTOMACAO-Think-BUSINESS-whatssap",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "PROJETO-ERP-WMS-TMS",
    description: "Produto analítico de logística com ERP, WMS, TMS, KPIs, APIs, qualidade e revisão de métricas.",
    language: "Python",
    html_url: "https://github.com/SamLoboTi/PROJETO-ERP-WMS-TMS",
    homepage: "",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "",
  },
  {
    name: "-FactoryMind-AI",
    description: "Produto de dados industriais com Python, APIs, IA preditiva e dashboard para monitoramento operacional.",
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
  "Dashboard-Power-BI-MiBusca-Crescimento-Clientes": {
    src: "assets/mibusca-powerbi/dashboard-financeiro.png",
    alt: "Dashboard Power BI MiBusca - financeiro, vendas e crescimento",
  },
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
    src: "https://raw.githubusercontent.com/SamLoboTi/modular-com-Clean-Architecture-simplificada/main/docs/assets/plansvel-home.png",
    alt: "Preview da Home Plansvel",
  },
};

const palettes = [
  ["#4ed6a8", "#1c4f63"],
  ["#f2bf5b", "#593b7a"],
  ["#ff7664", "#263d66"],
  ["#68d8f7", "#4a3b21"],
  ["#d7f171", "#243f36"],
  ["#ff9a8a", "#224c52"],
];

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function cleanDescription(repo) {
  const fallback = "Projeto publico no GitHub com codigo, historico e evolucao tecnica.";
  return (repo.description || fallback).replace(/\*\*/g, "");
}

function getRepoCover(repo) {
  return readmeCovers[repo.name] || null;
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
  if (url.startsWith("assets/")) return true;
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
  const visibleRepos = repos
    .filter((repo) => !repo.fork && repo.name !== GITHUB_USER)
    .sort((first, second) => {
      const firstPosition = featuredRepoOrder.indexOf(first.name);
      const secondPosition = featuredRepoOrder.indexOf(second.name);
      const firstRank = firstPosition === -1 ? featuredRepoOrder.length : firstPosition;
      const secondRank = secondPosition === -1 ? featuredRepoOrder.length : secondPosition;

      if (firstRank !== secondRank) return firstRank - secondRank;
      return new Date(second.updated_at || 0) - new Date(first.updated_at || 0);
    })
    .slice(0, 12);

  grid.innerHTML = visibleRepos
    .map((repo, index) => {
      const [a, b] = palettes[index % palettes.length];
      const language = repo.language || "Projeto";
      const homepage = isStableHomepage(repo.homepage) ? repo.homepage.trim() : "";
      const cover = getRepoCover(repo);
      return `
        <article class="repo-card reveal is-visible" style="--card-a: ${a}; --card-b: ${b}">
          <div class="repo-visual ${cover ? "has-cover" : ""}">
            ${
              cover
                ? `<img src="${cover.src}" alt="${cover.alt}" loading="lazy" onerror="this.closest('.repo-visual').classList.remove('has-cover'); this.remove();" />`
                : ""
            }
            <span>${language}</span>
          </div>
          <div class="repo-body">
            <h3>${repo.name}</h3>
            <p>${cleanDescription(repo)}</p>
            <div class="repo-meta">
              <span>${icon("star")} ${repo.stargazers_count || 0}</span>
              <span>${icon("git-fork")} ${repo.forks_count || 0}</span>
              <span>${icon("clock-3")} ${formatDate(repo.updated_at)}</span>
            </div>
            <div class="repo-actions">
              <a href="${repo.html_url}" target="_blank" rel="noreferrer">${icon("github")} Codigo</a>
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

  document.querySelector("#repo-count").textContent = visibleRepos.length || 9;
  if (window.lucide) window.lucide.createIcons();
}

async function loadGithub() {
  renderRepos(seedRepos);

  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`),
    ]);

    if (!profileResponse.ok || !reposResponse.ok) throw new Error("GitHub indisponivel");

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    const repoNames = new Set(repos.map((repo) => repo.name));
    const mergedRepos = [
      ...seedRepos.filter((repo) => !repoNames.has(repo.name)),
      ...repos,
    ];

    document.querySelector("#avatar").src = profile.avatar_url;
    document.querySelector("#github-meta").textContent =
      `${profile.public_repos} repos publicos | perfil criado em ${formatDate(profile.created_at)}`;
    renderRepos(mergedRepos);
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
  document.querySelector("#contact-form").addEventListener("submit", (event) => {
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
  const context = canvas.getContext("2d");
  const pointer = { x: 0.5, y: 0.5 };
  let particles = [];

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const amount = Math.min(90, Math.max(34, Math.floor(window.innerWidth / 18)));
    particles = Array.from({ length: amount }, (_, index) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 0.25 + Math.random() * 0.7,
      size: 1 + Math.random() * 2.4,
      hue: index % 3,
    }));
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle, index) => {
      particle.y -= particle.speed;
      particle.x += Math.sin(Date.now() * 0.0008 + index) * 0.25 + (pointer.x - 0.5) * 0.3;

      if (particle.y < -20) {
        particle.y = window.innerHeight + 20;
        particle.x = Math.random() * window.innerWidth;
      }

      const colors = ["rgba(78, 214, 168, 0.7)", "rgba(242, 191, 91, 0.56)", "rgba(104, 216, 247, 0.52)"];
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = colors[particle.hue];
      context.fill();

      for (let i = index + 1; i < particles.length; i += 1) {
        const other = particles[i];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 105) {
          context.globalAlpha = (105 - distance) / 420;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = "#ffffff";
          context.stroke();
          context.globalAlpha = 1;
        }
      }
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX / window.innerWidth;
    pointer.y = event.clientY / window.innerHeight;
  });

  resize();
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  setupCanvas();
  setupReveal();
  setupContact();
  setupVideoPreviews();
  loadGithub();
});
