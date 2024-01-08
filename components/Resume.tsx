import React, { FC, PropsWithChildren } from "react";
import Heading from "./Heading";
import Tag from "./Tag";

type ResumeItemProps = {
  children: React.ReactNode;
};
const ResumeItem = ({ children }: ResumeItemProps) => {
  return (
    <div className="pl-4 relative last:pb-0 before:absolute before:w-4 before:h-4 before:bg-rose-400 dark:before:bg-rose-500  before:z-10 before:top-[8px] before:left-[-9px] before:rounded-full after:h-[100%] after:w-[2px] after:bg-rose-400 dark:after:bg-rose-500 after:absolute after:top-[8px] after:left-[-2px] after:z-0 pb-6">
      {children}
    </div>
  );
};

const ResumeTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-xl md:text-2xl font-mono">{children}</h1>;
};

function Resume() {
  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4">
          <div>
            <h1 className="font-mono font-bold text-3xl md:text-4xl  my-6">Education</h1>
            <ResumeItem>
              <ResumeTitle>Sylhet Engineering College</ResumeTitle>
              <h1>
                <em>B.Sc in Computer Science & Engineering</em>
              </h1>
              <Tag>Jan 2018 - Dec 2022</Tag>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Cumilla Victoria govt. College</ResumeTitle>
              <h1>
                <em>Higher Secondary Certificate</em>
              </h1>
              <Tag>June 2015 - June 2017</Tag>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Cumilla Zilla School</ResumeTitle>
              <h1>
                <em>Secondary School Certificate</em>
              </h1>
              <Tag>Jan 2010 - Feb 2015</Tag>
            </ResumeItem>
          </div>
          <div>
            <h1 className="font-mono text-3xl md:text-4xl  font-bold my-6">Professional Experience</h1>
            <ResumeItem>
              <ResumeTitle>Associate Software Engineer</ResumeTitle>
              <h1>
                <em>Orbitax Bangladesh Limited</em>
              </h1>
              <Tag>Jan 2023 - Present</Tag>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Full-Stack Web Developer</ResumeTitle>
              <h1>
                <em>Fiverr.com</em>
              </h1>
              <ul>
                <li>- Completed over 20 projects on Fiverr.com</li>
                <li>- Level one seller in the Fiverr.com platform</li>
                <li>- 100% customer satisfaction rate</li>
              </ul>
            </ResumeItem>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
