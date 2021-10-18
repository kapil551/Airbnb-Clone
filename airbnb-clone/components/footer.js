// Footer Component

// _rfce ==> react functional export component

function Footer() {
    return (

        /* 
            prepare a grid of footer div's using CSS grid property (Very Important) 

                grid ==> display: grid;

                1. mobile view ==> 
                    I want the grid to have only one column for mobile ==> grid-cols-1
                
                2. medium window (width >= 768px ) ==> 
                    I want the grid to have only four columns for small window ==>  md:grid-cols-4

                gap-y-10 ==> row-gap: 2.5rem;
                    row-gap (grid-row-gap):
                        https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
                    grid ki row mein gap kar do 10 ka.
                             
        */
        <div className="border-2 border-gray-800 grid grid-cols-1 md:grid-cols-4 
                gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">

            {/* ABOUT div */}
            {/* 
                Styling Using Tailwind CSS:

                    space-y-4 ==> space all the children elements of this div by 4 in the y-direction.
            */}
            <div className="space-y-4 text-xs text-gray-800">

                <h5 className="font-bold"> ABOUT </h5>
                <p> How Airbnb works </p>
                <p> Newsroom </p>
                <p> Investors </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe </p>

            </div>

            {/* COMMUNITY div */}
            <div className="space-y-4 text-xs text-gray-800">

                <h5 className="font-bold"> COMMUNITY </h5>
                <p> How Airbnb works </p>
                <p> Newsroom </p>
                <p> Investors </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe </p>

            </div>

            {/* HOST div */}
            <div className="space-y-4 text-xs text-gray-800">

                <h5 className="font-bold"> HOST </h5>
                <p> How Airbnb works </p>
                <p> Newsroom </p>
                <p> Investors </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe </p>

            </div>

            {/* SUPPORT div */}
            <div className="space-y-4 text-xs text-gray-800">

                <h5 className="font-bold"> SUPPORT </h5>
                <p> Help Centre </p>
                <p> Trust & Safety </p>
                <p> Investors </p>
                <p> Airbnb Plus </p>
                <p> Airbnb Luxe </p>

            </div>

        </div>
    )
}

export default Footer;
