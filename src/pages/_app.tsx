import logoImg from '@/assets/logo.svg'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import { AppProps } from 'next/app'
import Image from 'next/image'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Header>
          <Image src={logoImg} alt="logo" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
