import React from 'react'

function Button({ value, onClick, className = '', type = 'number' }) {
  return (
    <button
      className={`calc-button ${className} ${type}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  )
}

export default Button
