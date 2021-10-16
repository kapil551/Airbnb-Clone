// Banner Component

// import the next.js Image tag
import Image from 'next/image';

// _rfce ==> react functional export component

function Banner() {
    return (

        /*
            Tailwind CSS:

                class ==> properties

                relative ==> position: relative;
            
            Adding Responsive behaviour to the image:

            Step-1: by default i want the height of the image to be 300px ==> h-[300px]

            Step-2: Adding responsive behaviour:
                
                I want the image to have a height of 400px only when the width is >= 640px.
                    sm:h-[400px] ==>
                    @media (min-width: 640px) {
                        .sm\:h-\[400px\] {
                            height: 400px;
                        }
                    }
                
                I want the image to have a height of 500px only when the width is >= 1024px.
                    lg:h-[500px] ==>
                    @media (min-width: 1024px) {
                        .lg\:h-\[500px\] {
                            height: 500px;
                        }
                    }

                I want the image to have a height of 600px only when the width is >= 1280px.
                    xl:h-[600px] ==>
                    @media (min-width: 1280px) {
                        .xl\:h-\[600px\] {
                            height: 600px;
                        }
                    }
                
                I want the image to have a height of 700px only when the width is >= 1536px.
                    2xl:h-[700px] ==>
                    @media (min-width: 1536px) {
                        .\32xl\:h-\[700px\] {
                            height: 700px;
                        }
                    }
        */
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">

            <Image 
                src="https://links.papareact.com/0fm" 
                layout="fill"
                objectFit="cover"
            />

        </div>
    )
}

export default Banner;
