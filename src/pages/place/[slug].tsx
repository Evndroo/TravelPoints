import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const CloseOutline = dynamic(() =>
	import('@styled-icons/evaicons-outline/CloseOutline').then(
		(mod) => mod.CloseOutline
	)
)

const LinkWrapper = dynamic(() => import('@/components/LinkWrapper'))

import client from '@/infra/GraphQlClient'
import type {
	GetPlaceBySlugQuery,
	GetPlaceBySlugQueryVariables,
	GetPlacesQuery,
	GetPlacesQueryVariables,
	Place as PlaceProps
} from '@/infra/generated/graphql'
import { GET_PLACE_BY_SLUG, GET_PLACES } from '@/infra/queries'
import Image from 'next/image'

const Root = styled.div`
	padding: var(--large) var(--medium);
`

const Container = styled.section`
	max-width: var(--container);
	padding-bottom: var(--large);
	margin: auto;
`

const Heading = styled.h1`
	font-size: var(--large);
	margin-bottom: var(--medium);
`

const Subtitle = styled.h2`
	margin: var(--medium) 0;
`

const Body = styled.div`
	margin-bottom: var(--large);
	p {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-bottom: var(--small);
	}
	h3 {
		margin: var(--small) 0;
		font-size: 2.3rem;
	}

	h4 {
		margin: var(--small) 0;
		font-size: 2rem;
	}
`

const Gallery = styled.div`
	display: grid;
	grid-gap: var(--medium);
	margin-top: var(--medium);

	img {
		background: #f6f7f8;
		background-image: linear-gradient(
			to right,
			#f6f7f8 0%,
			#edeef1 20%,
			#f6f7f8 40%,
			#f6f7f8 100%
		);
		background-size: 80rem 14rem;
		animation: placeholderShimmer 1s linear infinite forwards;
		@keyframes placeholderShimmer {
			0% {
				background-position: -40rem 0;
			}
			100% {
				background-position: 40rem 0;
			}
		}
	}
`

export default function Place(place: PlaceProps) {
	const router = useRouter()

	if (router.isFallback) return <h3>Carregando...</h3>

	return (
		<Root>
			<Container>
				<LinkWrapper href="/">
					<CloseOutline size={32} aria-label="Close" />
				</LinkWrapper>
				<Heading>{place.name}</Heading>

				<Body
					dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
				/>
				<Subtitle>Algumas imagens do local</Subtitle>
				<Gallery>
					{place.gallery.map((image, index) => (
						<Image
							key={index}
							src={image.url}
							quality={75}
							width={1000}
							height={600}
							alt=""
							aria-hidden
						/>
					))}
				</Gallery>
			</Container>
		</Root>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { places } = await client.request<
		GetPlacesQuery,
		GetPlacesQueryVariables
	>(GET_PLACES, {
		first: 10
	})

	const paths = places.map(({ slug }) => ({ params: { slug } }))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { place } = await client.request<
		GetPlaceBySlugQuery,
		GetPlaceBySlugQueryVariables
	>(GET_PLACE_BY_SLUG, {
		slug: `${context.params?.slug}`
	})

	if (!place) return { notFound: true }

	return {
		props: place
	}
}
