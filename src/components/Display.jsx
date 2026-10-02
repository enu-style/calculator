import React from 'react'

function Display({ value, operation }) {
  return (
    <div className="display">
      {operation && <div className="operation">{operation}</div>}
      <div className="current-value">{value}</div>
    </div>
  )
}

export default Display
