import React from 'react'
import Header from '../layout/Header'
import HeroSection from '../components/HeroSection'
import ProductCart from '../components/ProductCart'
import Brand from '../components/Brand'
import ProductGrid from '../components/ProductGrid'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Brand/>
        <ProductGrid/>
    </div>
  )
}

export default Home
