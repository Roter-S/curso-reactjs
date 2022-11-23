import React from 'react'

const MyButton = ({ text }) => {
    const handleClickButton = (title) => {
      console.log(title)
    }
  
    return (
      <button onClick={() => handleClickButton(text)}>{text}</button>
    )
  }

export default MyButton