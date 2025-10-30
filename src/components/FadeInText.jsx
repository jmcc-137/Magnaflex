import React from 'react'
import { motion } from 'framer-motion';
const FadeInText = ({children, delay = 0, className = "", direction = "left"}) => {
  return (
    <>
    <motion.div 
    initial= {{opacity: 0, x: direction === 'right' ? 40 : -40}}
    animate= {{opacity: 1, x: 0}}
    transition={{duration: 0.8, delay}}
    className={className}
    >
        {children}
    </motion.div>
    </>

  )
}

export default FadeInText
