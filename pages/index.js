import Head from 'next/head'
import Hero from "../component/Hero/Hero"
import Feature from '../component/Feature/Feature'
import Service from '../component/Service/Service'
import Blog from '../component/Blog/Blog'
import Newsletter from '../component/Newsletter/Newsletter'
import { ChevronUpOutline } from 'react-ionicons'
import { useState, useEffect} from 'react'

export default function Home() {

    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };



  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        Decentitservice - Your reliable IT plug
      </title>
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"/>
    </Head>
    <article>
      <Hero />
      <Feature />
      <Service />
      <Blog />
      <Newsletter />
    </article>
          
          {/* #GO TO TOP */}


          <a href="#top" className={`go-top ${visible ? "active" : ""} `}   data-go-top>
            <ChevronUpOutline/>
        </a>
    </>
  )
}
