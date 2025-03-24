"use client";
import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaAws, 
  FaGithub
} from "react-icons/fa";
import { 
  SiPython, 
  SiR, 
  SiTableau
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";

// Skill data with icons
const skills = [
  { id: 1, name: "Python", Icon: SiPython, color: "text-yellow-400" },
  { id: 2, name: "R", Icon: SiR, color: "text-blue-400" },
  { id: 3, name: "Tableau", Icon: SiTableau, color: "text-blue-600" },
  { id: 4, name: "VSCode", Icon: VscVscode, color: "text-blue-500" },
  { id: 5, name: "GitHub", Icon: FaGithub, color: "icon-style" }, // 使用 icon-style 确保跟随主题
  { id: 6, name: "AWS", Icon: FaAws, color: "text-orange-400" },
  { id: 7, name: "SQL", Icon: BiLogoPostgresql, color: "text-blue-500" },
  { id: 8, name: "HTML", Icon: FaHtml5, color: "text-orange-500" }
];

const SkillTree = () => {
  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-700 dark:bg-gray-200 dark:border-gray-200 
                         shadow-md hover:shadow-lg rounded-xl p-6 
                         flex flex-col items-center justify-center 
                         transition-all duration-300"
            >
              <skill.Icon className={`w-12 h-12 ${skill.color}`} />
              <span className="text-base font-semibold mt-2">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTree;
