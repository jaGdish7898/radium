import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import {Fragment} from "react";
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return (
<div>
  <Head>
    <link rel="icon" href='/svgs/sahajayoga-icon.svg' />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Join FREE Sahaja Yoga Meditation and awaken your kundalini by self-realization. It is beneficial for physical, mental, emotional, health and spiritual health" />
    <title>FunctionUp - Worlds&apos;s #1 Placement Bootcamp</title>
  </Head>
  <RecoilRoot>
      <Component {...pageProps} />
      <ToastContainer
        autoClose = {2000}
      />
  </RecoilRoot>
  
</div>
  
  )


}

export default MyApp
