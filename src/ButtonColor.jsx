import React, {Fragment} from 'react'

function ButtonColor() {
  const [color, setColor] = React.useState('red')
  const handleClick = () => {
    console.log('click')
    setColor(color === 'red' ? 'blue' : 'red')
  }

  return (
    <Fragment>
      <button style={{color}} onClick={handleClick}>
        Click Me
      </button>
    </Fragment>
  )
}

export default ButtonColor
