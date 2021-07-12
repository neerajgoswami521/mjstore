import './App.css';
import Navbar from './Component/Navbar';
import PreNavbar from './Component/PreNavbar';
import Slider from './Component/Slider.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Offers from './Component/Offers.js'
import Heading from './Component/Heading.js'
import StarProduct from './Component/StarProduct.js'
import HotAccessoriesMenu from './Component/HotAccessoriesMenu.js'
import HotAccessories from './Component/HotAccessories.js'
import ProductReviews from './Component/ProductReviews.js'
import Videos from './Component/Videos.js'
import Banner from './Component/Banner.js'
import Footer from './Component/Footer.js'
import NavOptions from './Component/NavOptions.js'
import data from './data/Data.json'

function App() {
  return (
    <Router className="App">
      <PreNavbar />
      <Navbar />

      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhonnes} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />

      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Route exact path="/">
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route>

      <Route exact path="/music">
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route>

      <Route exact path="/smartDevice" >
        <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />
      </Route>

      <Route exact path="/home" >
        <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />
      </Route>

      <Route exact path="/lifestyle" >
        <HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />
      </Route>

      <Route exact path="/mobileAccessories" >
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
      </Route>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />


    </Router>
  );
}

export default App;
