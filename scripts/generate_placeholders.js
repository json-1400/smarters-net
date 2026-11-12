const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'placeholders');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const placeholders = [
  // Applications (Zone 1)
  { id: 'app-smarters-pro', title: 'IPTV Smarters Pro', subtitle: 'Interface TV & Zapping 4K 60 FPS', color: '#3b82f6', tag: 'Lecteur Officiel' },
  { id: 'app-tivimate', title: 'TiviMate IPTV Player', subtitle: 'Grille EPG & Mode Multi-Écrans', color: '#10b981', tag: 'Android TV & Fire Stick' },
  { id: 'app-ibo-player', title: 'IBO Player Pro', subtitle: 'Portail MAC & Streaming Ultra HD', color: '#a855f7', tag: 'Samsung Tizen & LG webOS' },
  { id: 'app-flix-iptv', title: 'Flix IPTV Player', subtitle: 'Activation par Adresse MAC & Décodage 4K', color: '#f43f5e', tag: 'Smart TV & Android' },
  { id: 'app-gse-smart-iptv', title: 'GSE Smart IPTV', subtitle: 'Interface Apple iOS, tvOS & AirPlay', color: '#6366f1', tag: 'Apple TV, iPhone, Mac' },
  { id: 'app-smart-iptv', title: 'Smart IPTV (SIPTV)', subtitle: 'Portail MAC & Gestion de Playlist M3U', color: '#f59e0b', tag: 'Samsung & LG Smart TV' },
  { id: 'app-xciptv', title: 'XCIPTV Player', subtitle: 'Double Moteur Vidéo ExoPlayer & VLC', color: '#06b6d4', tag: 'Android Box & Fire TV' },

  // Guides (Zone 2)
  { id: 'guide-firestick', title: 'Amazon Fire TV Stick 4K', subtitle: 'Tutoriel Downloader & Configuration Rapide', color: '#f97316', tag: 'Installation Pas-à-Pas' },
  { id: 'guide-smart-tv', title: 'Smart TV Samsung & LG', subtitle: 'Configuration sans boîtier externe', color: '#3b82f6', tag: 'Tizen OS & webOS' },
  { id: 'guide-android-box', title: 'Box Android TV & Google TV', subtitle: 'Installation APK & API Xtream Codes', color: '#10b981', tag: 'Nvidia Shield & Xiaomi' },
  { id: 'guide-apple-tv', title: 'Apple TV 4K & iOS', subtitle: 'Configuration App Store & AirPlay Direct', color: '#6366f1', tag: 'iPhone, iPad, tvOS' },
  { id: 'guide-pc-mac', title: 'PC Windows 11 & Mac', subtitle: 'Streaming HD / 4K sur Ordinateur', color: '#0ea5e9', tag: 'Lecteur Desktop' },
  { id: 'guide-dns-vpn', title: 'Contourner le Blocage FAI', subtitle: 'Configuration DNS Cloudflare 1.1.1.1 & VPN', color: '#ef4444', tag: 'Sécurité & Anti-Coupure' },
  { id: 'guide-mag-stalker', title: 'Boîtiers MAG & Formuler', subtitle: 'Portail Stalker & Configuration Adresse MAC', color: '#8b5cf6', tag: 'Stalker Middleware' },
  { id: 'guide-xtream-m3u', title: 'Xtream Codes vs M3U IPTV', subtitle: 'Comparatif Protocoles, API & Formats Playlists', color: '#f59e0b', tag: 'Guide Protocoles' },

  // Blog (Zone 3)
  { id: 'blog-cdn-architecture', title: 'Architecture CDN Européenne 10 Gbps', subtitle: 'Répartition Dynamique de Charge & Anti-Buffering', color: '#3b82f6', tag: 'Schéma Réseau E-E-A-T' },
  { id: 'blog-comparatif-serveurs', title: 'Comparatif Serveurs IPTV 2026', subtitle: 'Benchmark Stabilité, Zapping & Débits Sport', color: '#10b981', tag: 'Dossier Technique' },
  { id: 'blog-anti-arnaque', title: 'Alerte Arnaques & Offres Low-Cost', subtitle: 'Pourquoi Éviter les Abonnements AliExpress', color: '#ef4444', tag: 'Guide Sécurité' },
];

placeholders.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bg-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#030712"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <radialGradient id="glow-${p.id}" cx="50%" cy="35%" r="45%">
      <stop offset="0%" stop-color="${p.color}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${p.color}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <rect width="1200" height="675" fill="url(#bg-${p.id})"/>
  <rect width="1200" height="675" fill="url(#glow-${p.id})"/>
  
  <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
    <line x1="0" y1="135" x2="1200" y2="135"/>
    <line x1="0" y1="270" x2="1200" y2="270"/>
    <line x1="0" y1="405" x2="1200" y2="405"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
    <line x1="240" y1="0" x2="240" y2="675"/>
    <line x1="480" y1="0" x2="480" y2="675"/>
    <line x1="720" y1="0" x2="720" y2="675"/>
    <line x1="960" y1="0" x2="960" y2="675"/>
  </g>
  
  <rect x="30" y="30" width="1140" height="615" rx="24" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  
  <g transform="translate(80, 80)">
    <rect width="210" height="36" rx="18" fill="${p.color}" fill-opacity="0.15" stroke="${p.color}" stroke-opacity="0.4" stroke-width="1.5"/>
    <circle cx="20" cy="18" r="4" fill="${p.color}"/>
    <text x="34" y="23" fill="#f8fafc" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="0.05em">${p.tag.toUpperCase()}</text>
  </g>
  
  <g transform="translate(600, 310)" text-anchor="middle">
    <rect x="-280" y="-110" width="560" height="220" rx="20" fill="#0b1120" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
    
    <rect x="-280" y="-110" width="560" height="44" rx="20" fill="#111827"/>
    <circle cx="-250" cy="-88" r="5" fill="#ef4444"/>
    <circle cx="-232" cy="-88" r="5" fill="#f59e0b"/>
    <circle cx="-214" cy="-88" r="5" fill="#10b981"/>
    <text x="0" y="-83" fill="#94a3b8" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600">4K Ultra HD • Aperçu Interface Officielle 2026</text>
    
    <text x="0" y="-10" fill="#ffffff" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.02em">${p.title}</text>
    <text x="0" y="30" fill="#94a3b8" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="500">${p.subtitle}</text>
    
    <g transform="translate(0, 72)">
      <rect x="-130" y="-16" width="260" height="32" rx="8" fill="${p.color}" fill-opacity="0.2" stroke="${p.color}" stroke-width="1"/>
      <text x="0" y="5" fill="${p.color}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.05em">60 FPS • HEVC H.265 CERTIFIÉ</text>
    </g>
  </g>
  
  <g transform="translate(600, 590)" text-anchor="middle">
    <text fill="#64748b" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" letter-spacing="0.03em">SMARTERSPRO12 • SERVEURS CDN EUROPÉENS 10 GBPS</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(dir, `${p.id}.svg`), svg, 'utf8');
});

console.log(`Generated ${placeholders.length} high-fidelity SVG placeholders.`);
