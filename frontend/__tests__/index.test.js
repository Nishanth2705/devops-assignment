import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test("renders heading", () => {
  render(<Home />)
  const heading = screen.getByText(/Frontend - Message from Backend/i)
  expect(heading).toBeInTheDocument()
})

test("renders loading message initially", () => {
  render(<Home />)
  const para = screen.getByText(/Loading.../i)
  expect(para).toBeInTheDocument()
})
