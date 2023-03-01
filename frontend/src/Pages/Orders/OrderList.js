import React ,{useState , useEffect} from 'react'
import { getAllOrdersApi } from '../../api/api'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Table'
import { Link } from 'react-router-dom'

function OrderList() {
    const [data , setData] = useState()
    const [parsed , setParsed] = useState([])

    useEffect(() => {
      getAllOrders()
    }, [])
    

    async function getAllOrders(){
        const x = await getAllOrdersApi()
        setData(x.orders)
        var rows = []
        for(var i=0 ; i<x.orders.length ; i++){
          rows.push([x.orders[i].name, x.orders[i].total_tax , x.orders[i].total_price , <Link to={`/orders/view/${x.orders[i].id}`}>View</Link>])
        }
        setParsed(rows)
    }

    const title = "Orders" 
   const columnContentType = ['text' , 'numeric' , 'numeric' , 'undefined']
   const headings = ['Name' , 'Tax' , 'Price'  , 'Actions']
  return (
    <>
    <Header />
    <div className='mt-10' >
        <Table 
        data = {parsed}
        title={title} 
        columnContentType={columnContentType} 
        headings={headings}
        />
    </div>
    </>
  )
}

export default OrderList