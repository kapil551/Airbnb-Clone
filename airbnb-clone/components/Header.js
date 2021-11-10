// Header component

// import the next.js Image tag
import Image from 'next/image';

// import SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon as a react component from heroicons
import { 
        SearchIcon,
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UsersIcon
} from '@heroicons/react/solid';

// import useState
import { useState } from 'react';

// import useRouter
import { useRouter } from 'next/router';

// import for react-date-range
// https://www.npmjs.com/package/react-date-range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

// react functional export component

function Header() {
        
        // useState --> To maintain the state of search input
        /*
                I want the calendar to show when the user starts typing in the search bar or search input tag
                For this, I need to maintain the state of search input using useState.

                initially searchInput is a empty string
        */
       const [searchInput, setSearchInput] = useState("");

       // useState --> to maintain the value of startDate
       const [startDate, setStartDate] = useState(new Date());
       // useState --> to maintain the value of endDate
       const [endDate, setEndDate] = useState(new Date());

       // useState --> to maintain the number of guests
       // minimum number of guests are initially one
       const [noOfGuests, setNoOfGuests] = useState(1);

       // selectionRange object variable for DateRangePicker component
       const selectionRange = {
               
        startDate: startDate,
        endDate: endDate,
        key: 'selection',

      }

      // function to handle the onChange selection/updation of startDate and endDate
      const handleSelect = (ranges) => {

        console.log(ranges);

        // update the value of startDate variable
        setStartDate(ranges.selection.startDate);

        // update the value of endDate variable
        setEndDate(ranges.selection.endDate);
      }

      // function to handle the onClick event on cancel button
      const resetInput = () => {
              // when the user clicks on the cancel button 
              // I want to update/set the value of searchInput variable to an empty string/ initial state so that
              // the calender hides again.
              setSearchInput("");
      }

      // adding redirection functionnality using useRouter hook
      const router = useRouter();
      // now what i want is that when the use clicks on the airbnb logo image then it should redirect to the '/' page.

      // what I want is that when the user clicks on the search button then it should redirect to the '/search' page
      // Also I want the vlaues of variables startDate, endDate and noOfGuests to go to the search page dynamically using query parameters
      const searchRedirect = () => {

        router.push({
                pathname: '/search',
                // passing on the dynamic information in url using query parameters
                query: {
                        location: searchInput,
                        startDate: startDate.toISOString(),
                        endDate: endDate.toISOString(),
                        noOfGuests: noOfGuests
                }
        });
      }

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
                    // now what i want is that when the use clicks on the airbnb logo image then it should redirect to the '/' page.
                    onClick={() => {
                            router.push('/');
                    }}
                />

            </div>

            {/* Middle Section of the Header -> Search Bar */}
            {/* Adding Responsive behavior to the Search Input:
                        I want the search input to have a border only when the width is >= 768px 
                        md:border-2

                        I want the middle section of header to have shadow only when the widrh is >=768px
                        md:shadow-sm
            */}
            <div className="border-white-900 flex items-center md:border-2 rounded-full py-2 md:shadow-sm">

                <input className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" 
                        type="text" 
                        placeholder="Start your search.."
                        // connect the useState searchInput to the value of the input tag
                        value={ searchInput }
                        // add a event called onChange to update/set the value of useState searchInput variable as the 
                        // value of the input tag is changed while typing.
                        onChange={(event) => {
                                // console.log(event.target.value);
                                setSearchInput( event.target.value );
                        }}
                />

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

                 {/* 
                    Adding Responsive behavior to the Search bar:
                        I want to make the searchIcon hidden by default and only show it when the width is >= 768px

                    Step-1: Hide the search bar by default:
                        hidden ==> display: none;

                    Step-2: Add a Breakpoint:
                        md:inline-flex ==>
                            @media (min-width: 768px) {
                                .md\:inline-flex {
                                    display: inline-flex;
                                }
                            }
                    
                    
                    md:mx-2 ==>
                        @media (min-width: 768px) {
                            .md\:mx-2 {
                                margin-left: 0.5rem;
                                margin-right: 0.5rem;
                            }
                        }

                */}
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>


            </div>

            {/* Right section of the Header */}
            {/* 
                Tailwind CSS:

                class ==> properties

                flex ==>  display: flex;

                space-x-4 ==> x diection mein sare chidlrens ke beech mein 4 ka space de do.

                items-center ==> align-items: center;

                justify-end ==> justify-content: flex-end;

                text-gray-500 ==> 
                {
                        --tw-text-opacity: 1;
                        color: rgba(107, 114, 128, var(--tw-text-opacity));
                }

            */}
            <div className="flex items-center justify-end space-x-4 text-gray-500">

                    {/* 
                        Adding Responsive behavior to the paragraph:
                                I want to make the paragraph hidden by default and only show it when the width is >= 768px

                        Step-1: Hide the paragraph by default:
                                hidden ==> display: none;

                        Step-2: Add a Breakpoint:
                                md:inline ==>
                                @media (min-width: 768px) {
                                        .md\:inline {
                                        display: inline;
                                        }
                                }
                        
                    */}
                    <p className="hidden md:inline cursor-pointer" >Become a host</p>

                    {/* Use the GlobalAltIcon from heroicons */}
                    {/* 
                        Tailwind CSS:

                        class ==> properties

                        h-6 ==> height: 1.5rem;

                    */}
                    <GlobeAltIcon className="h-6" />

                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full">

                        <MenuIcon className="h-6" />
                        <UserCircleIcon className="h-6"/> 

                    </div>
            </div>

            {/* Adding the calendar on to the Header component */}
            {/*
                I want to show the calendar on to the Header component only when the user starts typing in the
                search input bar
                i.e. only show the calendar when the searchInput useState variable has a non-empty string value.

                react-date-range:
                        https://www.npmjs.com/package/react-date-range
            */}
            { searchInput !== "" && (

                      // Styling using tailwind css:     
                    <div className="flex flex-col col-span-3 mx-auto" >
                            {/* render the DateRangePicker component */}
                            <DateRangePicker
                                ranges={[selectionRange]} 
                                minDate={new Date()}
                                rangeColors={["#FD5B61"]}
                                onChange={handleSelect}
                            />

                            <div className="flex items-center border-b mb-4">
                                    <h2 className="text-2xl flex-grow font-semibold"> Number of Guests </h2>
                                    <UsersIcon className="h-5" />
                                    <input
                                        type="number" 
                                        className="w-12 pl-2 outline-none text-red-400"
                                        // connect the useState noOfGuests to the value of the input tag
                                        value={ noOfGuests }
                                        min={1}
                                        // add a event called onChange to update/set the value of useState noOfGuests variable as the 
                                        // value of the input tag is changed while typing.
                                        onChange={(event) => {
                                                // console.log(event.target.value);
                                                setNoOfGuests( event.target.value );
                                        }}

                                    />
                            </div>

                            {/* adding the cancel and search buttons */}
                            <div className="border-2 border-red-900 flex">
                                    <button className="flex-grow text-gray-500" onClick={resetInput}> Cancel </button>
                                    <button 
                                        className="flex-grow text-red-400"
                                        // what I want is that when the user clicks on the search button then it should redirect to the '/search' page
                                        // Also I want the vlaues of variables startDate, endDate and noOfGuests to go to the search page dynamically using query parameters
                                        onClick={searchRedirect}
                                     > Search </button>
                            </div>
                    </div>
            )}

        </header>
    )
}

export default Header;

