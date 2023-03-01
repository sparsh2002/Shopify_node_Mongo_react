import { AlphaCard , Text } from '@shopify/polaris'
import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getCustomerByIdApi, getOrderByIdApi } from '../../api/api'
import Header from '../../Components/Header/Header'
function ViewOrderById() {

  const query = useParams()
  const id = query.id

  const [data , setData] = useState()

  useEffect(() => {
    getOrderById()
  }, [id])

  async function getOrderById(){
    const x = await getOrderByIdApi(id)
    console.log(x.order)
    setData(x.order)
  }
  

  return (
    <>
    <Header />
    {
      data ? <div className='flex flex-col mt-10 w-[90%] m-auto gap-y-5'>
      <AlphaCard>
        <Text variant='h1' fontWeight='bold'>
          Order : {data.name}
        </Text>
      </AlphaCard>
      <AlphaCard>
      <div className='flex flex-col gap-y-5'>
      <Text variant='h1' fontWeight='bold'>
        Customer Details
      </Text>
      <Text variant='h1'>
        <span className='font-bold'>Customer Name: </span> {data.customer.first_name}  {data.customer.last_name}
        </Text>
        <p><span className='font-bold'>Province: </span><span>{data.customer.default_address.province}</span></p>
      </div>
      </AlphaCard>
      <AlphaCard>
      <div className='flex flex-col gap-y-5'>
        <Text variant='h1' fontWeight='bold'>
          Shipping Details
        </Text> 
        <p><span className='font-bold'>Province</span> {data.customer.default_address.province}</p>
        <p><span className='font-bold'>Country</span> {data.customer.default_address.country}</p>
        </div>
      </AlphaCard>
     
    </div> : ''
    }
    </>
  )
}

export default ViewOrderById