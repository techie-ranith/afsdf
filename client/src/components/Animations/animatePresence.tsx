import React from 'react'

const animatePresence = () => {
  return (
    <div>animatePresence</div>
  )
}

export default animatePresence

<AnimatePresence>
  {[...Array(5)].map((_, index) => (
    <motion.div
      key={index}
      className="flex items-center justify-center flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* FAQ item content */}
    </motion.div>
  ))}
</AnimatePresence>
