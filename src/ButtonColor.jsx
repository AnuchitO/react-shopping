import React, {Fragment} from 'react'

function ButtonColor() {
  const [color, setColor] = React.useState('red')
  const [checked, setChecked] = React.useState(false)

  const handleClick = () => {
    console.log('click')
    setColor(color === 'red' ? 'blue' : 'red')
  }

  return (
    <Fragment>
      <button style={{color}} onClick={handleClick} disabled={checked}>
        Click Me
      </button>
      <div>
        <input
          type="checkbox"
          id="chbColoring"
          aria-checked="true"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor={'chbColoring'}>Disable Button</label>
      </div>
    </Fragment>
  )
}

export default ButtonColor
