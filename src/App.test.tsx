import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the faculty homepage and its primary destinations', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Amber Horvath/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Current research projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Supporting developer experience' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Let’s ask some questions together/ })).toHaveAttribute('href', '/students/')
    expect(screen.getByRole('link', { name: 'Email Amber Horvath' })).toHaveAttribute('href', 'mailto:amberhorvath9@gmail.com')
    expect(screen.getByRole('link', { name: 'Amber Horvath’s CV (PDF)' })).toHaveAttribute('href', './resources/amber-horvath-cv.pdf')
    expect(screen.getByText('07/2026')).toBeInTheDocument()
})
