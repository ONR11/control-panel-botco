'use client'

import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'secondary'
  className?: string
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary: 'bg-discord/20 text-discord border border-discord/50',
    success: 'bg-discord-success/20 text-discord-success border border-discord-success/50',
    warning: 'bg-discord-warning/20 text-discord-warning border border-discord-warning/50',
    danger: 'bg-discord-danger/20 text-discord-danger border border-discord-danger/50',
    secondary: 'bg-gray-600/20 text-gray-300 border border-gray-600/50',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
