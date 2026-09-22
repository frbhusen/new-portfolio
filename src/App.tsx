import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, Route, Switch, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { ar, en, type Content } from '@/content';

type Language = 'en' | 'ar';
type Project = Content['projects']['items'][number];

const languages: Record<Language, Content> = { en, ar: ar as Content };

function usePortfolioSettings() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('hussein-language');
    return saved === 'ar' ? 'ar' : 'en';
  });
  const [dark, setDark] = useState(() => window.localStorage.getItem('hussein-theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('hussein-theme', dark ? 'dark' : 'light');
  }, [dark]);
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    window.localStorage.setItem('hussein-language', language);
  }, [language]);
  return { language, setLanguage, dark, setDark };
}

function Header({ content, language, setLanguage, dark, setDark }: { content: Content; language: Language; setLanguage: (value: Language) => void; dark: boolean; setDark: (value: boolean) => void }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const items = Object.entries(content.nav) as [keyof Content['nav'], string][];
  const paths: Record<keyof Content['nav'], string> = { home: '/', about: '/about', projects: '/projects', experience: '/experience', education: '/education', achievements: '/achievements', services: '/services', contact: '/contact' };
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" data-testid="link-brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">HR</span><span>Hussein Rajab</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {items.map(([key, label]) => <Link key={key} href={paths[key]} aria-current={location === paths[key] ? 'page' : undefined} data-testid={`link-nav-${key}`}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="lang-button" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label="Switch language" data-testid="button-language">{language === 'en' ? 'عربي' : 'EN'}</button>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Use light theme' : 'Use dark theme'} data-testid="button-theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation" data-testid="button-menu">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          {items.map(([key, label]) => <Link key={key} href={paths[key]} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-nav-${key}`}>{label}</Link>)}
        </nav>}
      </div>
    </header>
  );
}

function Footer({ content }: { content: Content }) {
  return <footer className="footer"><div className="shell footer-inner"><span>{content.footer}</span><span>© {new Date().getFullYear()} · {content.meta.name}</span></div></footer>;
}

function Layout({ children, content, language, setLanguage, dark, setDark }: { children: ReactNode; content: Content; language: Language; setLanguage: (value: Language) => void; dark: boolean; setDark: (value: boolean) => void }) {
  return <div className="portfolio-app"><Header content={content} language={language} setLanguage={setLanguage} dark={dark} setDark={setDark} /><main className="page-wrap">{children}</main><Footer content={content} /></div>;
}

