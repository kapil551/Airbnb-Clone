// LargeCard component

// import the next.js Image tag
import Image from 'next/image';

// _rfce ==> react functional export component

        // using destructing to access props.img, props.title, props.description and props.buttonText
function LargeCard({ img, title, description, buttonText }) {
    return (

        <section className="relative py-16">
            
            {/* Image */}
            <div className="relative h-96 min-w-[300px]">

                <Image 
                    src={img} 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl cursor-pointer"
                />

            </div>

            {/* text over the image ==> to have text over the image, we need to absolutly position it 
                with respect to it's relative parent*/}
            <div className="absolute top-32 left-12">
                
                <h3 className="text-4xl mb-3 w-64"> {title} </h3>
                
                <p> {description} </p>
                
                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 cursor-pointer"> {buttonText} </button>

            </div>

        </section>
    )
}

export default LargeCard;
