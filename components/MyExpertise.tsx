import { FC } from "react";
import { BrandReact, CSharp, DeviceDesktop, Database } from "tabler-icons-react";
import Heading from "./Heading";
import { Card } from "./card";

function MyExpertise() {
  return (
    <div id="expertise">
      <Heading>My Expertise</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 md:mt-20">
        <ExpertiseCard
          title="Frontend Dev"
          subtitle=" React, Angular, TypeScript"
          icon={<BrandReact size={48} />}
          description="UI/UX enthusiast. Expert in HTML, CSS, JS, React, Angular, and NextJS frameworks with focus on TypeScript development."
        />
        <ExpertiseCard
          title="Backend Dev"
          subtitle=".NET Core, C#"
          icon={<CSharp size={48} />}
          description="Experienced in building RESTful APIs and microservices using .NET Core and C#. Proficient in database design and cloud integration."
        />
        <ExpertiseCard
          title="Cloud & DevOps"
          subtitle="AWS, Microservices"
          icon={<DeviceDesktop size={48} />}
          description="Strong knowledge of cloud architecture and DevOps practices. Experienced in AWS integration, CI/CD pipelines, and microservices architecture."
        />
        <ExpertiseCard
          title="Database & Messaging"
          subtitle="MongoDB, RabbitMQ"
          icon={<Database size={48} />}
          description="Experienced in database design and optimization with MongoDB. Proficient in message queuing systems like RabbitMQ for distributed applications."
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
    <Card>
      <div className=" p-4 md:p-10">
        <div className="flex items-center mb-4">
          {icon}

          <h1 className="text-xl md:text-2xl font-black font-mono z-0 ml-4 leading-5 md:leading-7">
            <span className="tracking-wide relative before:absolute  before:right-0 before:bottom-1.5 before:w-full before:h-[8px] before:-skew-x-12  before:bg-rose-300 dark:before:bg-rose-500 before:-z-10">
              {title}
            </span>
            <br />
            {subtitle}
          </h1>
        </div>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </Card>
  );
};
