"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface CardProps {
  image_path: string;
  subtitle: string;
  stats: { label: string; value: string }[];
}

const topContentVariant: Variants = {
  initial: {
    y: 0,
    top: "80px",
  },
  hover: {
    y: -60,
  },
};

const bottomContentVariant: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  hover: {
    opacity: 1,
    y: 0,
  },
};

const CustomHoverCard: React.FC<CardProps> = ({ image_path, subtitle, stats }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-card text-card-foreground border border-accent rounded-lg shadow-md p-6 w-80 h-[240px] overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute flex flex-col justify-between"
        variants={topContentVariant}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        transition={{ duration: 0.3 }}
      >
        <div>
          <Image
            src={image_path}
            width={76}
            height={32}
            alt="Main card image"
            className="h-8 mb-4"
          />
          <p className="text-md self-end font-medium text-muted-foreground mr-7">
            {subtitle}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 pt-4 border-t border-border bg-card"
        variants={bottomContentVariant}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-2 gap-4 px-6 pb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CustomHoverCard;
