import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { sanityClient, urlFor } from "../../sanity";

const Product = ({ product }) => {
  return (
    <div className="md:mx-10 mt-20 py-4 px-8">
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Web3, Blockchain Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>
      <div className="grid md:grid-cols-2 md:gap-x-10">
        <Image 
        src={urlFor(product.images[0].mainImage).url()}
        alt="product"
        width={4}
        height={3}
        layout="responsive" />

        <div className="md:ml-4 items-left right-0">
          <h2 className="md:text-4xl text-xl text-gray-600 uppercase font-bold">{product.title}</h2>
          <p className="mt-4 text-lg">{product.description}</p>
          <Link href="/contact">
          <button className="mt-10 w-[70%] p-5 btn btn-secondary text-white rounded-xl md:text-xl text-sm font-bold" type="submit">Get This Service Now</button>
          </Link>
        </div>
      </div>
      <div className="mt-10 place-items-center">
        <div className="md:grid md:grid-cols-2 place-items-center grid-cols-1 gap-4">
          {product.images.map( image => (
           <Link key={image.id} href={"/"+image.id}> 
          <div className="group bg-white pb-6 pt-1 px-2 rounded-xl shadow hover:shadow-lg ">
            <img key={image.id} className="md:w-[400px] lg:w-[500px] w-[300px] md:h-[300px] lg:[400px] h-[200px] rounded-sm" 
            src={urlFor(image.mainImage).url()} alt={image.id}/>
            <h2 className="group-hover:text-gray-800 pt-4 text-gray-600 text-center md:text-2xl text-xl font-semibold  ">{image.title}</h2>
          </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
   const serviceQuery = `*[_type == 'service']{
    slug,
  }`

  const services = await sanityClient.fetch(serviceQuery)

  const paths = services.map((item) => {
    return {
      params: { name: item.slug.current },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const productQuery = `*[_type == 'service']{
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

  const products = await sanityClient.fetch(productQuery)
  const name = ctx.params.name;
  const product = await products.filter((item) => item.slug.current === name)[0];
  return {
    props: { product },
  };
};

export default Product;