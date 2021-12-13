import Head from 'next/head'

// import the Header component
import Header from '../components/Header';

// import the Banner compoent
import Banner from '../components/banner';

// import the Main component
import Main from '../components/main';

// import the Footer component
import Footer from '../components/footer';

            // using destructing in JavaScript to access the props.dataFetchedFromServer 
            // and props.fetchDataFromServerForMediumCardComponent
export default function Home({ dataFetchedFromServer, fetchDataFromServerForMediumCardComponent }) {
  return (
    <div className="">

      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/airbnb.ico" />
      </Head>
      
      {/* App Structure */}

      {/* Header ==> Use the Header component */}
      <Header />
      
      {/* Banner */}
      < Banner />
      
      {/* Main */}
        
      {/* pass on the dataFetchedFromServer containing the data fetched from the server to the Main component*/}
      {/* pass on the fetchDataFromServerForMediumCardComponent containing the data fetched from the server to the Main component*/}
      <Main fetchedData={dataFetchedFromServer} fetchedDataForMediumCard={fetchDataFromServerForMediumCardComponent} />

      {/* Footer */}
      <Footer />

    </div>
  )
}


// adding/including the Static Site Rendering to the NextJS app
export async function getStaticProps() {

  //Step-1 pretech the data from the server

  // async fetch call to the API-endpoint
  const dataFetchedFromServer = await fetch('https://links.papareact.com/pyp')
    .then(
      (response) => { 
        // pull the json information from the response.
        return response.json();
    })
    .catch((error) => {
      return null;
    })
  
  // console.log(dataFetchedFromServer);

  // async fetch call to another API-endpoint
  const fetchDataFromServerForMediumCardComponent = await fetch("https://links.papareact.com/zp1")
    .then(
      (response) => {
        // pull the json inoformation from the response
        return response.json();
      }
    )
    .catch(
      (error) => {
        return null;
      }
    )

  // console.log(fetchDataFromServerForMediumCardComponent);

  // Step-2: pass on this fetched data to the NextJS App component
  return {
    props: {
      dataFetchedFromServer,
      fetchDataFromServerForMediumCardComponent
    },
  };

  // now data fetched from the server can be accessed in the application using props (props.dataFetchedFromServer)
}
