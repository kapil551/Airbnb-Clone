// Main component

// _rfce ==> react functional export component

function Main() {
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
