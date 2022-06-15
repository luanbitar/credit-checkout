import CardPreview from "../CardPreview/CardPreview";
import s from "./CardSection.module.scss";

function CardSection(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.cardPreviewBackground} />
      <CardPreview
        isValid={true}
        cardNumber="1234567812345678"
        name="FELIPE B A PIO NT"
        expirationDate="06/26"
      />
    </div>
  );
}

export default CardSection;
