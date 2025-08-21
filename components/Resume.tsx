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
              <Tag>Jan 2018 - Nov 2022</Tag>
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
              <ResumeTitle>Software Engineer</ResumeTitle>
              <h1>
                <em>Orbitax Bangladesh Limited</em>
              </h1>
              <Tag>July 2024 - Present</Tag>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>
                   Developed a dynamic drag-and-drop form builder with complex grid layout and validation logic
                  (Angular | TypeScript)
                </li>
                <li>
                   Implemented end-to-end PDF generation functionality for user-generated forms, including dynamic
                  layout rendering and multi-language support (.NET)
                </li>
              </ul>
            </ResumeItem>
            <ResumeItem>
              <ResumeTitle>Associate Software Engineer</ResumeTitle>
              <h1>
                <em>Orbitax Bangladesh Limited</em>
              </h1>
              <Tag>Jan 2023 - Jun 2024</Tag>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>
                   Developed a pagination system for large datasets in the spreadsheet module, enabling efficient data
                  handling (.Net | Angular)
                </li>
                <li>
                   Optimised the platform's spreadsheet module, resulting in a 16x performance improvement in load
                  times (Angular | JavaScript)
                </li>
              </ul>
            </ResumeItem>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
