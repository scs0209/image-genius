"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import { fadeIn } from "@/lib/variant";

const Hero = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="home"
    >
      <h1 className="home-heading">
        Unleash Your Creative Vision with Image Genius
      </h1>

      <ul className="flex-center w-full gap-20">
        {navLinks.slice(1, 6).map((link) => (
          <Link
            key={link.route}
            href={link.route}
            className="flex-center flex-col gap-2"
          >
            <li className="flex-center w-fix rounded-full bg-white p-4">
              <Image src={link.icon} alt="image" width={24} height={24} />
            </li>
            <p className="p-14-medium text-center text-white">{link.label}</p>
          </Link>
        ))}
      </ul>
    </motion.section>
  );
};

export default Hero;
