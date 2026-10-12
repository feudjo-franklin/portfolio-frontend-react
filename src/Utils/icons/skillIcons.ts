import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// ============================================================
//  LOGOS DE MARQUES (free-brands-svg-icons)
//  Uniquement les icônes réellement présentes dans Font Awesome Free
// ============================================================
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faAngular,
    faVuejs,
    faNodeJs,
    faNpm,
    faJava,
    faPython,
    faPhp,
    faLaravel,
    faDocker,
    faAws,
    faGitAlt,
    faGithub,
    faGitlab,
    faBitbucket,
    faFigma,
    faSass,
    faLess,
    faRust,
    faGolang,
    faSwift,
    faAndroid,
    faApple,
    faLinux,
    faUbuntu,
    faWindows,
    faRedhat,
    faCentos,
    faDigitalOcean,
    faGoogle,
    faMicrosoft,
    faSalesforce,
    faStripe,
    faPaypal,
    faShopify,
    faWordpress,
    faWix,
    faSlack,
    faJenkins,
    faJira,
    faTrello,
    faRProject,
    faRaspberryPi,
    faSteam,
    faPlaystation,
    faXbox,
    faUnity,
} from '@fortawesome/free-brands-svg-icons';

// ============================================================
//  ICÔNES GÉNÉRIQUES / FALLBACKS (free-solid-svg-icons)
// ============================================================
import {
    faCode,         // fallback générique (langages sans icône)
    faCodeBranch,   // fallback TypeScript
    faLeaf,         // fallback Spring
    faCubes,        // fallback Kubernetes
    faCloud,        // fallback Azure / cloud
    faServer,       // fallback backend générique / IBM
    faFlask,        // fallback Elixir
    faMicrochip,    // fallback Arduino / matériel
    faDatabase,     // fallback bases de données (déjà en solid, OK)
} from '@fortawesome/free-solid-svg-icons';

// ============================================================
//  MAPPING  id → icône
//
//  ⚠️ Font Awesome Free ne propose PAS d'icône dédiée pour :
//     - Spring / Spring Boot   → fallback : faLeaf
//     - TypeScript             → fallback : faCodeBranch
//     - Kubernetes             → fallback : faCubes
//     - Azure                  → fallback : faCloud
//     - MySQL / PostgreSQL…    → fallback : faDatabase
//     - Elixir / Kotlin / Scala / Haskell  → fallback : faCode / faFlask
//     - Arduino                → fallback : faMicrochip
//     - IBM                    → fallback : faServer
// ============================================================
const SKILL_ICONS: Record<string, IconDefinition> = {

    // --- Web / Frontend ---
    'html5': faHtml5,
    'html': faHtml5,
    'css3': faCss3Alt,
    'css': faCss3Alt,
    'javascript': faJs,
    'js': faJs,
    'typescript': faCodeBranch,   // ⚠️ fallback
    'ts': faCodeBranch,           // ⚠️ fallback
    'react': faReact,
    'angular': faAngular,
    'vue': faVuejs,
    'vuejs': faVuejs,
    'sass': faSass,
    'less': faLess,

    // --- Backend / Langages ---
    'nodejs': faNodeJs,
    'node': faNodeJs,
    'node.js': faNodeJs,
    'npm': faNpm,
    'java': faJava,
    'spring': faLeaf,             // ⚠️ fallback
    'spring boot': faLeaf,        // ⚠️ fallback
    'springboot': faLeaf,         // ⚠️ fallback
    'python': faPython,
    'php': faPhp,
    'laravel': faLaravel,
    'rust': faRust,
    'go': faGolang,
    'golang': faGolang,
    'swift': faSwift,
    'kotlin': faCode,             // ⚠️ fallback
    'scala': faCode,              // ⚠️ fallback
    'haskell': faCode,            // ⚠️ fallback
    'elixir': faFlask,            // ⚠️ fallback
    'r': faRProject,
    'dart': faCode,               // ⚠️ fallback

    // --- Bases de données ---
    'sql': faDatabase,   // ⚠️ fallback (pas d'icône SQL en Font Awesome Free)
    'mysql': faDatabase,          // ⚠️ fallback
    'postgresql': faDatabase,     // ⚠️ fallback
    'postgres': faDatabase,       // ⚠️ fallback
    'mongodb': faDatabase,        // ⚠️ fallback
    'oracle': faDatabase,         // ⚠️ fallback
    'sqlserver': faDatabase,      // ⚠️ fallback
    'redis': faDatabase,          // ⚠️ fallback

    // --- DevOps / Cloud ---
    'docker': faDocker,
    'kubernetes': faCubes,        // ⚠️ fallback
    'aws': faAws,
    'azure': faCloud,             // ⚠️ fallback
    'gcp': faGoogle,              // Google Cloud
    'digitalocean': faDigitalOcean,
    'jenkins': faJenkins,
    'linux': faLinux,
    'ubuntu': faUbuntu,
    'windows': faWindows,
    'redhat': faRedhat,
    'centos': faCentos,
    'raspberrypi': faRaspberryPi,

    // --- Versioning / Collaboration ---
    'git': faGitAlt,
    'github': faGithub,
    'gitlab': faGitlab,
    'bitbucket': faBitbucket,
    'jira': faJira,
    'trello': faTrello,
    'slack': faSlack,

    // --- Design / Mobile ---
    'figma': faFigma,
    'android': faAndroid,
    'ios': faApple,
    'unity': faUnity,

    // --- E-commerce / Paiement ---
    'shopify': faShopify,
    'wordpress': faWordpress,
    'wix': faWix,
    'stripe': faStripe,
    'paypal': faPaypal,
    'salesforce': faSalesforce,

    // --- Divers ---
    'arduino': faMicrochip,       // ⚠️ fallback
    'ibm': faServer,              // ⚠️ fallback
    'steam': faSteam,
    'playstation': faPlaystation,
    'xbox': faXbox,
    'microsoft': faMicrosoft,
};

// ============================================================
//  VALEUR PAR DÉFAUT
// ============================================================
const DEFAULT_SKILL_ICON: IconDefinition = faCode;

// ============================================================
//  FONCTIONS EXPORTÉES
// ============================================================

/**
 * Retourne l'icône Font Awesome correspondant à un skill.
 * Si l'id est inconnu, retourne faCode.
 */
export const getSkillIcon = (iconId: string): IconDefinition => {
    const key = (iconId || '').toLowerCase().trim();
    return SKILL_ICONS[key] || DEFAULT_SKILL_ICON;
};

/**
 * Liste des identifiants disponibles (utile pour le <select> admin).
 */
export const AVAILABLE_SKILL_ICONS: string[] = Object.keys(SKILL_ICONS);