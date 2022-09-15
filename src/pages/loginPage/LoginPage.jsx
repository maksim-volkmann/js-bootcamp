import Footer from "../../components/footer/Footer";
import Auth from "../../components/auth/Auth";
import TopBar from "../../components/topBar/TopBar";
import "./LoginPage";

const LoginPage = () => {
  return (
    <>
      <TopBar
        firstButton={"HOMEPAGE"}
        secondButton={"ABOUT-US"}
        thirdButton={"REGISTER"}
      />
      <Auth
        userName={"User name"}
        password={"Password"}
        email={"Email"}
        buttonText={"LOGIN"}
      />
      <Footer />
    </>
  );
};

export default LoginPage;
