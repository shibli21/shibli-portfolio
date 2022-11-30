import Head from "next/head";
import About from "../components/About";
import MyExpertise from "../components/MyExpertise";
import Work from "../components/Work";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-10 md:gap-20 ">
        <About />
        <MyExpertise />
        <Work />
      </div>
    </div>
  );
}
