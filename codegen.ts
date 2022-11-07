import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema:
		'https://api-sa-east-1.hygraph.com/v2/cl9zybl9g3jf201tbenkchmlw/master',
	documents: 'src/infra/queries.ts',
	generates: {
		'src/infra/generated/': {
			preset: 'client',
			plugins: [
				{
					add: {
						content: '/* eslint-disable */'
					}
				},
				'typescript',
				'typescript-operations'
			]
		}
	}
}

export default config