function PageIntro({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <div className="page-intro"><div className="shell reveal"><div className="eyebrow">{eyebrow}</div><h1 data-testid="text-page-title">{title}</h1><p>{intro}</p></div></div>;
}

function Home({ content }: { content: Content }) {
  return <>
    <section className="hero"><div className="shell hero-grid">
      <div className="reveal"><div className="eyebrow">{content.home.eyebrow}</div><div className="hero-role">{content.meta.role}</div><h1>{content.home.title.replace(content.home.titleAccent, '')}<em>{content.home.titleAccent}</em></h1><p className="hero-copy">{content.home.intro}</p><p className="hero-location">{content.home.locationLine}</p><div className="hero-identity">{content.home.identity.map(item => <span key={item}>{item}</span>)}</div><div className="hero-cta"><Link href="/projects" className="button primary" data-testid="link-hero-projects">{content.home.primaryCta}<ArrowUpRight size={16} /></Link><Link href="/contact" className="button ghost" data-testid="link-hero-contact">{content.home.secondaryCta}<ArrowRight size={15} /></Link></div></div>
      <div className="hero-orbit reveal delay-2" aria-label="Developer designer identity graphic"><div className="grid-lines" /><div className="orbit"><div className="orbit-core">HR</div><span className="orbit-label top">{content.home.orbit[0]}</span><span className="orbit-label right">{content.home.orbit[1]}</span><span className="orbit-label bottom">{content.home.orbit[2]}</span><span className="orbital-dot" /></div></div>
    </div></section>
    <section className="section build-section"><div className="shell"><div className="section-header"><div><div className="section-kicker">{content.home.buildKicker}</div><h2 className="section-title">{content.home.buildTitle}</h2></div><p className="section-intro">{content.home.buildIntro}</p></div><div className="principle-list">{content.home.principles.map(([title, copy], index) => <article className="principle-row reveal" key={title}><span className="principle-index">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-header"><div><div className="section-kicker">{content.home.workKicker}</div><h2 className="section-title">{content.home.workTitle}</h2></div><p className="section-intro">{content.home.workIntro}</p></div><ProjectGrid content={content} limit={3} /></div></section>
    <section className="section problem-section"><div className="shell"><div className="problem-heading"><div className="section-kicker">{content.home.problemKicker}</div><h2 className="section-title">{content.home.problemTitle.replace(content.home.problemTitleAccent, '')}<br /><em>{content.home.problemTitleAccent}</em></h2></div><div className="problem-path">{content.home.problemSteps.map((step, index) => <div className="problem-step" key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < content.home.problemSteps.length - 1 && <ArrowDown />}</div>)}</div><p className="problem-note">{content.home.problemNote}</p></div></section>
    <section className="section why-section"><div className="shell why-layout"><div><div className="section-kicker">{content.home.whyKicker}</div><h2 className="section-title">{content.home.whyTitle}</h2></div><div><p className="why-copy">{content.home.whyCopy}</p><div className="why-flow">{content.home.whyFlow.map((item, index) => <span key={item}><b>{item}</b>{index < content.home.whyFlow.length - 1 && <ArrowRight size={15} />}</span>)}</div></div></div></section>
    <section className="statement"><div className="shell"><p dangerouslySetInnerHTML={{ __html: content.home.statement }} /></div></section>
    <section className="section currently-section"><div className="shell"><div className="section-header"><div><div className="section-kicker">{content.home.currentlyKicker}</div><h2 className="section-title">{content.home.currentlyTitle}</h2></div></div><div className="currently-list">{content.home.currently.map(([label, copy], index) => <div className="currently-row" key={label}><span className="currently-index">0{index + 1}</span><strong>{label}</strong><span>{copy}</span></div>)}</div></div></section>
  </>;
}

function ProjectGrid({ content, limit }: { content: Content; limit?: number }) {
  const projects = content.projects.items.slice(0, limit);
  return <div className="project-grid">{projects.map((project, index) => <Link href={`/projects/${project.slug}`} className={`project-card reveal delay-${index + 1} ${index === 0 ? 'tall' : 'small'}`} key={project.slug} data-testid={`card-project-${project.slug}`}><div className="project-top"><span className="project-index">{project.number} / 03</span><span className="project-type">{project.type}</span></div><div><h3>{project.name}</h3><p>{project.description}</p><div className="project-footer"><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><ArrowUpRight size={18} color="hsl(var(--accent))" /></div></div></Link>)}</div>;
}

function About({ content }: { content: Content }) {
  return <><PageIntro eyebrow={content.about.eyebrow} title={content.about.title} intro={content.about.intro} /><section className="section story-section"><div className="shell story-layout"><p className="bio-copy">{content.about.bio}</p><div className="principle-list about-principles">{content.about.cards.map(([number, title, copy]) => <article className="principle-row" key={number}><span className="principle-index">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section><section className="section"><div className="shell split-grid"><div><div className="section-kicker">{content.labels.workingRange}</div><h2 className="section-title" dangerouslySetInnerHTML={{ __html: content.labels.skillsTitle }} /></div><div className="skill-list">{content.about.skills.map(([name, type]) => <div className="skill-row" key={name} data-testid={`skill-${name}`}><span>{name}</span><span>{type}</span></div>)}</div></div></section></>;
}

function Projects({ content }: { content: Content }) {
  return <><PageIntro eyebrow={content.projects.eyebrow} title={content.projects.title} intro={content.projects.intro} /><section className="section"><div className="shell"><ProjectGrid content={content} /></div></section></>;
}

function ProjectDetail({ content }: { content: Content }) {
  const { slug } = useParams<{ slug: string }>();
  const project = content.projects.items.find(item => item.slug === slug) as Project | undefined;
  if (!project) return <NotFound content={content} />;
  const projectNotes = [[content.labels.projectIdea, project.idea], [content.labels.projectProblem, project.problem], [content.labels.projectBuild, project.build]].filter(([, value]) => value);
  return <><PageIntro eyebrow={`${project.number} · ${project.type}`} title={project.name} intro={project.description} /><section className="section project-story"><div className="shell project-story-grid"><div className="project-story-lead"><div className="section-kicker">{content.labels.projectNotes}</div><p className="bio-copy">{project.description}</p></div><div className="project-notes">{projectNotes.map(([label, value]) => <article key={label}><span>{label}</span><p>{value}</p></article>)}<article><span>{content.labels.toolkit}</span><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article></div></div></section><section className="section"><div className="shell"><Link href="/projects" className="arrow-link" data-testid="link-back-projects"><ArrowLeft size={15} /> {content.labels.backToProjects}</Link></div></section></>;
}

function TimelinePage({ content, section }: { content: Content; section: 'experience' | 'education' | 'achievements' }) {
  const data = content[section];
  return <><PageIntro eyebrow={data.eyebrow} title={data.title} intro={data.intro} /><section className={`section archive-section ${section}-section`}><div className="shell split-grid"><div className="archive-label section-kicker">{section === 'achievements' ? content.labels.proof : section === 'experience' ? content.labels.activityLog : content.labels.educationLabel}</div>{section === 'education' ? <div className="education-focus">{data.items.map((item, index) => <article key={index}><span className="education-number">0{index + 1}</span><h2>{item[0]}</h2><div className="education-meta">{item[1]}</div><p>{item[item.length - 1]}</p></article>)}</div> : <div className={section === 'achievements' ? 'proof-list' : 'activity-log'}>{data.items.map((item, index) => <article className="archive-entry" key={index}><span className="archive-number">0{index + 1}</span><div><div className="timeline-meta">{section === 'achievements' ? item[0] : item[1] || 'Exploration'}</div><h3>{item[0]}</h3><p>{item[item.length - 1]}</p></div></article>)}</div>}</div></section></>;
}

function Services({ content }: { content: Content }) {
  return <><PageIntro eyebrow={content.services.eyebrow} title={content.services.title} intro={content.services.intro} /><section className="section"><div className="shell service-grid">{content.services.items.map(([number, title, copy]) => <article className="service-card reveal" key={number}><div className="service-number">{number}</div><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section></>;
}

function Contact({ content }: { content: Content }) {
  const [sent, setSent] = useState(false);
  const form = content.contact.form;
  return <><PageIntro eyebrow={content.contact.eyebrow} title={content.contact.title} intro={content.contact.intro} /><section className="section"><div className="shell contact-layout"><div><div className="section-kicker">{content.labels.findMe}</div><div className="contact-links"><a href={`mailto:${content.contact.email}`} className="contact-link" data-testid="link-email"><span>{content.contact.emailLabel}</span><span>{content.contact.email}<ArrowUpRight size={15} /></span></a><a href="https://github.com" className="contact-link" target="_blank" rel="noreferrer" data-testid="link-social"><span>{content.contact.socialLabel}</span><span>{content.contact.social}<ArrowUpRight size={15} /></span></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="field"><label htmlFor="contact-name">{form.name}</label><input id="contact-name" name="name" required data-testid="input-contact-name" /></div><div className="field"><label htmlFor="contact-email">{form.email}</label><input id="contact-email" name="email" type="email" required data-testid="input-contact-email" /></div><div className="field"><label htmlFor="contact-message">{form.message}</label><textarea id="contact-message" name="message" rows={5} required data-testid="input-contact-message" /></div><button className="button primary" type="submit" data-testid="button-send-message">{sent ? <><Check size={15} /> {form.sent}</> : <>{form.send} <ArrowUpRight size={15} /></>}</button></form></div></section></>;
}

function NotFound({ content }: { content: Content }) {
  return <div className="shell not-found"><div><div className="eyebrow">{content.labels.notFoundKicker}</div><h1>404</h1><p className="muted">{content.labels.notFoundCopy}</p><Link href="/" className="button primary" data-testid="link-not-found-home">{content.labels.notFoundHome} <ArrowRight size={15} /></Link></div></div>;
}

function Router({ content }: { content: Content }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}><Switch>
    <Route path="/" component={() => <Home content={content} />} />
    <Route path="/about" component={() => <About content={content} />} />
    <Route path="/projects" component={() => <Projects content={content} />} />
    <Route path="/projects/:slug" component={() => <ProjectDetail content={content} />} />
    <Route path="/experience" component={() => <TimelinePage content={content} section="experience" />} />
    <Route path="/education" component={() => <TimelinePage content={content} section="education" />} />
    <Route path="/achievements" component={() => <TimelinePage content={content} section="achievements" />} />
    <Route path="/services" component={() => <Services content={content} />} />
    <Route path="/contact" component={() => <Contact content={content} />} />
    <Route component={() => <NotFound content={content} />} />
  </Switch></ErrorBoundary>;
}

function App() {
  const settings = usePortfolioSettings();
  const content = languages[settings.language];
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Layout content={content} {...settings}><Router content={content} /></Layout></WouterRouter>;
}

export default App;