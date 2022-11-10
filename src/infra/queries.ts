import { gql } from 'graphql-request'

export const GET_PAGES = gql`
	query getPages($first: Int) {
		pages(first: $first) {
			id
			slug
			title
			body {
				html
			}
		}
	}
`

export const GET_PAGE_BY_SLUG = gql`
	query GetPageBySlug($slug: String!) {
		page(where: { slug: $slug }) {
			title
			body {
				html
			}
		}
	}
`

export const GET_PLACES = gql`
	query GetPlaces($first: Int) {
		places(first: $first) {
			slug
			name
			location {
				latitude
				longitude
			}
			description {
				html
			}
			gallery {
				height
				width
				url
			}
		}
	}
`

export const GET_PLACE_BY_SLUG = gql`
	query GetPlaceBySlug($slug: String!) {
		place(where: { slug: $slug }) {
			name
			description {
				html
			}
			gallery {
				height
				url
				width
			}
		}
	}
`
