import styled from 'styled-components'

const Wrapper = styled.main`
	background-color: #06092b;
	color: #fff;
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Logo = styled.img`
	width: 25rem;
	margin-bottom: 1.5rem;
`

const Title = styled.h1`
	font-size: 2rem;
`

const Description = styled.h2`
	font-size: 1.5em;
	font-weight: 400;
`

const Illustration = styled.img`
	margin-top: 1.5rem;
	width: min(30rem, 100%);
`

const Main = () => (
	<Wrapper>
		<Logo
			src="/img/logo.svg"
			alt="Imagem de um átomo e React Avançado escrito ao lado."
		/>
		<Title>React Avançado</Title>
		<Description>TypeScript, ReactJS, NextJs e Styled Components</Description>
		<Illustration
			src="/img/hero-illustration.svg"
			alt="Um desenvolvedor de frente para uma tela com código"
		/>
	</Wrapper>
)

export default Main
