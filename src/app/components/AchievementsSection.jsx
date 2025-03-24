"use client";
import React from "react";
import CountUp from "react-countup";

const achievementsList = [
  
  {
    metric: "Years",
    value: 2,
    postfix: "",
  },
  
  {
    metric: "Projects",
    value: 5,
    postfix: "",
  },
  {
    metric: "Awards",
    value: 7,
    postfix: "",
  },

];

const AchievementsSection = () => {
  return (
    <div className="flex flex-col h-full justify-start px-4 xl:px-10">
      <div className="flex flex-row lg:flex-col gap-8 flex-1 justify-between">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex flex-col items-start  items-center">
            <h2 className="text-[var(--text-color)] text-7xl font-bold flex items-center">
              <CountUp
                end={achievement.value}
                duration={2}
                separator=","
                className="text-[var(--text-color)] text-7xl font-bold"
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
