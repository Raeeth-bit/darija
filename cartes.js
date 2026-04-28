<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Les couleurs en Darija</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: system-ui, sans-serif;
      background: #f5f3ee;
      min-height: 100vh;
      padding: 2rem 1rem;
    }

    h1 {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 600;
      color: #2c2c2a;
      margin-bottom: 0.4rem;
    }

    .subtitle {
      text-align: center;
      font-size: 0.85rem;
      color: #888;
      margin-bottom: 2rem;
    }

    /* ── Grille de cartes ── */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 14px;
      max-width: 860px;
      margin: 0 auto;
    }

    /* ── Carte individuelle ── */
    .card {
      cursor: pointer;
      height: 120px;
      perspective: 700px;
    }

    .card-inner {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.45s cubic-bezier(.4,0,.2,1);
    }

    .card.flipped .card-inner {
      transform: rotateY(180deg);
    }

    .face {
      position: absolute;
      inset: 0;
      border-radius: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border: 1px solid rgba(0,0,0,0.08);
      gap: 6px;
    }

    .front { background: #fff; }

    .back {
      transform: rotateY(180deg);
      gap: 4px;
    }

    .dot {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.15);
      flex-shrink: 0;
    }

    .front-label {
      font-size: 15px;
      font-weight: 600;
      color: #2c2c2a;
    }

    .hint {
      font-size: 11px;
      color: #aaa;
    }

    .back-masc {
      font-size: 14px;
      font-weight: 600;
    }

    .back-fem {
      font-size: 13px;
      opacity: 0.8;
    }

    .back-tag {
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 20px;
      background: rgba(255,255,255,0.25);
      margin-bottom: 2px;
    }

    /* ── Bouton audio ── */
    .audio-btn {
      margin-top: 4px;
      background: rgba(255,255,255,0.3);
      border: 1px solid rgba(255,255,255,0.5);
      border-radius: 20px;
      padding: 3px 10px;
      font-size: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: background 0.2s;
    }

    .audio-btn:hover { background: rgba(255,255,255,0.5); }

    .audio-btn svg {
      width: 13px;
      height: 13px;
      fill: currentColor;
    }

    /* ── Section nuances ── */
    .section-label {
      max-width: 860px;
      margin: 1.8rem auto 0.6rem;
      font-size: 13px;
      font-weight: 600;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .extras {
      display: flex;
      gap: 14px;
      max-width: 860px;
      margin: 0 auto;
    }

    .extras .card {
      flex: 1;
      height: 90px;
    }

    /* ── Barre d'actions ── */
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 860px;
      margin: 0 auto 1.2rem;
      flex-wrap: wrap;
      gap: 8px;
    }

    .toolbar span {
      font-size: 13px;
      color: #888;
    }

    .btn {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 6px 14px;
      font-size: 13px;
      cursor: pointer;
      color: #444;
      transition: background 0.15s;
    }

    .btn:hover { background: #f0ede8; }
  </style>
</head>
<body>

<h1>Les couleurs — الدارجة</h1>
<p class="subtitle">Clique sur une carte pour voir la traduction · clique sur 🔊 pour écouter</p>

<div class="toolbar">
  <span id="progress">0 / 11 retournées</span>
  <div style="display:flex; gap:8px;">
    <button class="btn" onclick="shuffleCards()">Mélanger</button>
    <button class="btn" onclick="resetAll()">Tout remettre</button>
  </div>
</div>

<div class="grid" id="grid"></div>

<p class="section-label">Nuances</p>
<div class="extras" id="extras"></div>

<script>
  // ════════════════════════════════════════════════
  //  DONNÉES — modifie ici pour ajouter / retirer
  // ════════════════════════════════════════════════
  const colors = [
    { fr: "Rouge",  masc: "7mer",            fem: "7emra",          hex: "#E24B4A", audio: "rouge.mp3" },
    { fr: "Bleu",   masc: "Zre9",            fem: "Zer9a",          hex: "#378ADD", audio: "bleu.mp3"  },
    { fr: "Vert",   masc: "Khder",           fem: "Khedra",         hex: "#639922", audio: "vert.mp3"  },
    { fr: "Jaune",  masc: "Sfer",            fem: "Sefra",          hex: "#EF9F27", audio: "jaune.mp3" },
    { fr: "Rose",   masc: "Rose",            fem: "Rosia",          hex: "#D4537E", audio: "rose.mp3"  },
    { fr: "Violet", masc: "Banafsaji",       fem: "Banafsajia",     hex: "#7F77DD", audio: "violet.mp3"},
    { fr: "Orange", masc: "Limouni",         fem: "Limounia",       hex: "#D85A30", audio: "orange.mp3"},
    { fr: "Marron", masc: "9hwi / Bounni",   fem: "9hwia / Bounnia",hex: "#633806", audio: "marron.mp3"},
    { fr: "Noir",   masc: "K7el",            fem: "Ke7la",          hex: "#2C2C2A", audio: "noir.mp3"  },
    { fr: "Gris",   masc: "Gris",            fem: "Gria",           hex: "#888780", audio: "gris.mp3"  },
    { fr: "Blanc",  masc: "Byed",            fem: "Bida",           hex: "#e8e6df", audio: "blanc.mp3" },
  ];

  const nuances = [
    { fr: "Clair",  darija: "Fate7",  hex: "#b8d4f0", audio: "clair.mp3"  },
    { fr: "Foncé",  darija: "Ghame9", hex: "#1a3a5c", audio: "fonce.mp3"  },
  ];

  // ════════════════════════════════════════════════
  //  UTILITAIRES
  // ════════════════════════════════════════════════
  function textColor(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.55 ? "#2c2c2a" : "#f5f3ee";
  }

  function playAudio(file, e) {
    e.stopPropagation();
    // Remplace "audio/" par le chemin de ton dossier audio
    const audio = new Audio("audio/" + file);
    audio.play().catch(() => alert("Audio introuvable : " + file));
  }

  function speakerIcon() {
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
    </svg>`;
  }

  let flippedCount = 0;
  function updateProgress() {
    document.getElementById("progress").textContent =
      `${flippedCount} / ${colors.length} retournées`;
  }

  // ════════════════════════════════════════════════
  //  CONSTRUCTION DES CARTES
  // ════════════════════════════════════════════════
  function buildCard(item, isNuance = false) {
    const tc = textColor(item.hex);
    const card = document.createElement("div");
    card.className = "card";

    const backContent = isNuance
      ? `<span class="back-masc" style="color:${tc};">${item.darija}</span>`
      : `<span class="back-tag" style="color:${tc};">♂ / ♀</span>
         <span class="back-masc" style="color:${tc};">${item.masc}</span>
         <span class="back-fem"  style="color:${tc};">${item.fem}</span>`;

    card.innerHTML = `
      <div class="card-inner">
        <div class="face front">
          <div class="dot" style="background:${item.hex};"></div>
          <span class="front-label">${item.fr}</span>
          <span class="hint">cliquer ↓</span>
        </div>
        <div class="face back" style="background:${item.hex}; border-color:transparent;">
          ${backContent}
          <button class="audio-btn" style="color:${tc};" onclick="playAudio('${item.audio}', event)">
            ${speakerIcon()} écouter
          </button>
        </div>
      </div>`;

    card.addEventListener("click", () => {
      const wasFlipped = card.classList.contains("flipped");
      card.classList.toggle("flipped");
      flippedCount += wasFlipped ? -1 : 1;
      updateProgress();
    });

    return card;
  }

  // ════════════════════════════════════════════════
  //  RENDU
  // ════════════════════════════════════════════════
  let cardElements = [];

  function renderGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    cardElements = colors.map(c => {
      const el = buildCard(c);
      grid.appendChild(el);
      return el;
    });

    const extras = document.getElementById("extras");
    extras.innerHTML = "";
    nuances.forEach(n => extras.appendChild(buildCard(n, true)));

    flippedCount = 0;
    updateProgress();
  }

  function shuffleCards() {
    colors.sort(() => Math.random() - 0.5);
    renderGrid();
  }

  function resetAll() {
    document.querySelectorAll(".card.flipped").forEach(c => c.classList.remove("flipped"));
    flippedCount = 0;
    updateProgress();
  }

  renderGrid();
</script>
</body>
</html>
