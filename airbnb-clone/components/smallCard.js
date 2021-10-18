// SmallCard component 

// import the next.js Image tag
import Image from 'next/image';

// _rfce ==> react functional export component
    
        // using destructing to access props.img, props.location, props.distance
function SmallCard( { img, location, distance }) {
    return (

        /*
            Styling Using Tailwind CSS:

            space-x-4 ==> iss parent div ke all the children elements mein x-direction ki taraf 4 ki margin/space de do 
                          to the right side.
            
            Adding a hover effect to every small card:
                1. I want every small card to have a gray backgound when i hover over it ==> hover:bg-gray-100
                2. and also i want every small card to scale up to 105 when i hove over it ==> hover:scale-105
                3. add some smooth transition effect with duration of 200 milli seconds ==> transition transform duration-200 
                4. add some easing transition effect ==> ease-out

        */
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer 
                hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">

            {/* <h2> {img} </h2>
            <h2> {location} </h2>
            <h2> {distance} </h2> */}

            {/* left side of a small card*/}
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className="rounded-lg"/>
            </div>

            {/* right side of a small card*/}
            <div>
                <h2> {location} </h2>
                <h3 className="text-gray-500"> {distance} </h3>
            </div>

        </div>
    )
}

export default SmallCard;

