import React ,{useState , useEffect} from 'react'
import { getAllProducts } from '../../api/api'
import Header from '../../Components/Header/Header'

function ProductList() {

    const [data, setData] = useState([])

    useEffect(() => {
      getProducts()
    }, [])
    

    async function getProducts(){
        const x = await getAllProducts()
        setData(x.products)
        console.log(x.products)
    }
  return (
    <>
    <Header />
    <div className='flex flex-col items-center'>
        <h1 className='mb-[10px] text-3xl font-bold'>ProductList</h1>

        {
            data ?  data.map(elem => 
            <div className='flex flex-row justify-between w-[500px]'>
                <p className='font-bold'>{elem.title}</p>
                <p>{elem.status}</p>
                {/* <p>{elem.vendor}</p> */}
            </div>) : ''
        }
    </div>
    </>
  )
}

export default ProductList