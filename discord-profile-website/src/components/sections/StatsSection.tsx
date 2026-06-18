'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockActivityData = [
  { day: 'Mon', activity: 65 },
  { day: 'Tue', activity: 78 },
  { day: 'Wed', activity: 92 },
  { day: 'Thu', activity: 81 },
  { day: 'Fri', activity: 156 },
  { day: 'Sat', activity: 145 },
  { day: 'Sun', activity: 98 },
]

const mockServerData = [
  { name: 'Gaming Hub', members: 5420 },
  { name: 'Dev Zone', members: 3210 },
  { name: 'Creative Studio', members: 2890 },
  { name: 'Community', members: 4560 },
]

const StatsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Your Statistics</h2>
          <p className="text-gray-400 text-lg">See how we visualize your Discord journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Activity Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-dark rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-6">Weekly Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(88, 101, 242, 0.1)" />
                <XAxis stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(32, 34, 37, 0.8)',
                    border: '1px solid #5865F2',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="activity"
                  stroke="#5865F2"
                  strokeWidth={3}
                  dot={{ fill: '#5865F2', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Server Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-dark rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-6">Top Servers</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockServerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(88, 101, 242, 0.1)" />
                <XAxis dataKey="name" stroke="#888" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(32, 34, 37, 0.8)',
                    border: '1px solid #5865F2',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="members" fill="#5865F2" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
