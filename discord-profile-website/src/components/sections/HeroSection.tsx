'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

interface HeroSectionProps {
  onLogin: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLogin }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto z-10"
      >
        <motion.div variants={item} className="mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-discord/10 border border-discord/50 rounded-full">
            <Sparkles className="w-5 h-5 text-discord" />
            <span className="text-sm font-semibold text-discord">Premium Discord Analytics</span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Discover Your
          <br />
          <span className="bg-gradient-to-r from-discord via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discord Story
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Unlock advanced analytics, track your gaming statistics, view server history, and showcase your achievements with our premium Discord profile platform.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onLogin}
            size="lg"
            className="bg-gradient-to-r from-discord to-purple-600 hover:from-discord hover:to-purple-500 group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { label: '100K+', sublabel: 'Active Users' },
            { label: '50M+', sublabel: 'Analytics Tracked' },
            { label: '99.9%', sublabel: 'Uptime' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-discord">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
