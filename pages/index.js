import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Experience from '../src/components/Experience';
import Education from '../src/components/Education';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import LanguageSwitcher from '../src/components/LanguageSwitcher';

export default function Home() {
  return (
    <>
      <Head>
        <title>Diego Barreiro – Desarrollador Full-Stack</title>
        <meta name="description" content="Portfolio profesional de Diego Barreiro, desarrollador de software full-stack. Proyectos, experiencia, contacto y más." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://diegobarreiro.dev/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="Diego Barreiro – Desarrollador Full-Stack" />
        <meta property="og:description" content="Portfolio profesional de Diego Barreiro, desarrollador de software full-stack. Proyectos, experiencia, contacto y más." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diegobarreiro.dev/" />
        <meta property="og:image" content="/profile.webp" />
        <meta property="og:site_name" content="Diego Barreiro Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diego Barreiro – Desarrollador Full-Stack" />
        <meta name="twitter:description" content="Portfolio profesional de Diego Barreiro, desarrollador de software full-stack. Proyectos, experiencia, contacto y más." />
        <meta name="twitter:image" content="/profile.webp" />
        <meta name="twitter:site" content="@diegobarreirodev" />
        <meta name="twitter:creator" content="@diegobarreirodev" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#000000" />
        <html lang="es" />
      </Head>
      <Navbar />
      <LanguageSwitcher />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
