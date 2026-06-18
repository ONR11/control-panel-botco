'use client'

import { motion } from 'framer-motion'
import { Sparkles, Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-discord/20 bg-discord-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-discord" />
              <span className="font-bold text-lg">Discord Profile</span>
            </div>
            <p className="text-gray-400 text-sm">Premium Discord analytics and insights platform.</p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-discord transition">Features</a></li>
              <li><a href="#" className="hover:text-discord transition">Pricing</a></li>
              <li><a href="#" className="hover:text-discord transition">Security</a></li>
              <li><a href="#" className="hover:text-discord transition">Status</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-discord transition">About</a></li>
              <li><a href="#" className="hover:text-discord transition">Blog</a></li>
              <li><a href="#" className="hover:text-discord transition">Careers</a></li>
              <li><a href="#" className="hover:text-discord transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-discord/10 hover:bg-discord/20 rounded-lg transition">
                <Twitter className="w-5 h-5 text-discord" />
              </a>
              <a href="#" className="p-2 bg-discord/10 hover:bg-discord/20 rounded-lg transition">
                <Github className="w-5 h-5 text-discord" />
              </a>
              <a href="#" className="p-2 bg-discord/10 hover:bg-discord/20 rounded-lg transition">
                <Mail className="w-5 h-5 text-discord" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-discord/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Discord Profile. All rights reserved. By ONR NEXUS.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-discord transition">Privacy Policy</a>
            <a href="#" className="hover:text-discord transition">Terms of Service</a>
            <a href="#" className="hover:text-discord transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
