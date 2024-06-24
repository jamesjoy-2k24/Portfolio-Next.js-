import About from '@/components/page/About';
import Hero from '@/components/page/Hero';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
      </div>
    </main>
    
  );
}
