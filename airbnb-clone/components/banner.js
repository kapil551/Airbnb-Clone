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

            {/* 
                Adding some text over the image:
                    ==> to add some text over the image we need to position it absolutely. 
                        position: absolut; ==> the element comes out of the flow of the document.
            */}
            {/* 
                Tailwind CSS:
                
                class ==> properties
                
                absolute ==> position: absolute;

                top-1\/2 ==> top: 50%;

                w-full ==> width: 100%;

                text-center ==> text-align: center;

            */}
            <div className=" border-2 absolute top-1/2 w-full text-center">
                
                {/* 
                    Adding responsive behaviour to the text of the paragraph:
                        I want to change the font size for different widths of the window. 

                */}
                <p className="text-sm sm:text-lg"> Not sure where to go? Perfect. </p>

                {/* button over the image */}
                {/* Tailwind CSS:
                    
                    class ==> properties
                */}
                {/* 
                    Adding hover effect to the button:
                        
                        hover:shadow-xl ==> when i hover on the button, then change the size of its shadow.
                        active:scale-90 ==> when i click on the button, then scale it to 90%

                        transition duration-150 ==> add transition with duration of 150ms
                */}
                <button className="text-purple-500 bg-white px-10 py-4 rounded-full 
                shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"> 
                    I'm Flexible 
                </button>

            </div>
           



        </div>
    )
}

export default Banner;
