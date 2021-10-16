// Banner Component

// import the next.js Image tag
import Image from 'next/image';

// _rfce ==> react functional export component

function Banner() {
    return (

        <div>

            <Image 
                src="https://links.papareact.com/0fm" 
                layout="fill"
                objectFit="cover"
            />

        </div>
    )
}

export default Banner;
