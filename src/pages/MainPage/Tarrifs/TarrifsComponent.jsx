const TarrifsComponent = ({
  img,
  name,
  seatPrice,
  kilometerPrice,
  freeWaitingTime,
  waitingPrice,
}) => {
  return (
    <li className="tarrifs__list-item">
      <div className="tarrifs__list-item-header">
        <img src={img} alt="tarrif img" />
        <h3 className="tarrifs__list-title">{name}</h3>
      </div>
      <p className="tarrifs__list-price">
        Отуруу <span>{seatPrice} сом</span>
      </p>
      <p className="tarrifs__list-price">
        Километри <span>{kilometerPrice} сом</span>
      </p>
      {freeWaitingTime && (
        <p className="tarrifs__list-time">
          Акысыз күтүү <span>{freeWaitingTime} мин</span>
        </p>
      )}
      {waitingPrice && (
        <p className="tarrifs__list-time">
          Күтүү <span>{waitingPrice} сом/мин</span>
        </p>
      )}
    </li>
  );
};

export default TarrifsComponent;
