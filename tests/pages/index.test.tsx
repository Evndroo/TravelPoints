import { render, screen } from '@testing-library/react'
import Home from '@/pages'

describe('<Home/>', () => {
	it('should show correct heading text', () => {
		render(<Home />)
		expect(
			screen.getByRole('heading', { name: /React Avançado/i })
		).toBeInTheDocument()
	})
})
