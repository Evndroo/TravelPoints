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

export type GetPagesReturn = {
	pages: {
		id: string
		slug: string
		title: string
		body: {
			html: string
		}
	}[]
}

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

export type GetPageBySlugReturn = {
	page: {
		title: string
		body: {
			html: string
		}
	}
}
