import React, { useRef, useEffect, ReactNode } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import styles from './styles.module.css'

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

interface DynamicDivProps {
  shadow?: boolean
  scalable?: boolean
  perspective?: boolean
  children?: ReactNode
}

export default function DynamicDiv(props: DynamicDivProps) {
  const shadow = props.shadow
  const scalable = props.scalable
  const perspective = props.perspective

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const domTarget = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) => api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } },
  )

  let dynamicDivStyles = {
    transform: perspective ? 'perspective(600px)' : undefined,
    x,
    y,
    scale: scalable ? to([scale, zoom], (s, z) => s + z) : undefined,
    rotateX: perspective ? rotateX : undefined,
    rotateY: perspective ? rotateY : undefined,
    rotateZ: perspective ? rotateZ : undefined,
  }

  return (
    <div className={shadow && styles.container}>
      <animated.div ref={domTarget} className={shadow && styles.card} style={dynamicDivStyles}>
        <animated.div>{props.children}</animated.div>
      </animated.div>
    </div>
  )
}
