import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';

import { useRecoilState } from "recoil";
import { itemState } from "../atoms/itemAtom";

    // accessing props using destructuring
function InfoCard({ img, location, title, description, star, price, total }) {

    const router = useRouter();

    // Recoil Atoms
    // https://recoiljs.org/docs/introduction/getting-started#atom
    // https://recoiljs.org/docs/basic-tutorial/atoms
    // useRecoilState() --> to update the contents of the "itemState" atom
    const [item, setItem] = useRecoilState(itemState);
    // Now this "item" is stored in a global storage atom named "itemState"
    // Also now i can access the contents of this global storage atom inside any other component

    const handleClick = (e) => {

        const itemArray = [];
        itemArray.push(img);
        itemArray.push(location);
        itemArray.push(title);
        itemArray.push(description);
        itemArray.push(price);
        itemArray.push(total);
        
        setItem(
           [...itemArray]
        )
        
        e.preventDefault()
        router.push('/checkout');
    }

    return (

        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
                        transition duration-200 ease-out first:border-t group"
             
             onClick={handleClick}

        >

            {/* Image div */}
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl group-hover:scale-125 transition duration-200 ease-out"
                />
            </div>

            {/* content div */}
            <div className="flex flex-col flex-grow pl-5">

                <div className="flex justify-between">
                    <p> {location} </p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </div>

                <h4 className="text-xl"> {title} </h4>

                <div className="border-b w-10 pt-2"></div>

                <p className="pt-2 text-sm text-gray-500 flex-grow"> {description} </p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400"/>
                        { star }
                    </p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2"> {price} </p>
                        <p className="text-right font-extralight"> {total} </p>
                    </div>
                </div>

            </div>
 
        </div>
    )
}

export default InfoCard;
