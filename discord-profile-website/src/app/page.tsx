'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Sparkles, LogIn, Zap, Shield, TrendingUp } from 'lucide-react'
import Button from '@/components/ui/Button'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogin = () => {
    router.push('/auth/discord')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-discord-black via-purple-900 to-discord-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-discord/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-discord-black/80 backdrop-blur-md border-b border-discord/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-8 h-8 text-discord" />
              <span className="text-2xl font-bold bg-gradient-to-r from-discord to-purple-400 bg-clip-text text-transparent">
                Discord Profile
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleLogin}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-discord to-purple-600 hover:from-discord hover:to-purple-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-discord/50"
            >
              <LogIn className="w-4 h-4" />
              <span>Login with Discord</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onLogin={handleLogin} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-discord to-purple-400 bg-clip-text text-transparent">
            Ready to Explore Your Discord Profile?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of Discord users who track their statistics and achievements with our premium analytics platform.
          </p>
          <Button
            onClick={handleLogin}
            size="lg"
            className="bg-gradient-to-r from-discord to-purple-600 hover:from-discord hover:to-purple-500"
          >
            Get Started Now
          </Button>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
