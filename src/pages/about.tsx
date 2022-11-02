import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import styled from 'styled-components'

import { LinkWrapper } from '@/components'

const Root = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	max-width: var(--container);
	margin: auto;
`

const Heading = styled.div`
	font-size: var(--large);
	margin-bottom: var(--large);
`

const Body = styled.div`
	p {
		font-size: var(--medium);
		line-height: var(--medium);
		max-width: 30ch;
	}
`

const About = () => {
	return (
		<Root>
			<LinkWrapper href="/">
				<CloseOutline size={32} aria-label="Close" />
			</LinkWrapper>
			<Heading>Travel Points</Heading>
			<Body>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque,
				corporis amet quos similique reiciendis. A provident nemo iusto,
				assumenda quis pariatur adipisci dolor odit ipsam error. Dolorum, ea
				reiciendis.
			</Body>
		</Root>
	)
}

export default About
