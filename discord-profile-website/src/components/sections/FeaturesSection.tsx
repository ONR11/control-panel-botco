'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import {
  BarChart3,
  Shield,
  Zap,
  Users,
  Trophy,
  Gamepad2,
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track your Discord activity with detailed charts and statistics.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with end-to-end encryption.',
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Live data synchronization with Discord servers.',
  },
  {
    icon: Users,
    title: 'Community Features',
    description: 'Connect with friends and view leaderboards.',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    description: 'Unlock badges and showcase your accomplishments.',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Insights',
    description: 'Monitor your gaming performance and statistics.',
  },
]

const FeaturesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Powerful Features</h2>
          <p className="text-gray-400 text-lg">Everything you need to understand your Discord presence</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div key={idx} variants={item}>
                <Card hover gradient>
                  <div className="mb-4 p-3 bg-discord/20 rounded-lg w-fit">
                    <Icon className="w-8 h-8 text-discord" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
