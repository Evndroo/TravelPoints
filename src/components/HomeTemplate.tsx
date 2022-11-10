import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from './Map'

const Map = dynamic(() => import('./Map'), {
	ssr: false
})

const LinkWrapper = dynamic(() => import('../components/LinkWrapper'), {
	ssr: false
})

export default function HomeTemplate({ places }: MapProps) {
	return (
		<>
			<LinkWrapper href="/about">
				<InfoOutline size={32} aria-label="About" />
			</LinkWrapper>
			<Map places={places} />
		</>
	)
}
