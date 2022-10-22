import { render } from '@testing-library/react'

import { Map } from '@/components'

describe('<Map/>', () => {
	it('should render without any marker', () => {
		render(<Map />)
	})

	it('should render with the marker in correct place', () => {
		render(<Map />)
	})
})
