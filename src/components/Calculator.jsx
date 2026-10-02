import React, { useState } from 'react'
import Display from './Display'
import Button from './Button'
import './Calculator.css'

function Calculator() {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [overwrite, setOverwrite] = useState(false)

  // Handle number input
  const handleNumber = (num) => {
    if (overwrite) {
      setCurrentValue(String(num))
      setOverwrite(false)
    } else {
      setCurrentValue(currentValue === '0' ? String(num) : currentValue + num)
    }
  }

  // Handle decimal input
  const handleDecimal = () => {
    if (overwrite) {
      setCurrentValue('0.')
      setOverwrite(false)
    } else if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.')
    }
  }

  // Handle operator input
  const handleOperator = (op) => {
    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation && !overwrite) {
      const result = calculate()
      setPreviousValue(result)
      setCurrentValue(result)
    }
    setOperation(op)
    setOverwrite(true)
  }

  // Perform calculation
  const calculate = () => {
    const prev = parseFloat(previousValue)
    const current = parseFloat(currentValue)

    if (isNaN(prev) || isNaN(current)) return currentValue

    let result
    switch (operation) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '×':
        result = prev * current
        break
      case '÷':
        if (current === 0) {
          return 'Error'
        }
        result = prev / current
        break
      default:
        return currentValue
    }

    // Round to avoid floating point precision issues
    return String(Math.round(result * 100000000) / 100000000)
  }

  // Handle equals
  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculate()
      setCurrentValue(result)
      setPreviousValue(null)
      setOperation(null)
      setOverwrite(true)
    }
  }

  // Handle clear (AC)
  const handleClear = () => {
    setCurrentValue('0')
    setPreviousValue(null)
    setOperation(null)
    setOverwrite(false)
  }

  // Handle delete (DEL)
  const handleDelete = () => {
    if (currentValue.length > 1) {
      setCurrentValue(currentValue.slice(0, -1))
    } else {
      setCurrentValue('0')
    }
  }

  // Handle positive/negative toggle
  const handleToggleSign = () => {
    if (currentValue === '0') return
    setCurrentValue(
      currentValue.startsWith('-') 
        ? currentValue.slice(1) 
        : '-' + currentValue
    )
  }

  // Get display operation text
  const getDisplayOperation = () => {
    if (operation && previousValue !== null) {
      return `${previousValue} ${operation}`
    }
    return ''
  }

  return (
    <div className="calculator">
      <Display 
        value={currentValue} 
        operation={getDisplayOperation()} 
      />
      
      <div className="button-grid">
        <Button value="AC" onClick={handleClear} type="function" />
        <Button value="DEL" onClick={handleDelete} type="function" />
        <Button value="+/-" onClick={handleToggleSign} type="function" />
        <Button value="÷" onClick={handleOperator} type="operator" />
        
        <Button value="7" onClick={handleNumber} />
        <Button value="8" onClick={handleNumber} />
        <Button value="9" onClick={handleNumber} />
        <Button value="×" onClick={handleOperator} type="operator" />
        
        <Button value="4" onClick={handleNumber} />
        <Button value="5" onClick={handleNumber} />
        <Button value="6" onClick={handleNumber} />
        <Button value="-" onClick={handleOperator} type="operator" />
        
        <Button value="1" onClick={handleNumber} />
        <Button value="2" onClick={handleNumber} />
        <Button value="3" onClick={handleNumber} />
        <Button value="+" onClick={handleOperator} type="operator" />
        
        <Button value="0" onClick={handleNumber} className="zero" />
        <Button value="." onClick={handleDecimal} />
        <Button value="=" onClick={handleEquals} type="equals" />
      </div>
    </div>
  )
}

export default Calculator
