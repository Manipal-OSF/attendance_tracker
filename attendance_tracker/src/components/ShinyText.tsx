'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className
}: ShinyTextProps) {
  return (
    <motion.div
      className={cn(
        'relative inline-block cursor-default text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 bg-[length:250%_100%]',
        {
          'animate-shimmer': !disabled,
        },
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(110deg, #EE441C 45%, #fff 50%, #EE441C 55%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </motion.div>
  )
}
