// @ts-check

/**
 * Opções do Jest.
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts(x)'],
	setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/tests/$1',
		'@/(.*)': '<rootDir>/src/$1'
	}
}

module.exports = config
