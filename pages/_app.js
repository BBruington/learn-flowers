import '../styles/globals.css'
import NavBar from '../components/nav';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
    ) 
    
}

export default MyApp
