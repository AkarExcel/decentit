import Head from 'next/head'
import Hero from "../component/Hero/Hero"
import Feature from '../component/Feature/Feature'
import Service from '../component/Service/Service'
import Blog from '../component/Blog/Blog'
import Aos from 'aos'
import Newsletter from '../component/Newsletter/Newsletter'
import { ChevronUpOutline } from 'react-ionicons'
import { useState, useEffect} from 'react'
import {data} from '../data'
import { sanityClient } from '../sanity'

export default function Home({services, posts}) {

  const [visible, setVisible] = useState(false)

  //This block check if we are on client side.
  if(typeof window !== 'undefined'){
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true) 
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

    window.addEventListener('scroll', toggleVisible);
  }




    useEffect(() => {
      Aos.init({duration:800, once: true, easing: "ease-in-quart"})
    },[])


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
      <div><Hero /></div> 
      <div data-aos="fade-up"><Service services={services}/></div>
      <div data-aos="fade-up"><Blog posts={posts}/></div>
      <div data-aos="fade-left"><Newsletter /></div>
    </article>
          
          {/* #GO TO TOP */}


          <a href="#top" className={`go-top ${visible ? "active" : ""} `}  data-go-top>
            <ChevronUpOutline/>
        </a>
    </>
  )
}


export const getStaticProps = async () => {
    const query = `*[_type == "post"][0...6]{
      _id,
      title,
      publishedAt,
      categories[] -> {
        title,         
},
      author -> {
        name,
        image
      },
      description,
      mainImage,
      slug
    }`

    const serviceQuery = `*[_type == 'service']{
      _id,
      description,
      name,
      title,
      slug,
      images[] -> {
        title,
        mainImage,
        _id,
      }
    }`
  
    const services = await sanityClient.fetch(serviceQuery)
  
    const posts = await sanityClient.fetch(query)
    // const services = data;
    return{
      props: {
        posts,services
      }
    }
  }