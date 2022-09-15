import Footer from "../../components/footer/Footer";
import Auth from "../../components/auth/Auth";
import TopBar from "../../components/topBar/TopBar";
import "./RegisterPage";

const RegisterPage = () => {
  return (
    <>
      <TopBar
        firstButton={"HOMEPAGE"}
        secondButton={"ABOUT-US"}
        thirdButton={"LOGIN"}
      />
      <Auth
        userName={"New User Name"}
        password={"New Password"}
        email={"New Email"}
        buttonText={"REGISTER"}
        isRegister={true}
      />
      <Footer />
    </>
  );
};

export default RegisterPage;
