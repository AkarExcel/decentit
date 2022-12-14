import '../styles/globals.css'
import "aos/dist/aos.css"
import Layout from '../layout/layout'


function MyApp({ Component, pageProps }) {

  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
