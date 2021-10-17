// Main component

// import the SmallCar component
import SmallCard from "./smallCard";

// import the MediumCard component
import MediumCard from "./mediumCard";

// import the LargeCard component
import LargeCard from "./largeCard";

// _rfce ==> react functional export component
     
        // using destructing in JavaScript to access the props.fetchedData and props.fetchedDataForMediumCard
function Main({ fetchedData, fetchedDataForMediumCard }) {
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

                {/* 
                    prepare a grid of small card components using CSS grid property (Very Important) 

                        grid ==> display: grid;

                        1. mobile view ==> 
                            I want the grid to have only one column for mobile ==> grid-cols-1
                        
                        2. small window (width >= 640px ) ==> 
                            I want the grid to have only two columns for small window ==> grid-cols-2

                        3. large window (width >= 1024px ) ==>
                            I want the grid to have only three columns for large window ==> grid-cols-3

                        4. extra large window (width >= 1280px) ==>
                            I want the grid to have only four columns for extra large window ==> grid-cols-4
                        

                */}
                <div className="border-2 border-green-900 grid grid-cols-1 sm:grid-cols-2 
                        lg:grid-cols-3 xl:grid-cols-4">

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

                </div>

            </section>

            {/* middle section of the main component */}
            <section>

                {/* Styling Using Tailwind CSS */}
                <h2 className="text-4xl font-semibold py-8"> Live Anywhere </h2>

                {/* Acess the fetchedDataForMediumCard */}
                {/* 
                    added a scrollable cursor styling to the middle section of the main component:

                        1. flex ==> display: flex;
                        2. space out each medium card in the x direction.
                        3. handle the overflow by adding a scroll ==> overflow-scroll

                        4. Now I want to hide the overflow scroll bar:
                                Google Search: tailwind scrollbar hide
                                 https://www.npmjs.com/package/tailwind-scrollbar-hide
                                 npm install tailwind-scrollbar-hide
            



                */}
                <div className="border-2 border-pink-700 flex space-x-3 overflow-scroll 
                        scrollbar-hide p-3 -ml-3">
                {
                    fetchedDataForMediumCard?.map((item) => {

                        return <MediumCard key={item.img} img={item.img} title={item.title} />
                    })
                }
                </div>

            </section>

            {/* bottom section of the main component */}
            <section>
                
                <LargeCard />

            </section>

        </main>
    )
}

export default Main;
