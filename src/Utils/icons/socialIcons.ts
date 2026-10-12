import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// ============================================================
//  LOGOS DE MARQUES / RÉSEAUX (free-brands-svg-icons)
//  Uniquement les icônes réellement présentes dans Font Awesome Free
// ============================================================
import {
    // Réseaux grand public
    faLinkedin,
    faTwitter,          // ancien logo (oiseau)
    faXTwitter,         // nouveau logo X
    faFacebook,
    faInstagram,
    faYoutube,
    faTiktok,
    faTwitch,
    faSnapchat,
    faPinterest,
    faReddit,
    faMastodon,

    // Réseaux pro / dev
    faGithub,
    faGitlab,
    faBitbucket,
    faMedium,
    faDev,
    faStackOverflow,
    faHackerrank,
    faKaggle,
    faCodepen,
    faDribbble,
    faBehance,
    faProductHunt,
    faAngellist,

    // Messagerie
    faDiscord,
    faSlack,
    faWhatsapp,
    faTelegram,
    faSkype,
    faWeixin,           // WeChat

    // Médias / Musique
    faVimeo,
    faFlickr,
    faSoundcloud,
    faSpotify,
    faItunes,
    faLastfm,

    // Académique / Divers
    faGoodreads,
} from '@fortawesome/free-brands-svg-icons';

// ============================================================
//  ICÔNES GÉNÉRIQUES / FALLBACKS (free-solid-svg-icons)
// ============================================================
import {
    faGlobe,        // site web / fallback générique
    faEnvelope,     // email
    faPhone,        // téléphone
    faRss,          // flux RSS
    faBlog,         // blog
    faGraduationCap,// fallback académique (Academia, ResearchGate…)
    faFlask,        // fallback recherche scientifique
} from '@fortawesome/free-solid-svg-icons';

// ============================================================
//  MAPPING  id → icône
//
//  ⚠️ Font Awesome Free ne propose PAS d'icône pour :
//     - Xing            → fallback : faGlobe
//     - VK              → fallback : faGlobe
//     - Academia        → fallback : faGraduationCap
//     - ResearchGate    → fallback : faGraduationCap
//     - ORCID           → fallback : faGraduationCap
//     - Threads         → fallback : faGlobe
//     - Bluesky         → fallback : faGlobe
//     - Line            → fallback : faGlobe
//
//  Si tu veux les vraies icônes, il faut :
//     - Font Awesome Pro (payant), OU
//     - Une bibliothèque alternative (Simple Icons, etc.)
// ============================================================
const SOCIAL_ICONS: Record<string, IconDefinition> = {

    // --- Réseaux grand public ---
    'linkedin': faLinkedin,
    'twitter': faTwitter,           // ancien logo (oiseau)
    'x': faXTwitter,                // nouveau logo X
    'xtwitter': faXTwitter,
    'facebook': faFacebook,
    'instagram': faInstagram,
    'youtube': faYoutube,
    'tiktok': faTiktok,
    'twitch': faTwitch,
    'snapchat': faSnapchat,
    'pinterest': faPinterest,
    'reddit': faReddit,
    'mastodon': faMastodon,
    'threads': faGlobe,             // ⚠️ fallback
    'bluesky': faGlobe,             // ⚠️ fallback

    // --- Réseaux pro / dev ---
    'github': faGithub,
    'gitlab': faGitlab,
    'bitbucket': faBitbucket,
    'medium': faMedium,
    'dev': faDev,
    'dev.to': faDev,
    'stackoverflow': faStackOverflow,
    'stack overflow': faStackOverflow,
    'hackerrank': faHackerrank,
    'kaggle': faKaggle,
    'codepen': faCodepen,
    'dribbble': faDribbble,
    'behance': faBehance,
    'producthunt': faProductHunt,
    'angellist': faAngellist,

    // --- Messagerie ---
    'discord': faDiscord,
    'slack': faSlack,
    'whatsapp': faWhatsapp,
    'telegram': faTelegram,
    'skype': faSkype,
    'wechat': faWeixin,
    'weixin': faWeixin,
    'line': faGlobe,                // ⚠️ fallback

    // --- Médias / Musique ---
    'vimeo': faVimeo,
    'flickr': faFlickr,
    'soundcloud': faSoundcloud,
    'spotify': faSpotify,
    'itunes': faItunes,
    'lastfm': faLastfm,

    // --- Académique / Recherche ---
    'academia': faGraduationCap,    // ⚠️ fallback
    'researchgate': faGraduationCap,// ⚠️ fallback
    'orcid': faGraduationCap,       // ⚠️ fallback
    'goodreads': faGoodreads,
    'scholar': faGraduationCap,     // ⚠️ fallback (Google Scholar)
    'pubmed': faFlask,              // ⚠️ fallback
    'arxiv': faFlask,               // ⚠️ fallback

    // --- Liens génériques ---
    'email': faEnvelope,
    'mail': faEnvelope,
    'phone': faPhone,
    'tel': faPhone,
    'website': faGlobe,
    'web': faGlobe,
    'site': faGlobe,
    'blog': faBlog,
    'rss': faRss,

    // --- Autres réseaux (fallbacks) ---
    'xing': faGlobe,                // ⚠️ fallback
    'vk': faGlobe,                  // ⚠️ fallback
};

// ============================================================
//  VALEUR PAR DÉFAUT
// ============================================================
const DEFAULT_SOCIAL_ICON: IconDefinition = faGlobe;

// ============================================================
//  FONCTIONS EXPORTÉES
// ============================================================

/**
 * Retourne l'icône Font Awesome correspondant à un réseau social.
 * Si l'id est inconnu, retourne faGlobe.
 */
export const getSocialIcon = (iconId: string): IconDefinition => {
    const key = (iconId || '').toLowerCase().trim();
    return SOCIAL_ICONS[key] || DEFAULT_SOCIAL_ICON;
};

/**
 * Liste des identifiants disponibles (utile pour le <select> admin).
 */
export const AVAILABLE_SOCIAL_ICONS: string[] = Object.keys(SOCIAL_ICONS);