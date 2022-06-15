import CreditCardBackground from "icons/CreditCardBackground";
import Visa from "icons/Visa";
import s from "./CardPreview.module.scss";

interface ICardPreview {
  isValid: boolean;
  cardNumber: string;
  name: string;
  expirationDate: string;
}

function CardPreview({
  isValid,
  cardNumber,
  name,
  expirationDate,
}: ICardPreview): JSX.Element {
  const backgroundClass = isValid ? s.validCard : s.invalidCard;
  const spacedCardNumber =
    cardNumber?.match(/.{1,4}/g)?.join(" ") || "**** **** **** ****";
  return (
    <div className={`${s.container} ${backgroundClass}`}>
      <div className={s.linesBackground}>
        <CreditCardBackground />
      </div>
      <div className={s.creditFlag}>
        <Visa />
      </div>

      <section className={s.footerSection}>
        <p className={s.cardNumber}>{spacedCardNumber}</p>
        <p className={s.name}>{name}</p>
        <p className={s.expirationDate}>{expirationDate}</p>
      </section>
    </div>
  );
}

export default CardPreview;
