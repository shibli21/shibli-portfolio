import Particles from "@/components/particles";
import About from "@/components/About";
import Contact from "@/components/Contact";
import MyExpertise from "@/components/MyExpertise";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-10 md:gap-20 ">
        <About />
        <MyExpertise />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
