'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }
interface FadeInProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  className?: string
}
interface FadeInStagger extends React.ComponentPropsWithoutRef<typeof motion.div> {
  className?: string,
  faster?: boolean
}

export function FadeIn(
  props: FadeInProps,
) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
          initial: 'hidden',
          whileInView: 'visible',
          viewport,
        })}
      {...props}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: FadeInStagger) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
