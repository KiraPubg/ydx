import "./Header.scss";
import barsImg from "../../../assets/img/bars.svg";

const HeaderBurger = ({ headerNavOpen, setHeaderNavOpen }) => {
  const handleClick = () => {
    setTimeout(() => {
      setHeaderNavOpen(!headerNavOpen);
    }, 100);
  };
  return (
    <button className="header__burger" type="button" onClick={handleClick}>
      Menu
      <img src={barsImg} alt="Bars" />
    </button>
  );
};
export default HeaderBurger;
