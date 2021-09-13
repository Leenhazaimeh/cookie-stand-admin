import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header >
      
      </Header>
      <Main className={styles.main}>
      <h1 className={styles.title}>
        {/* Cookie Stand Admin <a href="https://nextjs.org"></a> */}
        </h1>
        <p className={styles.description}>
          {/* Get started by editing{' '} */}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
      </Main>
     
      
      <Footer></Footer>
    </div>
  )
}