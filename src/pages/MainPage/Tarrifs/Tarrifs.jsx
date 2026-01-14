import TarrifsComponent from "./TarrifsComponent";

import "./Tarrifs.scss";

import standartImg from "../../../assets/img/standart.jpg";
import comfortImg from "../../../assets/img/comfort.jpg";
import minivanImg from "../../../assets/img/minivan.jpg";
import porterImg from "../../../assets/img/porter.jpg";

const TARRIFSDATA = [
  {
    img: standartImg,
    name: "Стандарт",
    seatPrice: 35,
    kilometerPrice: 10,
    freeWaitingTime: 5,
    waitingPrice: 3,
  },
  {
    img: comfortImg,
    name: "Комфорт",
    seatPrice: 55,
    kilometerPrice: 10,
    freeWaitingTime: 5,
    waitingPrice: 3,
  },
  {
    img: minivanImg,
    name: "Минивэн",
    seatPrice: 75,
    kilometerPrice: 10,
    freeWaitingTime: 5,
    waitingPrice: 3,
  },
  {
    img: porterImg,
    name: "Портер",
    seatPrice: 260,
    kilometerPrice: 10,
  },
];

const Tarrifs = () => {
  return (
    <section className="tarrifs section primary-bg" id="tariffs">
      <div className="container">
        <h2 className="tarrifs__title section__title">ТАРИФТЕР</h2>
        <p className="tarrifs__desc">Биз төмөнкү тарифтерди сунуштайбыз</p>
        <ul className="tarrifs__list">
          {TARRIFSDATA.map((tariff, index) => (
            <TarrifsComponent
              key={index}
              img={tariff.img}
              name={tariff.name}
              seatPrice={tariff.seatPrice}
              kilometerPrice={tariff.kilometerPrice}
              freeWaitingTime={tariff.freeWaitingTime}
              waitingPrice={tariff.waitingPrice}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tarrifs;
