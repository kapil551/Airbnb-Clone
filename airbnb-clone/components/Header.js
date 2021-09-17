// Header component

// import the next.js Image tag
import Image from 'next/image';

// import SearchIcon as a react component from heroicons
import { SearchIcon } from '@heroicons/react/solid';

// react functional export component

function Header() {
    return (

            /*
                Tailwind CSS:

                class ==> Properties

                sticky ==> 
                        position: sticky; 
                [stick to the top of the page]
                
                top-0 ==> 
                        top: 0px;
                
                z-50 ==> 
                        z-index: 50; 
                [z-index tells which element should come in front ==> the element having the higher z-index will come in front]
                
                grid ==> 
                        display: grid; 
                [I want my header to be a container with display grid]
                
                grid-cols-3 ==> 
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                [I want the header to be a grid, containing 3-columns]

                bg-white ==> 
                        --tw-bg-opacity: 1;
                        background-color: rgba(255, 255, 255, var(--tw-bg-opacity));

                shadow-md ==> 
                        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                [This is will give a nice shadow underneath the header element]
                
                py-5 ==>
                        padding-top: 1.25rem;
                        padding-bottom: 1.25rem;
                
                px-5 ==> 
                        padding-left: 1.25rem;
                        padding-right: 1.25rem;
                
                md:px-10 ==> [Adding media queries]
                        @media (min-width: 768px) {
                            .md\:px-10 {
                                padding-left: 2.5rem;
                                padding-right: 2.5rem;
                            }
                        }
                [only apply px-10 when the width is >= 768px]
                [media queries for adding responsive designs are known as "Breakpoints" in tailwind CSS]
                
            */
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5
                           md:px-10">
            
            {/* Left Section of the Header -> Airbnb Logo */}
            
                {/* Tailwind CSS:

                    class ==> Properties
                    
                    relative ==> 
                            postion: relative;
                    
                    h-10 ==> 
                            height: 2.5rem;
                    
                    flex ==> 
                            display: flex;
                    
                    items-center ==> 
                            align-items: center;
                    
                    cursor-pointer ==> 
                            cursor: pointer;
                    
                    my-auto ==> 
                            margin-top: auto; 
                            margin-bottom: auto;

                */}
            <div className="relative h-10 flex items-center cursor-pointer my-auto">
                
                {/* Image
                        <Image / > ==> this is the next.js image tag
                        It optimises the image, and is way better than the html img tag(<img src="" alt="" />).
                */}
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />

            </div>

            {/* Middle Section of the Header -> Search Bar */}
            <div className="border-red-900 flex items-center border-2 rounded-full py-2">

                <input type="text" placeholder="Start your search.."/>

                {/* use the SearchIcon from heroicons */}
                {/* 
                    Tailwind CSS:

                    class ==> Properties

                    h-8 ==> height: 2rem;

                    bg-red-400 ==> 
                    --tw-bg-opacity: 1;
                    background-color: rgba(248, 113, 113, var(--tw-bg-opacity));

                    text-white ==> 
                    --tw-text-opacity: 1;
                    color: rgba(255, 255, 255, var(--tw-text-opacity));

                    rounded-full ==> 
                    border-radius: 9999px;

                    p-2 ==>
                    padding: 0.5rem;

                    cursor-pointer ==>
                    cursor: pointer;
                
                */}
               
                <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>


            </div>

            {/* Right section of the Header */}
            <div>

            </div>

        </header>
    )
}

export default Header;

