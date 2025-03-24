"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AchievementsSection from "./AchievementsSection";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <AcademicCapIcon className="w-6 h-6 text-purple-400 mt-1" />
            <div>
              <h4 className="font-semibold text-[var(--text-color)]">
                Zhejiang University of Finance & Economics
              </h4>
              <p className="text-xs text-[var(--text-subtle-color)] mb-1">2018 - 2022</p>
              <p className="text-sm text-[var(--text-subtle-color)]">
                Bachelor’s Degree in Applied Statistics
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AcademicCapIcon className="w-6 h-6 text-purple-400 mt-1" />
            <div>
              <h4 className="font-semibold text-[var(--text-color)]">
                University of Sydney
              </h4>
              <p className="text-xs text-[var(--text-subtle-color)] mb-1">2024 - 2026</p>
              <p className="text-sm text-[var(--text-subtle-color)]">
                Master’s Degree in Computer Science
              </p>
            </div>
          </li>
        </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[var(--text-color)] bg-background" id="about">
<div className="flex flex-col lg:flex-row gap-8 items-stretch py-8 px-4 sm:py-16 xl:px-16">

    {/* 左侧图片部分 */}
    <div className="flex-shrink-0">
      <Image
        src="/about.png"
        width={500}
        height={500}
        alt="A professional headshot showcasing my profile"
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* 中间文字 + Tab 部分 */}
    <div className="flex-1 text-left flex flex-col h-full ">
      <h2 className="text-4xl font-bold text-[var(--text-color)] mb-4">
        About Me
      </h2>
      <p className="text-base lg:text-lg text-justify">
        
        Currently holding <i><b className="purple">Student Visa (Subclass 500)</b></i> and intend to apply for
        <i><b className="purple"> Temporary Graduate Visa (Subclass 485)</b></i> upon completing my studies.
        <br />
        <br />
        I have experience working with languages like
        <i><b className="purple"> Python, R, Latex and SQL.</b></i>
        <br />
        <br />
        My field of interests are exploring new
        <i><b className="purple"> Data-Driven Solutions and Analytical Tools </b></i> and
        delving into fields like <i><b className="purple">Machine Learning.</b></i>
      </p>

      {/* Tab 按钮 */}
      <div className="flex flex-row justify-start mt-8">
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
      </div>

      {/* Tab 内容 */}
      <div className="mt-8">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </div>

    {/* 右侧成就模块 */}
    <div className="mt-8 lg:mt-0    flex  justify-center">

      <AchievementsSection />
    </div>
  </div>
</section>

  );
};

export default AboutSection;
