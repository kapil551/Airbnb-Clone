// Search Page Component
// _rfce ==> react functional export component

// import the Header component
import Header from "../components/Header";

// import the Footer component
import Footer from '../components/footer';

// import useRouter
import { useRouter } from "next/router";

// import format
import { format } from "date-fns";
// import InfoCard component
import InfoCard from "../components/infoCard";

    // accessing server side props using destructuring
function Search({ searchResultsResponseJSON }) {

    console.log(searchResultsResponseJSON);

    const router = useRouter();

    // Now I want to access the query parameters passed on in the url
    // console.log(router.query);

    // do destructuring to get values of query parameters from router object
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    console.log(formattedStartDate);

    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    console.log(formattedEndDate);

    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className="h-screen">

            {/* Header ==> Use the Header component */}
            {/* pass the dynamic information to the header component using props */}
           <Header dynamicPlaceholder={`${location} | ${range} | ${noOfGuests} guests`} />

           {/* main section of the search page */}
           <main className="flex">

               <section className="flex-grow pt-14 px-6">

                   <p className="text-xs" > 300+ Stays - {range} - for {noOfGuests} guests </p>

                   <h1 className="text-3xl font-semibold mt-2 mb-6" > Stays in {location} </h1>

                   {/* Filter buttons */}
                   {/*
                        Adding responsive behavoiur to the filter buttons:

                        I want the filter button to be hidden by default on mobile screen

                        Adding breakpoints:
                        I want the filter button to display as inline-block for a width >= 1024px
                        @media (min-width: 1024px) {
                            .lg\:inline-flex {
                                display: inline-flex;
                        }

                        Adding Hover effects:
                            hover:shadow-lg 

                        Adding active effects:
                            active:scale-95
                            active:bg-gray-200

                        Adding transition effects:
                            transition transform duration-100 ease-out


                    */}
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">

                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-200 
                            transition transform duration-100 ease-out" > 
                            Cancellation Facility 
                        </p>

                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-200 
                            transition transform duration-100 ease-out" > 
                            Type of Place
                        </p>

                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-200 
                            transition transform duration-100 ease-out" > 
                            Price
                        </p>

                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-200 
                            transition transform duration-100 ease-out" > 
                           Rooms and Beds
                        </p>

                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-200 
                            transition transform duration-100 ease-out" > 
                            More Filters
                        </p>

                    </div>

                    {/* show the search results */}
                    <div className="border-2 border-black flex flex-col">
                        {
                            searchResultsResponseJSON.map(({ img, location, title, description, star, price, total }) => {

                                return (
                                    <InfoCard
                                    key={img} // unique identifier key
                                    img={img}
                                    location={location}
                                    title={title} 
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total}

                                    />
                                )
                            })
                        }
                    </div>

               </section>

               

           </main>

           {/* Footer */}
           <Footer />

        </div>
    )
}

export default Search;

// now go to http://localhost:3000/search

// Server Side Rendering in next.js
export async function getServerSideProps() {

    const searchResultsResponseJSON = await fetch("https://links.papareact.com/isz").then((response) => {
        return response.json();
    }).catch((err) => {
        console.log(err);
    });

    // console.log(searchResultsResponseJSON);

    return {
        props: {
            searchResultsResponseJSON
        }
    }



}
