import React, { FC, PropsWithChildren } from "react";
import Heading from "./Heading";

type ResumeItemProps = {
  children: React.ReactNode;
};
const ResumeItem = ({ children }: ResumeItemProps) => {
  return (
    <div className="pl-4 relative last:pb-0 before:absolute before:w-4 before:h-4 before:bg-orange-400 dark:before:bg-orange-600  before:z-10 before:top-[8px] before:left-[-9px] before:rounded-full after:h-[100%] after:w-[2px] after:bg-orange-400 dark:after:bg-orange-600 after:absolute after:top-[8px] after:left-[-2px] after:z-0 pb-6">
      {children}
    </div>
  );
};

const ResumeTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-xl md:text-2xl font-secondary">{children}</h1>;
};

const ResumeTag: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-xs p-0.5 leading-none text-zinc-900 dark:bg-orange-300 bg-orange-100 inline-block">
      {children}
    </div>
  );
};

function Resume() {
  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-4">
          <div>
            <h1 className="font-secondary text-3xl md:text-4xl  my-6">Education</h1>
            <ResumeItem>
              <ResumeTitle>Sylhet Engineering College</ResumeTitle>
              <h1>
                <em>B.Sc in Computer Science & Engineering</em>
              </h1>
              <ResumeTag>Jan 2018 - Dec 2022</ResumeTag>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Cumilla Victoria govt. College</ResumeTitle>
              <h1>
                <em>Higher Secondary Certificate</em>
              </h1>
              <ResumeTag>June 2015 - June 2017</ResumeTag>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Cumilla Zilla School</ResumeTitle>
              <h1>
                <em>Secondary School Certificate</em>
              </h1>
              <ResumeTag>Jan 2010 - Feb 2015</ResumeTag>
            </ResumeItem>
          </div>
          <div>
            <h1 className="font-secondary text-3xl md:text-4xl  my-6">Professional Experience</h1>
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
