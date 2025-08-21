import About from "@/components/About";
import Achievements from "@/components/Achievements";
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
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}
