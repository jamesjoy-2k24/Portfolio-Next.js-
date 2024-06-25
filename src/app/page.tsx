import About from '@/components/page/About';
import Contact from '@/components/page/Contact';
import Hero from '@/components/page/Hero';
import Projects from '@/components/page/Projects';
import Skills from '@/components/page/Skills';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
