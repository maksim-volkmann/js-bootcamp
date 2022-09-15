import Footer from "../../components/footer/Footer";
import MainBody from "../../components/mainBody/MainBody";
import TopBar from "../../components/topBar/TopBar";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <TopBar
        firstButton={"ABOUT-US"}
        secondButton={"LOGIN"}
        thirdButton={"REGISTER"}
      />
      <MainBody />
      <Footer />
    </>
  );
};

export default HomePage;
