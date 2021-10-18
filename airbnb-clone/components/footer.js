// Footer Component

// _rfce ==> react functional export component

function Footer() {
    return (

        <div className="border-2 border-gray-800">

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
