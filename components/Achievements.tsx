import React, { FC } from "react";
import { Trophy, Users, School } from "tabler-icons-react";
import Heading from "./Heading";
import { Card } from "./card";
import Tag from "./Tag";

interface AchievementCardProps {
  title: string;
  description: string;
  category: string;
  year: string;
  icon: JSX.Element;
}

const AchievementCard: FC<AchievementCardProps> = ({ title, description, category, year, icon }) => {
  return (
    <Card>
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/20">
            {icon}
          </div>
          <div className="ml-4 flex-1">
            <Tag>{category}</Tag>
          </div>
        </div>
        
        <h3 className="font-mono font-black text-xl md:text-2xl mb-3 leading-tight">
          <span className="relative before:absolute before:right-0 before:bottom-1 before:w-full before:h-[6px] before:-skew-x-12 before:bg-rose-300 dark:before:bg-rose-500 before:-z-10">
            {title}
          </span>
        </h3>
        
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 flex-1 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            {year}
          </span>
        </div>
      </div>
    </Card>
  );
};

function Achievements() {
  const achievements = [
    {
      title: "Champion",
      description: "Won first place in the Geeky Solution Learnathon, competing against talented developers and showcasing innovative problem-solving skills.",
      category: "Competition",
      year: "2022",
      icon: <Trophy size={24} className="text-rose-500" />
    },
    {
      title: "Event Organiser",
      description: "Successfully organized and managed the SEC Inter University Junior Programming Contest, coordinating with multiple institutions and participants.",
      category: "Leadership",
      year: "2022", 
      icon: <Users size={24} className="text-rose-500" />
    },
    {
      title: "Mobile Development Training",
      description: "Completed comprehensive training in Cross Platform Mobile Application and Game Development, mastering modern frameworks and development practices.",
      category: "Education",
      year: "2022",
      icon: <School size={24} className="text-rose-500" />
    }
  ];

  return (
    <section id="achievements">
      <Heading>Certificates & Achievements</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-20">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            description={achievement.description}
            category={achievement.category}
            year={achievement.year}
            icon={achievement.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Achievements;
