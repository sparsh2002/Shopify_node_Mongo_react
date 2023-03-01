import React from 'react'
import { Button } from '@shopify/polaris'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import {MediaCard, VideoThumbnail} from '@shopify/polaris';

function Home() {
  return (
    <>
    <Header />
    <div className='flex flex-col gap-y-10 mt-10 mr-10 ml-10'>
    <MediaCard
      title="Shop the Best Items Ever"
      primaryAction={{
        content: 'Learn more',
        onAction: () => {},
      }}
      description={`Have a Nice Day!`}
      popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
      <VideoThumbnail
        videoLength={80}
        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
      />
    </MediaCard>
    <div className='flex justify-center gap-x-5'>
        <Button><Link to='/customers/list'>Customers</Link></Button>
        <Button><Link to='/products/list'>Products</Link></Button>
        <Button><Link to='/orders/list'>Orders</Link></Button>
    </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default Home