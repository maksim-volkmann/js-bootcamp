import { Link } from "react-router-dom";
import "./topBar.css";

const TopBar = ({ firstButton, secondButton, thirdButton }) => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <Link className="link" to={`/${firstButton.toLowerCase()}`}>
          <span>{firstButton}</span>
        </Link>
        <Link className="link" to={`/${secondButton.toLowerCase()}`}>
          <span>{secondButton}</span>
        </Link>
        <Link className="link" to={`/${thirdButton.toLowerCase()}`}>
          <span>{thirdButton}</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
