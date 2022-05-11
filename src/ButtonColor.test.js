import {fireEvent, render, screen} from '@testing-library/react'
import ButtonColor from './ButtonColor'

test('ButtonColor', () => {
  render(<ButtonColor />)
  const btn = screen.getByText(/Click Me/i)

  expect(btn.style.color).toBe('red')

  fireEvent.click(btn)

  expect(btn.style.color).toBe('blue')
})
