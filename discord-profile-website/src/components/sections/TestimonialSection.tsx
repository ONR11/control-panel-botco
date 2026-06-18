'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Streamer',
    avatar: '👨‍💻',
    content: 'Amazing platform! The analytics gave me insights I never had before. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Community Manager',
    avatar: '👩‍💼',
    content: 'Beautiful design and incredibly useful. Our server admins love using this tool.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Gamer',
    avatar: '🎮',
    content: 'Best Discord profile viewer out there. The stats dashboard is next level!',
    rating: 5,
  },
]

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">What Users Love</h2>
          <p className="text-gray-400 text-lg">Join thousands of satisfied users</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300">"{testimonial.content}"</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
