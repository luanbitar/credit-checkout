import Desktop from "components/Responsive/Desktop";
import Mobile from "components/Responsive/Mobile";
import Arrow from "icons/Arrow";
import Link from "next/link";
import s from "./NavigationBtn.module.scss";

function NavigationBtn() {
  return (
    <Link href="/">
      <header className={s.container}>
        <Arrow />
        <Desktop>
          <p className={s.label}>Alterar forma de pagamento</p>
        </Desktop>
        <Mobile>
          <p className={s.label}>
            <strong>Etapa 2</strong> de 3
          </p>
        </Mobile>
      </header>
    </Link>
  );
}

export default NavigationBtn;
