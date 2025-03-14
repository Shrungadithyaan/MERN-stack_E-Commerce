import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"ankle length shoes"} heading={"Top's ankle length shoes"}/>
      <HorizontalCardProduct category={"casual shoes"} heading={"Popular's casual shoes"}/>

      <VerticalCardProduct category={"Formal shoes"} heading={"Formal shoes"}/>
      <VerticalCardProduct category={"men's boot"} heading={"men's boot"}/>
      <VerticalCardProduct category={"Running shoes"} heading={"Running shoes"}/>
      <VerticalCardProduct category={"ballet flats"} heading={"ballet flats"}/>
      <VerticalCardProduct category={"boots"} heading={"boots"}/>
      <VerticalCardProduct category={"heels"} heading={"heels"}/>
      {/* <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/> */}
    </div>
  )
}

export default Home

