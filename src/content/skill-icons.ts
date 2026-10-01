import { CodeXml } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  // Languages
  SiC, SiCplusplus, SiSharp, SiDart, SiGo, SiHaskell, 
  SiJavascript, SiJulia, SiKotlin, SiLua, SiPhp, SiPython, SiR, 
  SiRuby, SiRust, SiScala, SiSwift, SiTypescript,

  // Frontend & Web
  SiAngular, SiBabel, SiBootstrap, SiCss, SiGraphql, SiHtml5, 
  SiJquery, SiLess, SiNextdotjs, SiReact, SiRedux, 
  SiSass, SiSvelte, SiTailwindcss, SiVite, SiVuedotjs, SiWebpack,

  // Backend & Frameworks
  SiDjango, SiExpress, SiFastapi, SiFlask, SiLaravel, SiNestjs, 
  SiNodedotjs, SiRubyonrails, SiSpring, SiSymfony,

  // Databases & ORMs
  SiFirebase, SiMongodb, SiMysql, SiPostgresql, 
  SiPrisma, SiRedis, SiSqlite, SiSupabase,

  // Cloud, DevOps & Tools
  SiApache, SiBitbucket, SiDocker, SiFigma, SiGit, 
  SiGithub, SiGitlab, SiGooglecloud, SiJenkins, SiKubernetes, 
  SiLinux, SiNetlify, SiNginx, SiUbuntu, SiVercel,
  SiLinuxserver, SiCloudflare,

  // Engines
  SiGodotengine, SiScratch,

  // Mobile
  SiAndroid, SiFlutter, SiIos,
  SiUnity,
  SiClaude, SiGooglegemini, SiNotebooklm,
  SiClaudecode,
  SiGithubcopilot,
  SiInstagram
} from 'react-icons/si';

// Keys used by the "icon" field in skills.json. To add one: import it above and add a line here.
// A skill with no icon (or an unknown key) renders as a plain text badge.
export const skillIcons: Record<string, IconType> = {
  // Languages
  c: SiC,
  'c++': SiCplusplus,
  'c#': SiSharp,
  dart: SiDart,
  go: SiGo,
  haskell: SiHaskell,
  javascript: SiJavascript,
  julia: SiJulia,
  kotlin: SiKotlin,
  lua: SiLua,
  php: SiPhp,
  python: SiPython,
  r: SiR,
  ruby: SiRuby,
  rust: SiRust,
  scala: SiScala,
  swift: SiSwift,
  typescript: SiTypescript,

  // Frontend & Web
  angular: SiAngular,
  babel: SiBabel,
  bootstrap: SiBootstrap,
  css: SiCss,
  graphql: SiGraphql,
  html: SiHtml5,
  html5: SiHtml5,
  jquery: SiJquery,
  less: SiLess,
  nextjs: SiNextdotjs,
  react: SiReact,
  redux: SiRedux,
  sass: SiSass,
  svelte: SiSvelte,
  tailwindcss: SiTailwindcss,
  vite: SiVite,
  vue: SiVuedotjs,
  webpack: SiWebpack,

  // Backend & Frameworks
  django: SiDjango,
  express: SiExpress,
  fastapi: SiFastapi,
  flask: SiFlask,
  laravel: SiLaravel,
  nestjs: SiNestjs,
  nodejs: SiNodedotjs,
  rails: SiRubyonrails,
  spring: SiSpring,
  symfony: SiSymfony,

  // Databases & ORMs
  firebase: SiFirebase,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  redis: SiRedis,
  sqlite: SiSqlite,
  supabase: SiSupabase,

  // Cloud, DevOps & Tools
  apache: SiApache,
  bitbucket: SiBitbucket,
  docker: SiDocker,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  gcp: SiGooglecloud,
  jenkins: SiJenkins,
  kubernetes: SiKubernetes,
  linux: SiLinux,
  netlify: SiNetlify,
  nginx: SiNginx,
  ubuntu: SiUbuntu,
  linuxserver: SiLinuxserver,
  vercel: SiVercel,
  cloudflare: SiCloudflare,
  instagram: SiInstagram,

  // Engines
  godot: SiGodotengine,
  scratch: SiScratch,
  unity: SiUnity,
  

  // AI
  claude: SiClaude,
  claudecode:SiClaudecode,
  notebooklm: SiNotebooklm,
  gemini: SiGooglegemini,
  copilot: SiGithubcopilot,

  // Mobile
  android: SiAndroid,
  flutter: SiFlutter,
  ios: SiIos,
};