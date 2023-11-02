import "./index.scss";
import logo from "../../assets/logo-dnc.svg";
import cartlogo from "../../assets/cartshop.svg"

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <img src={logo} alt="logo" className="header-menu__logo" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h1>Meu Carrinho</h1>
        <img src={cartlogo} alt="cartlogo" />
      </div>
    </header>
  );
};

export default HeaderMenu