import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import Navbar from '../components/Navbar'
import "../styles/productlisting.css"
import ReactLoading from 'react-loading'
import summerbg from "../assets/summer-bg.jpg"



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
                        <h2 className='f-h2-400 pb-5 product-hero-title'>Summer Sale</h2>
                        <div className='flex flex-wrap justify-around '>
                        </div>                        
                    </div>

                </div>

                <div className='lg:flex gap-8'>



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