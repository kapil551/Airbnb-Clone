// Search Page Component
// _rfce ==> react functional export component

// import the Header component
import Header from "../components/Header";

// import the Footer component
import Footer from '../components/footer';

function Search() {
    return (
        <div className="h-screen">

            {/* Header ==> Use the Header component */}
           <Header />

           {/* main section of the search page */}
           <main className="flex">

               <section className="flex-grow pt-14 px-6">

                   <p className="text-xs" > 300+ stays for 5 number of guests </p>

                   <h1 className="text-3xl font-semibold mt-2 mb-6" > Stays in Mars </h1>

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

               </section>

               

           </main>

           {/* Footer */}
           <Footer />

        </div>
    )
}

export default Search;

// now go to http://localhost:3000/search
