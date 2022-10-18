import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/global'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>My trips</title>
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="apple-touch-icon" href="/img/icon-192.png" />
				<meta
					name="description"
					content="Just some places that I know or want to know"
				/>
			</Head>
			<GlobalStyles></GlobalStyles>
			<Component {...pageProps} />
		</>
	)
}

export default App
