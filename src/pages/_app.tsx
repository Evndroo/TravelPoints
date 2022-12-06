import { AppProps } from 'next/app'
import Head from 'next/head'

import NextNProgress from 'nextjs-progressbar'

import GlobalStyles from '@/styles/global'

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>My trips</title>
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="apple-touch-icon" href="/img/icon-192.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#06092B" />
				<meta
					name="description"
					content="Just some places that I know or want to know"
				/>
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
					integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
					crossOrigin=""
				/>
			</Head>
			<GlobalStyles></GlobalStyles>
			<NextNProgress
				color="#f231a5"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default App
