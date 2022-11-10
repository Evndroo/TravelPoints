import { LatLngExpression } from 'leaflet'
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

const Map: React.FC<MapProps> = (props) => {
	const { places } = props

	const position: LatLngExpression = [0, 0]

	return (
		<MapContainer
			center={position}
			zoom={3}
			style={{ height: '100%', width: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{places?.map((place) => {
				const { latitude, longitude } = place.location

				return (
					<Marker
						position={[latitude, longitude]}
						title={place.name}
						key={`place-${place.id}`}
					/>
				)
			})}
		</MapContainer>
	)
}

export default Map
