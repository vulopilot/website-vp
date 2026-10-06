import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import DataToDirection from "@/components/DataToDirection";
import Automation from "@/components/Automation";
import SearchChanging from "@/components/SearchChanging";
import AiVisibility from "@/components/AiVisibility";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />
      <PainPoints />
      <Solution />
      <DataToDirection />
      <Automation />
      <SearchChanging />
      <AiVisibility />
      <Footer />
    </main>
  );
}
