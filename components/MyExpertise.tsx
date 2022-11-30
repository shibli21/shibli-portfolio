import { FC } from "react";
import { BrandReact, CSharp, DeviceDesktop, DeviceMobile } from "tabler-icons-react";
import Heading from "./Heading";

function MyExpertise() {
  return (
    <div id="expertise">
      <Heading>My Expertise</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
        <ExpertiseCard
          title="Frontend Dev"
          subtitle=" React, NextJS"
          icon={<BrandReact size={48} />}
          description="UI/UX enthusiast. Expert in HTML, CSS, JS, React and NextJS frameworks with over 3 years of experience."
        />
        <ExpertiseCard
          title="Backend Dev"
          subtitle=".Net Core, NodeJS"
          icon={<CSharp size={48} />}
          description="Experienced in building RESTful APIs using .Net Core and NodeJS. Have experience in building microservices."
        />
        <ExpertiseCard
          title="Software"
          subtitle="Development"
          icon={<DeviceDesktop size={48} />}
          description="Strong knowledge of functional and object oriented programming: Dart, C# JavaScript, TypeScript. Experienced in microservices architecture."
        />
        <ExpertiseCard
          title="Android, iOS Dev"
          subtitle="Flutter, React Native"
          icon={<DeviceMobile size={48} />}
          description="Have experience developing cross-platform and hybrid mobile apps using Flutter/ React Native."
        />
      </div>
    </div>
  );
}

export default MyExpertise;

interface ExpertiseCard {
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
}

const ExpertiseCard: FC<ExpertiseCard> = ({ title, subtitle, description, icon }) => {
  return (
    <div className="border-2 border-gray-500 p-4 md:p-10">
      <div className="flex items-center mb-4">
        {icon}

        <h1 className="text-xl md:text-2xl font-bold font-secondary z-0 ml-4 leading-5 md:leading-7">
          <span className="tracking-wide relative before:absolute  before:right-0 before:bottom-1.5 before:w-full before:h-[8px] before:-skew-x-12  before:bg-orange-300 dark:before:bg-orange-600 before:-z-10">
            {title}
          </span>
          <br />
          {subtitle}
        </h1>
      </div>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};
