// Main component

// import the SmallCar component
import SmallCard from "./smallCard";

// _rfce ==> react functional export component
     
        // using destructing in JavaScript to access the props.fetchedData
function Main({ fetchedData }) {
    return (

        /* Styling using Tailwind CSS */
        /*
            Adding some responsive behaviour to the main component:

                I want to have different values of padding-left and padding-right for different width sizes of the window.

                ==> I want the paddiing-left and padding-right to be 2rem by default ==> px-8
                ==> But when the width >= 640px increase the padding-left and padding-right to 4rem ==> sm:px-16
        */
        <main className="border-2 border-red-900 max-w-7xl mx-auto px-8 sm:px-16">

            {/* upper section of the main component */}
             {/* Styling using Tailwind CSS */}
            <section className="pt-6">
                
               {/* Styling using Tailwind CSS */}
              <h2 className="text-4xl font-semibold pb-5"> Explore Nearby </h2>  

              {/* small cards of the upper section */}
                {/* 
                    Pull some data from a server - API endpoints

                    There are two types of Rendering to pull some data from a server using API enpoints:
                        1. Static Site Rendering 
                        2. Server Side Rendering
                    
                    1. Static Site Rendering:

                        - We use "Static Site Rendering", when the data pulled from the server is not likely to change so much.

                        - In static rendering it prepares the page only once, it caches it on a server and on every request that comes in
                          it just delievers that same copy to the page.

                    2. Server Side Rendering:

                        - We use "Server Side Rendering", when the information pulled from the server is likely to change a bunch of times
                          or update on every refresh of the page.
                        
                        - Every Request that comes in, it will regenerate the page.

                */}

                {/* for the small cards, we are using the "Static Site Rendering" */}

                {/* Access the data fetched from the server */}
                {
                    fetchedData?.map((item) => {

                        // return the SmallCard component for each information item of the fetched data.
                        
                        // console.log(item);
                        /*
                            {
                                img: 'https://links.papareact.com/5j2',
                                location: 'London',
                                distance: '45-minute drive'
                            }
                        */
                        
                        /* Pass on the img, location, and distance of each item to the SmallCard component using props*/
                        return <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
                    })
                }

            </section>

            {/* middle section of the main component */}
            <section>

            </section>

            {/* bottom section of the main component */}
            <section>

            </section>

        </main>
    )
}

export default Main;
