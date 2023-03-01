import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { getCustomerByIdApi } from '../../api/api'
import Header from '../../Components/Header/Header'
import { AlphaCard, Avatar, Text, Badge, Checkbox, TextField, Button, DataTable } from '@shopify/polaris';
import Table from '../../Components/Table';


import {
    ViewMajor,
    CircleCancelMajor
  } from '@shopify/polaris-icons';
function ViewCustomerById() {
    const query = useParams()
    const id = query.id

    const [data, setData] = useState()
    const [checked, setChecked] = useState(false)
    const [points, setPoints] = useState(0)
    const [parsed , setParsed] = useState()

    const handlePointsChange = useCallback((newValue) => setPoints(newValue), [])

    useEffect(() => {
        getCustomerById()
    }, [id])

    // Activity table Props
    const title = 'Activity'
    const columnContentType = ['text', 'numeric', 'numeric']
    const headings = ['Action', 'Points', 'Date']

    async function getCustomerById() {
        const x = await getCustomerByIdApi(id)
        setData(x.customer)
        console.log(x.customer)
        var rows = []
        for(var i=0 ; i<x.customers.length ; i++){
          rows.push([x.customers[i].first_name+" " + x.customers[i].last_name , 0 , 0 ])
        }
        setParsed(rows)
    }

    return (
        <>
            <Header />
            <div className='m-10'>
                {
                    data ?
                        <div className='flex justify-between'>
                            <div className='w-[60vw]'>
                                <div className='flex flex-col gap-y-5'>
                                    <AlphaCard>
                                        <div className='flex flex-col gap-y-5'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center gap-x-5'>
                                                <Avatar />
                                                <Text variant='h1' fontWeight='bold'>
                                                    {data.first_name} {data.last_name}
                                                </Text>
                                            </div>
                                            <div>
                                                <Badge>Member</Badge>
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-row items-center gap-x-3'>
                                                <CircleCancelMajor color='red' style={{width: '15px', height: '15px'}} />
                                                 <p className='text-red-500'>
                                                 Ban from program
                                                </p>
                                            </div >

                                            <div className='flex flex-row items-center gap-x-3'>
                                                <ViewMajor style={{width: '15px', height: '15px'}} />
                                                <p>View in shopify</p>
                                            </div >
                                             
                                        </div>
                                        </div>
                                    </AlphaCard>
                                    <AlphaCard>
                                        <div className='flex flex-col gap-y-5'>
                                            <Text variant='h1' fontWeight='bold' >
                                                Manual Points
                                            </Text>
                                            <p>Manually allot or deduct points</p>
                                            <TextField
                                                type="number"
                                                // label="points"
                                                placeholder='points'
                                                value={points}
                                                onChange={handlePointsChange}
                                            />
                                            <Checkbox
                                                label="Notify Customer"
                                                checked={checked}
                                                onChange={() => setChecked(!checked)}
                                            />
                                            <Button>Update Points</Button>
                                        </div>

                                    </AlphaCard>

                                </div>
                                <div 
                                // className='ml-[-8vw]'
                                >
                                    {/* <Table
                                        data={data}
                                        title={title}
                                        columnContentType={columnContentType}
                                        headings={headings}
                                    /> */}
                                </div>
                            </div>
                            <div className='w-[30vw]'>
                               <div className='flex flex-col gap-y-5'>
                                    <AlphaCard>
                                        <Text variant='h1' fontWeight='bold'>
                                            VIP Tier
                                        </Text>
                                    </AlphaCard>
                                    <AlphaCard>
                                        <Text fontWeight='bold'>
                                            Details
                                        </Text>
                                        <p className='text-blue-500'>Referall Link</p>
                                    </AlphaCard>

                                    <AlphaCard>
                                        <Text fontWeight='bold'>
                                            Points
                                        </Text>
                                        <p className='text-3xl font-thin'>0 points</p>
                                    </AlphaCard>

                                    <AlphaCard>
                                        <Text fontWeight='bold'>
                                            Referalls
                                        </Text>
                                        <div className='flex justify-between'>
                                            <p>Referal Link</p>
                                            <p>SUPER0001199</p>
                                        </div>
                                        <hr className='mt-2 mb-2' />
                                        <div className='flex justify-between'>
                                            <p>Completed</p>
                                            <p>0</p>
                                        </div>
                                    </AlphaCard>
                                </div>

                            </div>
                        </div>

                        : ''
                }
            </div>
        </>
    )
}

export default ViewCustomerById