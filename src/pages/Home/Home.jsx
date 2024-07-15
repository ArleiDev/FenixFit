import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Planos from '../../components/Planos/Planos'
import Contato from '../../components/Contato/Contato'
import Feedback from '../../components/Feedback/Feedback'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <Planos></Planos>
          <Feedback></Feedback>
          <Contato></Contato>
          <Footer></Footer>
  
    </div>
  )
}

export default Home