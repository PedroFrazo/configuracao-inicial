import dncLogo from "../../assets/logo-dnc.svg";
import "./index.scss";

const Header = () => {
    // Block
    return <div className="header">
        <img className="header__img" src={dncLogo} alt="dnc logo" />
    </div>
};

export default Header;