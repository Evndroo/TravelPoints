import dynamic from 'next/dynamic'
import styled from 'styled-components'

const CloseOutline = dynamic(() =>
	import('@styled-icons/evaicons-outline/CloseOutline').then(
		(mod) => mod.CloseOutline
	)
)

const LinkWrapper = dynamic(() => import('../components/LinkWrapper'))

import client from '@/infra/GraphQlClient'
import { GET_PAGES } from '@/infra/queries'

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
	text-transform: capitalize;
`

const Body = styled.div`
	p {
		font-size: var(--medium);
		line-height: var(--medium);
		max-width: 30ch;
	}
`
type AboutData = {
	pages: {
		slug: string
		title: string
		body: {
			html: string
		}
	}[]
}

export default function About(props: AboutData) {
	const { body, title } = props.pages[0]
	return (
		<Root>
			<LinkWrapper href="/">
				<CloseOutline size={32} aria-label="Close" />
			</LinkWrapper>
			<Heading>{title}</Heading>
			<Body dangerouslySetInnerHTML={{ __html: body.html }} />
		</Root>
	)
}

export const getStaticProps = async () => {
	const { pages } = await client.request<AboutData>(GET_PAGES)

	return {
		props: {
			pages
		}
	}
}
