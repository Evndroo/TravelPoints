import { render, screen } from '@testing-library/react'

import { Map } from '@/components'

describe('<Map/>', () => {
	it('should render without any marker', () => {
		render(<Map />)

		expect(
			screen.getByRole('link', {
				name: /a js library for interactive maps/i
			})
		).toBeInTheDocument()
	})

	it('should render with the marker in correct place', () => {
		const place = {
			id: '1',
			name: 'Petrópolis',
			slug: 'pretropolis',
			location: {
				latitude: 0,
				longitude: 100
			}
		}

		const secondPlace = {
			id: '2',
			name: 'Reykjavik',
			slug: 'Reykjavik',
			location: {
				latitude: 799,
				longitude: -897
			}
		}

		render(<Map places={[place, secondPlace]} />)

		expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
		expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
	})
})
