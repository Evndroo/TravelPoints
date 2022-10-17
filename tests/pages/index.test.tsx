import { render, screen } from '@testing-library/react'
import Home from '@/pages'

describe('Teste', () => {
	it('teste', () => {
		render(<Home />)
		expect(screen.getByText('Hello World')).toBeInTheDocument()
	})
})
