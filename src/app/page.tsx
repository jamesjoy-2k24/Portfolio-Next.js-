import About from '@/components/page/About';
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
      </div>
    </main>
  );
}
