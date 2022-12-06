import { LatLngExpression } from 'leaflet'
import { useRouter } from 'next/router'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type Place = {
	id: string
	name: string
	slug: string
	location: {
		latitude: number
		longitude: number
	}
}

export type MapProps = {
	places?: Place[]
}

const MAP_API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY

const CustomTileLayer = () => {
	return MAP_API_KEY ? (
		<TileLayer
			attribution='<a href=\"https://www.maptiler.com/copyright/\" target=\"_blank\">&copy; MapTiler</a> <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">&copy; OpenStreetMap contributors</a>'
			url={`https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${MAP_API_KEY}`}
		/>
	) : (
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
	)
}

const Map: React.FC<MapProps> = (props) => {
	const { places } = props
	const router = useRouter()
	const position: LatLngExpression = [0, 0]

	return (
		<MapContainer
			center={position}
			zoom={3}
			style={{ height: '100%', width: '100%' }}
		>
			<CustomTileLayer />

			{places?.map((place) => {
				const { latitude, longitude } = place.location

				return (
					<Marker
						position={[latitude, longitude]}
						title={place.name}
						key={`place-${place.id}`}
						eventHandlers={{
							click: () => {
								router.push(`/place/${place.slug}`)
							}
						}}
					/>
				)
			})}
		</MapContainer>
	)
}

export default Map
