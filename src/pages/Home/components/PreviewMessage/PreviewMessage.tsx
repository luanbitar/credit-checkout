import CreditCardRounded from "icons/CreditCardRounded";
import s from "./PreviewMessage.module.scss";

function PreviewMessage(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.creditCardIcon}>
        <CreditCardRounded />
      </div>
      <h2 className={s.message}>Adicione um novo cartão de crédito</h2>
    </div>
  );
}

export default PreviewMessage;
