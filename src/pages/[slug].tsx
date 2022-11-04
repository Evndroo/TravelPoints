import dynamic from 'next/dynamic'
import { GetStaticPaths, GetStaticProps } from 'next'
import styled from 'styled-components'

const CloseOutline = dynamic(() =>
	import('@styled-icons/evaicons-outline/CloseOutline').then(
		(mod) => mod.CloseOutline
	)
)

const LinkWrapper = dynamic(() => import('../components/LinkWrapper'))

import client from '@/infra/GraphQlClient'
import { GET_PAGES, GET_PAGE_BY_SLUG } from '@/infra/queries'
import type { GetPageBySlugReturn, GetPagesReturn } from '@/infra/queries'
import { useRouter } from 'next/router'

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
type PageProps = {
	body: string
	title: string
}

export default function Page(props: PageProps) {
	const { body, title } = props

	const router = useRouter()

	if (router.isFallback) return <h3>Loading...</h3>

	return (
		<Root>
			<LinkWrapper href="/">
				<CloseOutline size={32} aria-label="Close" />
			</LinkWrapper>
			<Heading>{title}</Heading>
			<Body dangerouslySetInnerHTML={{ __html: body }} />
		</Root>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { pages } = await client.request<GetPagesReturn>(GET_PAGES, {
		first: 3
	})

	const paths = pages.map(({ slug }) => ({ params: { slug } }))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { page } = await client.request<GetPageBySlugReturn>(GET_PAGE_BY_SLUG, {
		slug: context.params?.slug || ''
	})

	if (!page) return { notFound: true }

	return {
		props: {
			title: page.title,
			body: page.body.html
		}
	}
}
