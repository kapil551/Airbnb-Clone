// MediumCard component

// import the next.js Image tag
import Image from 'next/image';

// _rfce ==> react functional export component

        // using destructing to access props.img, props.title
function MediumCard({ img, title }) {
    return (

        <div className="border-2 border-purple-900">

            {/* Top portion of a medium card */}
            <div className="relative h-80 w-80">

                <Image src={img} layout="fill"/>
                
            </div>
           
            {/* bottom portion of a medium card */}
            <h3> {title} </h3>

        </div>
    )
}

export default MediumCard;
