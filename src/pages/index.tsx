import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

import { MapProps } from '@/components/Map'
import client from '@/infra/GraphQlClient'
import { GET_PLACES } from '@/infra/queries'
import type { GetPlacesQuery } from '@/infra/generated/graphql'

const HomeTemplate = dynamic(import('../components/HomeTemplate'))

export default function Home({ places }: MapProps) {
	return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
	const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

	return {
		props: {
			places
		}
	}
}
