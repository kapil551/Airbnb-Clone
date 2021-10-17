// SmallCard component 

// import the next.js Image tag
import Image from 'next/image';

// _rfce ==> react functional export component
    
        // using destructing to access props.img, props.location, props.distance
function SmallCard( { img, location, distance }) {
    return (
        <div>
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
                <h3> {distance} </h3>
            </div>

        </div>
    )
}

export default SmallCard;

