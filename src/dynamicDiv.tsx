import React, { useRef, useEffect, ReactNode } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import { HolderOutlined } from '@ant-design/icons'
import styles from './styles.module.css'

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

type fixed = 'fixed' | 'relative' | 'absolute' | undefined

interface DynamicDivProps {
  top?: number
  left?: number
  shadow?: boolean
  scalable?: boolean
  perspective?: boolean
  children?: ReactNode
  draggableRef?: React.MutableRefObject<any>
}

export default function DynamicDiv(props: DynamicDivProps) {
  const top = props.top ?? 10
  const left = props.left ?? 10
  const shadow = props.shadow
  const scalable = props.scalable
  const perspective = props.perspective
  const domTarget = useRef(null)
  const draggableRef = props.draggableRef ?? null

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: left,
    y: top,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) => api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.05 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.05,
        }),
      onHover: ({ hovering }) => !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { domTarget: draggableRef ?? domTarget, eventOptions: { passive: false } },
  )

  const dynamicDivStyles = {
    position: 'fixed' as fixed,
    transform: perspective ? 'perspective(600px)' : undefined,
    left: x,
    top: y,
    scale: scalable ? to([scale, zoom], (s, z) => s + z) : undefined,
    rotateX: perspective ? rotateX : undefined,
    rotateY: perspective ? rotateY : undefined,
    rotateZ: perspective ? rotateZ : undefined,
  }

  return (
    <animated.div className={shadow && styles.card} style={dynamicDivStyles}>
      {!draggableRef && (
        <div className={styles['drag-el']} ref={domTarget}>
          <HolderOutlined />
        </div>
      )}
      {props.children}
    </animated.div>
  )
}
