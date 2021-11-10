// Search Page Component
// _rfce ==> react functional export component

// import the Header component
import Header from "../components/Header";

// import the Footer component
import Footer from '../components/footer';

function Search() {
    return (
        <div className="h-screen">

            {/* Header ==> Use the Header component */}
           <Header />

           {/* Footer */}
           <Footer />

        </div>
    )
}

export default Search;

// now go to http://localhost:3000/search
