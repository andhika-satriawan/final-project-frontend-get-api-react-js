import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import AboutComponent from "../component/AboutComponent"
import ProductComponent from "../component/ProductComponent"
import HomeComponent from "../component/HomeComponent"

const Home = () => {
    return (
        <>
            <Navbar />

            <HomeComponent />

            <ProductComponent />

            <AboutComponent />

            <Footer />
        </>
    )
}

export default Home