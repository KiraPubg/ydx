import "./Possibilities.scss";

const Possibilities = ({ text, img, isReversed }) => {
  return (
    <li className={`possibilities__item ${isReversed ? "reversed" : ""}`}>
      <p className="possibilities__item-text">{text}</p>
      <div className="possibilities__item-icon">
        <img src={img} alt="icon" />
      </div>
    </li>
  );
};

export default Possibilities;
