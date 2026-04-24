// ============================================================
//  📚 TES CARTES
//  Format : { ch: "X", chNom: "Nom du chapitre", f: "Français", b: "Darija", audio: "audio/fichier.m4a" }
// ============================================================

const cardsData = [

  // ----------------------------------------
  // Chapitre 1 — Se présenter
  // ----------------------------------------
  { ch: "1", chNom: "Se présenter",
    f: "Je m'appelle ... / Mon nom est ...",
    b: "Ana smiti ... / Smiya diali ..." },

  { ch: "1", chNom: "Se présenter",
    f: "J'ai ... ans / Mon âge est ...",
    b: "3endi ... 3am / 3emri ... 3am" },

  { ch: "1", chNom: "Se présenter",
    f: "Je suis de (pays)",
    b: "Ana men ..." },

  { ch: "1", chNom: "Se présenter",
    f: "Je suis (nationalité)",
    b: "Ana ... (ex: Faransi)" },

  // ----------------------------------------
  // Chapitre 2 — Nombres 1-10
  // ----------------------------------------
  { ch: "2", chNom: "Nombres 1-10", f: "1 — Un", b: "Wahed" },
  { ch: "2", chNom: "Nombres 1-10", f: "2 — Deux", b: "Jouj" },
  { ch: "2", chNom: "Nombres 1-10", f: "3 — Trois", b: "Tlata" },
  { ch: "2", chNom: "Nombres 1-10", f: "4 — Quatre", b: "Rb3a" },
  { ch: "2", chNom: "Nombres 1-10", f: "5 — Cinq", b: "Khmsa" },
  { ch: "2", chNom: "Nombres 1-10", f: "6 — Six", b: "Stta" },
  { ch: "2", chNom: "Nombres 1-10", f: "7 — Sept", b: "Sb3a" },
  { ch: "2", chNom: "Nombres 1-10", f: "8 — Huit", b: "Tmnya" },
  { ch: "2", chNom: "Nombres 1-10", f: "9 — Neuf", b: "Ts3oud" },
  { ch: "2", chNom: "Nombres 1-10", f: "10 — Dix", b: "3chra" },

  // ----------------------------------------
  // Chapitre 3 — Nombres 11-20
  // ----------------------------------------
  { ch: "3", chNom: "Nombres 11-20", f: "11 — Onze", b: "Hdach" },
  { ch: "3", chNom: "Nombres 11-20", f: "12 — Douze", b: "Tnach" },
  { ch: "3", chNom: "Nombres 11-20", f: "13 — Treize", b: "Tlatch" },
  { ch: "3", chNom: "Nombres 11-20", f: "14 — Quatorze", b: "Rb3tach" },
  { ch: "3", chNom: "Nombres 11-20", f: "15 — Quinze", b: "Khmstach" },
  { ch: "3", chNom: "Nombres 11-20", f: "16 — Seize", b: "Sttach" },
  { ch: "3", chNom: "Nombres 11-20", f: "17 — Dix-sept", b: "Sb3tach" },
  { ch: "3", chNom: "Nombres 11-20", f: "18 — Dix-huit", b: "Tmntach" },
  { ch: "3", chNom: "Nombres 11-20", f: "19 — Dix-neuf", b: "Ts3tach" },
  { ch: "3", chNom: "Nombres 11-20", f: "20 — Vingt", b: "3chrin" },

  // ----------------------------------------
  // Chapitre 4 — Nombres 21-100
  // ----------------------------------------
  { ch: "4", chNom: "Nombres 21-100", f: "21 — Vingt-et-un", b: "Wahed w 3chrin" },
  { ch: "4", chNom: "Nombres 21-100", f: "30 — Trente", b: "Tlatin" },
  { ch: "4", chNom: "Nombres 21-100", f: "40 — Quarante", b: "Rb3in" },
  { ch: "4", chNom: "Nombres 21-100", f: "50 — Cinquante", b: "Khmssin" },
  { ch: "4", chNom: "Nombres 21-100", f: "60 — Soixante", b: "Sttin" },
  { ch: "4", chNom: "Nombres 21-100", f: "70 — Soixante-dix", b: "Sb3in" },
  { ch: "4", chNom: "Nombres 21-100", f: "80 — Quatre-vingts", b: "Tmnin" },
  { ch: "4", chNom: "Nombres 21-100", f: "90 — Quatre-vingt-dix", b: "Ts3in" },
  { ch: "4", chNom: "Nombres 21-100", f: "100 — Cent", b: "Mya" },
  { ch: "4", chNom: "Nombres 21-100", f: "Règle : 35, 47...", b: "Unité + w + dizaine (ex: 35 = khmsa w tlatin)" },

  // ----------------------------------------
  // Chapitre 5 — Nombres 100+
  // ----------------------------------------
  { ch: "5", chNom: "Nombres 100+", f: "100 — Cent", b: "Mya" },
  { ch: "5", chNom: "Nombres 100+", f: "200 — Deux cents", b: "Myatayn" },
  { ch: "5", chNom: "Nombres 100+", f: "300 — Trois cents", b: "Tlat mya" },
  { ch: "5", chNom: "Nombres 100+", f: "1 000 — Mille", b: "Alf" },
  { ch: "5", chNom: "Nombres 100+", f: "2 000 — Deux mille", b: "Joj laf" },
  { ch: "5", chNom: "Nombres 100+", f: "1 000 000 — Un million", b: "Mlyoun" },
  { ch: "5", chNom: "Nombres 100+", f: "Règle : 250, 350...", b: "Centaine + w + reste (ex: 250 = myatayn w khmssin)" },

  // ----------------------------------------
  // Chapitre 6 — Mots interrogatifs
  // ----------------------------------------
  { ch: "6", chNom: "Mots interrogatifs", f: "Quoi ?", b: "Chnou ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Qui ?", b: "Chkoun ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Quand ?", b: "Imta / Fo9ach ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Où ?", b: "Fin" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Comment ?", b: "Ki fach ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Pourquoi ?", b: "3elach ?", audio: "audio/pourquoi.m4a" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Combien ?", b: "Ch7al ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "D'où ?", b: "Mnin ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "À qui ?", b: "Lemen ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Lequel ?", b: "Achmen ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Avec qui ?", b: "M3amen ?" },
  { ch: "6", chNom: "Mots interrogatifs", f: "Est-ce que ?", b: "Wach ?" },

  // ----------------------------------------
  // Chapitre 7 — Questions courantes
  // ----------------------------------------
  { ch: "7", chNom: "Questions courantes", f: "Comment tu t'appelles ?", b: "Chnou smitek ?" },
  { ch: "7", chNom: "Questions courantes", f: "D'où viens-tu ?", b: "Mnin jiti ? / Mnin nta (nti) ?" },
  { ch: "7", chNom: "Questions courantes", f: "Quel âge as-tu ?", b: "Ch7al fi 3emrek ? / Ch7al 3endek ?" },
  { ch: "7", chNom: "Questions courantes", f: "Où habites-tu ?", b: "Fin saken ?" },
  { ch: "7", chNom: "Questions courantes", f: "Que fais-tu dans la vie ?", b: "Achnou kadir fi l7ayat ?" },
  { ch: "7", chNom: "Questions courantes", f: "Comment ça va ?", b: "Labas 3alik ? / Labas ?" },
  { ch: "7", chNom: "Questions courantes", f: "Où est ... ?", b: "Fin kayn ... ? / Fin ja ... ?" },
  { ch: "7", chNom: "Questions courantes", f: "Combien ça coûte ?", b: "Bch7al hada (hadi) ?" },
  { ch: "7", chNom: "Questions courantes", f: "Quelle heure est-il ?", b: "Ch7al fi sa3a ?" },
  { ch: "7", chNom: "Questions courantes", f: "Tu peux répéter stp ?", b: "Momkin t3awed (i), 3afak ?" },

];
