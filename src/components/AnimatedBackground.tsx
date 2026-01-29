/**
 * AnimatedBackground Component
 * 
 * Creates a dynamic, animated background with floating particles
 * and gradient animations. Provides visual interest without
 * affecting readability or accessibility.
 */
const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animated-gradient opacity-30" />

      {/* Floating orb - top left */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Floating orb - top right */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Floating orb - bottom left */}
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-pulse-slow" />

      {/* Floating orb - bottom right */}
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Grid pattern overlay (subtle) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  )
}

export default AnimatedBackground
