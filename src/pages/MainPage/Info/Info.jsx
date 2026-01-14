import "./Info.scss";
import infoImg from "../../../assets/img/info.png";

const Info = () => {
  return (
    <section className="info section">
      <div className="info__block">
        <img src={infoImg} alt="k2taxi" />
        <p className="info__desc">
          Кызыл-Кыя шаарынын такси кызматы, баары жөнөкөй :)
        </p>
      </div>
    </section>
  );
};

export default Info;
