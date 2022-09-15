import AboutUs from "../../components/aboutUs/AboutUs";
import Footer from "../../components/footer/Footer";
import TopBar from "../../components/topBar/TopBar";
import "./aboutUsPage.css";

const AboutUsPage = () => {
  return (
    <>
      <TopBar
        firstButton={"HOMEPAGE"}
        secondButton={"LOGIN"}
        thirdButton={"REGISTER"}
      />
      <AboutUs
        name="About us"
        longName="description description description description description description description "
      />
      <Footer />
    </>
  );
};

export default AboutUsPage;
