import Head from 'next/head'

// import the Header component
import Header from '../components/Header';

// import the Banner compoent
import Banner from '../components/banner';

export default function Home() {
  return (
    <div className="">

      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* App Structure */}

      {/* Header ==> Use the Header component */}
      <Header />
      
      {/* Banner */}
      < Banner />
      {/* */}

    </div>
  )
}
