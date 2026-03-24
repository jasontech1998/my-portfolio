"use client"

import { useState, useEffect } from "react"
import "./voice.css"

export default function Voice() {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Handle tooltip display after delay
  useEffect(() => {
    let tooltipTimer: NodeJS.Timeout

    if (isHovered && !isClicked) {
      tooltipTimer = setTimeout(() => {
        setShowTooltip(true)
      }, 500) // Show tooltip after 500ms of hovering
    } else {
      setShowTooltip(false)
    }

    return () => {
      clearTimeout(tooltipTimer)
    }
  }, [isHovered, isClicked])

  const handleClick = () => {
    setIsClicked(!isClicked)
    setShowTooltip(false)
  }

  return (
    <div className="voice-container">
      {/* Tooltip */}
      {showTooltip && <div className="tooltip">Click to begin dictation</div>}

      {/* Voice component */}
      <div
        className={`voice ${isClicked ? "voice-active" : isHovered ? "voice-hovered" : ""}`}
        onMouseEnter={() => !isClicked && setIsHovered(true)}
        onMouseLeave={() => !isClicked && setIsHovered(false)}
        onClick={handleClick}
      >
        {isClicked ? (
          <div className="active-container">
            {/* X button */}
            <div className="x-button">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Waveform visualization */}
            <div className="waveform">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="waveform-bar"
                  style={{
                    height: `${6 + Math.sin(i * 0.8) * 6}px`
                  }}
                />
              ))}
            </div>

            {/* Stop/Resume button */}
            <div className="resume-button">
              <div></div>
            </div>
          </div>
        ) : (
          /* Dots that appear when hovered */
          isHovered && (
            <div className="dots-container">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="dot" />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}

