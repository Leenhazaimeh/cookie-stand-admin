import Head from 'next/head'
import Header from '../components/Header'
import React, { useState } from 'react'
import Main from'../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>


      
      
      <Header title={'Cookie Stand Admin'}>
        {/* <h1> Cookie Stand Admin </h1> */}
      </Header>
      {/* overviw */}
      <Main/>
      {/* <Footer/> */}
      

      
    </div>
  )
}