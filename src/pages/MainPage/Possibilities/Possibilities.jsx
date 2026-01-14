import "./Possibilities.scss";
import PossibilitiesItem from "./PossibilitiesItem";
import phoneIcon from "../../../assets/img/phone-slash.svg";
import creditCardIcon from "../../../assets/img/credit-card.svg";
import userCheckIcon from "../../../assets/img/user-check.svg";
import mobileAltIcon from "../../../assets/img/mobile-alt.svg";
import mapMarkedIcon from "../../../assets/img/map-marked.svg";
const Possibilities = () => {
  const POSSIBILITIESDATA = [
    {
      text: "Диспетчерге чалбастан таксини ыңгайлуу чакыруусуДиспетчерге чалбастан таксини ыңгайлуу чакыруусу",
      img: phoneIcon,
    },
    {
      text: "Hакталай же карта менен төлөм",
      img: creditCardIcon,
    },
    {
      text: "Жүргүнчүнүн каалоосун (балдардын олпок отургучу, дүмүрчөктү берүү жана б.у.с.) эске алуу менен тез издөө",
      img: userCheckIcon,
    },
    {
      text: "Колдонмо айдоочу жана анын унаасы тууралуу толук маалыматты берет",
      img: mobileAltIcon,
    },
    {
      text: "Айдоочунун жүргөнү картадан көрсөтүлөт",
      img: mapMarkedIcon,
    },
  ];
  const gridTemplateRows = `repeat(${POSSIBILITIESDATA.length}, 1fr)`;
  return (
    <section className="possibilities section" id="about">
      <div className="container">
        <h2 className="possibilities__title section__title">
          НЕГИЗГИ МҮМКҮНЧҮЛҮКТӨР
        </h2>
        <ul className="possibilities__items" style={{ gridTemplateRows }}>
          {POSSIBILITIESDATA.map((item, idx) => (
            <PossibilitiesItem
              key={idx}
              text={item.text}
              img={item.img}
              isReversed={++idx % 2 === 0 ?? true}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Possibilities;
