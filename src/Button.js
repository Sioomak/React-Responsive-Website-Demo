import React from 'react'
import './Button.css'

const STYLES = ['btin--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--mobile']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize, 
  ButtonColor
}) => {
  //button gets styles, Size, and Color and if not, it automatically defaults back to the 'primary' of each of them.
  const checkButtonStyle = STYLES.includes(buttonStyle) ? 
  buttonStyle : STYLES[0] 

  const checkButtonSize = STYLES.includes(buttonSize) ? 
  buttonSize : STYLES[0] 

  const checkButtonColor = STYLES.includes(ButtonColor) ? 
  buttonColor : STYLES[0]

  return (
    <button className={
      `btn ${checkButtonStyle} ${checkButtonSize} 
    ${checkButtonColor}`} onClick={onClick} type={type}
    >{children} 
    </button>
  )
}