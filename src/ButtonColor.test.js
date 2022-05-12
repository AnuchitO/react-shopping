import {fireEvent, render, screen} from '@testing-library/react'
import ButtonColor from './ButtonColor'

test('ButtonColor', () => {
  render(<ButtonColor />)
  const btn = screen.getByText(/Click Me/i)

  expect(btn.style.color).toBe('red')

  fireEvent.click(btn)

  expect(btn).toHaveStyle({color: 'blue'})
})

test('get checkbox by role', () => {
  render(<ButtonColor />)

  const chb = screen.getByRole('checkbox')

  expect(chb).toBeEnabled()
})

test('get checkbox by label', () => {
  render(<ButtonColor />)

  const chb = screen.getByLabelText(/disable button/i)

  expect(chb).toBeEnabled()
})

test('get checkbox by role with name', () => {
  render(<ButtonColor />)

  const chb = screen.getByRole('checkbox', {name: 'Disable Button'})

  expect(chb).toBeEnabled()
})
