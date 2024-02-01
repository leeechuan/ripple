import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import Navbar from '../components/Navbar'
import "../styles/productlisting.css"
import ReactLoading from 'react-loading'
import summerbg from "../assets/summer-bg.jpg"
import ProductCard from '../components/productcontentcard'


const ProductListing = () => {
    

    const { user } = useAuthContext();
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/products`, {
                  headers: {
                    'Authorization': `Bearer ${user.token}`
                  }
                });
        
                if (response.ok) {
                  const json = await response.json();
                  setProducts(json)
                  console.log(json)

                  setIsLoading(false)


                } else {
                  console.error('Error fetching products:', response.statusText);
                }
              } catch (error) {
                console.error('Error fetching products:', error);
              }
            };


        if (user && isLoading) {
            fetchData();
        }

    }, [isLoading, user, setProducts]);





    return (
        <div className="home">
            <Navbar></Navbar>
            {!isLoading ?
            <div className='plp-page'>
                <div className=''>

                    <div className='relative'>
                        <img className="summer-bg" src={summerbg}></img>
                        <div className='product-hero-title-container'>
                          <h1 className='f-h1 pb-5 product-hero-title'>Holiday Sale</h1>
                          <h6 className='f-h6 pb-5 product-hero-subtitle'>Up to 70% off selected products. Purchase at any club outlets.</h6>                          
                        </div>

                        <div className='flex flex-wrap justify-around '>


                        </div>                        
                    </div>

                </div>
                
                <div className='product-grid grid lg:grid-cols-3 grid-cols-2 '>

                  {products && products.map((product) => (
                        <ProductCard key={product._id} product={product}/>
                  ))}

                </div>




            </div> :
            
            <div className=''>
            <ReactLoading
            type= "cylon"
            color= "#892929"
            ></ReactLoading>    
            
            </div>
            
            }

        </div>
    )
}

export default ProductListing