"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa"; // ✅ 引入图标库

const HeroSection = () => {
  return (
    <section className="lg:py-16 bg-background text-[var(--text-color)]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Jay",
                1000,
                "Data Engineer",
                1000,
                "Python Developer",
                1000,
                "Problem Solver",
                1000,
                "Jay"  // 最后停在 "Jay"
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h1>
          <p className="text-[var(--text-color)] text-base sm:text-lg mb-6 lg:text-xl">
          I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </p>

          {/* ✅ 改进后的 Resume 按钮 */}
          <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 px-10 py-3 pl-15 pr-8 rounded-2xl border-2 lg:text-xl font-bold border-primary-500 text-[var(--text-color)] hover:text-[var(--text-color)] hover:bg-gradient-to-br from-primary-500 to-secondary-500 transition-all duration-300"
          >
            <span>Resume</span>
            <FaFileAlt className="text-xl" />
          </Link>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[var(--background-color)] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.svg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
