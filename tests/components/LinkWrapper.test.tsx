import { LinkWrapper } from '@/components'
import { render, screen } from '@testing-library/react'

describe('<LinkWrapper/>', () => {
	it('should render link and children', () => {
		render(<LinkWrapper href="/my-link">Text Message</LinkWrapper>)

		const children = screen.getByText('Text Message')

		expect(children).toBeInTheDocument()
		expect(children).toHaveAttribute('href', '/my-link')
	})
})
