import React, { useCallback, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful"

import useClickOutside from "./useClickOutside"

const ColorPicker = ({ color, onChange, presetColors }) => {
  const popover = useRef()
  const [isOpen, toggle] = useState(false)

  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
          <div className="picker__swatches">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                className="picker__swatch"
                style={{ backgroundColor: presetColor }}
                onClick={() => onChange(presetColor)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default ColorPicker
