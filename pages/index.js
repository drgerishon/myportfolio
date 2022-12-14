import Head from 'next/head'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Homepage from '../components/Homepage'
import Me from '../components/Me'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Gersihon Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Homepage />
        <Portfolio/>
        <Experience/>
        <Me />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
