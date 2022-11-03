import { GraphQLClient } from 'graphql-request'

const endpoint: string = process.env.GRAPHQL_SERVER || ''

const client = new GraphQLClient(endpoint, {
	headers: { authorization: `BEARER ${process.env.GRAPHQL_TOKEN}` }
})

export default client
