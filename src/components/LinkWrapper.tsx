import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: fixed;
	z-index: 1100; // bigger than map
	top: var(--small);
	right: var(--small);
	cursor: pointer;

	svg {
		color: var(--white);
		transition: color 0.3s ease-in-out;
	}

	&:hover {
		svg {
			color: var(--highlight);
		}
	}
`

type Props = {
	href: string
	children: React.ReactNode
}

const LinkWrapper = (props: Props) => {
	const { children, href } = props

	return (
		<Wrapper>
			<Link href={href}>{children}</Link>
		</Wrapper>
	)
}

export default LinkWrapper
