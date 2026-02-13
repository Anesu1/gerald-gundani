"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame, useReducedMotion } from "framer-motion"

const GridPattern = ({ offsetX, offsetY, size }: { offsetX: any; offsetY: any; size: number }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground/30"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  )
}

export function InfiniteGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const prefersReducedMotion = useReducedMotion()
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)")
    const updatePointerType = () => setIsCoarsePointer(mediaQuery.matches)

    updatePointerType()
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePointerType)
    } else {
      mediaQuery.addListener(updatePointerType)
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updatePointerType)
      } else {
        mediaQuery.removeListener(updatePointerType)
      }
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)
  const gridSize = 40

  const speedX = 0.3
  const speedY = 0.3

  const shouldUseStaticBackground = prefersReducedMotion || isCoarsePointer

  useAnimationFrame(() => {
    if (shouldUseStaticBackground) return

    const currentX = gridOffsetX.get()
    const currentY = gridOffsetY.get()
    gridOffsetX.set((currentX + speedX) % gridSize)
    gridOffsetY.set((currentY + speedY) % gridSize)
  })

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  if (shouldUseStaticBackground) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]">
          <GridPattern offsetX={0} offsetY={0} size={gridSize} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-15%] top-[-15%] w-[35%] h-[35%] rounded-full bg-primary/15 blur-[90px]" />
          <div className="absolute left-[-10%] bottom-[-15%] w-[35%] h-[35%] rounded-full bg-blue-500/15 blur-[90px]" />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 opacity-[0.08]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </div>
      <motion.div className="absolute inset-0 opacity-50" style={{ maskImage, WebkitMaskImage: maskImage }}>
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </motion.div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-15%] top-[-15%] w-[35%] h-[35%] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-15%] w-[35%] h-[35%] rounded-full bg-blue-500/20 blur-[100px]" />
      </div>
    </div>
  )
}
