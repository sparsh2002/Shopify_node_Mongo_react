import React,{useState , useEffect} from 'react'
import { getAllCustomers } from '../../api/api'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Table'
import { Link } from 'react-router-dom'
function CustomerList() {

    const [data , setData] = useState()
    var [parsed , setParsed] = useState([])

    useEffect(() => {
      getCustomers()
    }, [])

    async function getCustomers(){
        const x = await getAllCustomers()
        setData(x.customers)
        var rows = []
        for(var i=0 ; i<x.customers.length ; i++){
          rows.push([x.customers[i].first_name+" " + x.customers[i].last_name , 0 , 0 , <Link to={`/customers/view/${x.customers[i].id}`}>View</Link>])
        }
        setParsed(rows)
    }

    

   const title = "Customer List" 
   const columnContentType = ['text' , 'numeric' , 'numeric' , 'numeric' , 'undefined']
   const headings = ['Name' , 'GiftCard' , 'Points' , 'Referals' , 'Actions']

   
  return (
    <>
    <Header />
    <div 
    // className='flex flex-col items-center content-start'
    >
       {data && parsed.length>0 ? 
       <Table 
       data={parsed} 
       title={title} 
       columnContentType={columnContentType} 
       headings={headings} /> : ''}
    </div>
    </>
  )
}

export default CustomerList