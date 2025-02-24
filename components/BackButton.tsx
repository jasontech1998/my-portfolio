"use client"
import { motion } from "framer-motion"
import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface BackButtonProps {
  href: string
}

export const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      variant="link"
      asChild
      className="text-primary p-0 h-auto no-underline hover:no-underline group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} className="flex items-center gap-2 no-underline hover:no-underline py-2">
        <motion.div
          animate={{
            x: isHovered ? -5 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="relative"
        >
          <ArrowLeft className="w-4 h-4" />
          <motion.div
            className="absolute inset-0 bg-primary/10 rounded-full -z-10"
            initial={{ scale: 0 }}
            animate={{
              scale: isHovered ? 1.5 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          />
        </motion.div>
        <motion.span
          animate={{
            x: isHovered ? -2 : 0,
            opacity: isHovered ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          Back
        </motion.span>
      </Link>
    </Button>
  )
}

