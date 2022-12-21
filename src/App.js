import logo from "./logo.svg";
import "./App.css";
import "./Assets/css/css.sass";
import "./Assets/css/style.css";
import "./Assets/css/responsive.css";
import NavBar from "./Components/NavBar";
// import Banner from "./Components/Banner";
import BannerSlider from "./Components/BannerSlider";
import ProductCard from "./Components/ProductCard";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      {/* <Banner /> */}
      <BannerSlider />
      <ProductCard />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
