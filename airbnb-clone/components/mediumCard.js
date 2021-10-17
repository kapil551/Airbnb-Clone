// MediumCard component

// import the next.js Image tag
import Image from 'next/image';

// _rfce ==> react functional export component

        // using destructing to access props.img, props.title
function MediumCard({ img, title }) {
    return (

         /*
            Styling Using Tailwind CSS:

            Adding a hover effect to every medium card:
                1. I want every medium card to scale up to 105 when i hover over it ==> hover:scale-105
                3. add some smooth transition effect with duration of 300 milli seconds ==> transition transform duration-300 
                4. add some easing transition effect ==> ease-out

        */
        <div className="border-2 border-purple-900 cursor-pointer hover:scale-105 
                transition transform duration-300 ease-out">

            {/* Top portion of a medium card */}
            <div className="relative h-80 w-80">

                <Image src={img} layout="fill" className="rounded-xl"/>

            </div>
           
            {/* bottom portion of a medium card */}
            <h3 className="text-2xl mt-3"> {title} </h3>

        </div>
    )
}

export default MediumCard;
