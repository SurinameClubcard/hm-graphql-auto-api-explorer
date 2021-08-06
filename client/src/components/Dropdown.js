import React, { useRef, useState } from 'react'
import '../styles/Dropdown.scss'
import { ReactComponent as ChevronIcon } from '../images/chevron.svg'
import { useClickAway } from 'react-use'
import { animated, useTransition } from '@react-spring/web'

export default function Dropdown({ className, label, value, items = [] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => {
    setOpen(false)
  })

  const onClickItem = (item) => {
    item.onClick()
    setOpen(false)
  }

  const transitions = useTransition(open ? [open] : [], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <div
      className={`Dropdown ${className || ''} ${open ? 'Open' : ''}`}
      ref={ref}
    >
      <div className="DropdownButton" onClick={() => setOpen(!open)}>
        <span>{label}</span>
        <ChevronIcon />
      </div>
      {transitions(({ opacity }) => (
        <animated.div
          style={{
            opacity,
          }}
        >
          <div className={`DropdownContent`}>
            {items.map((item, key) => (
              <div
                className={`DropdownItem ${
                  value === item.value ? 'Selected' : ''
                }`}
                key={key}
                onClick={() => onClickItem(item)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </animated.div>
      ))}
    </div>
  )
}