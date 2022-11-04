import { gql } from 'graphql-request'

export const GET_PAGES = gql`
	query getPages {
		pages {
			id
			slug
			title
			body {
				html
			}
		}
	}
`
