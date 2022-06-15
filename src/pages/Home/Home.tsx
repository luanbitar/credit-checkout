import type { NextPage } from "next";
import CardSection from "./components/CardSection/CardSection";
import NavigationBtn from "./components/NavigationBtn/NavigationBtn";
import PreviewMessage from "./components/PreviewMessage/PreviewMessage";
import s from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <section className={s.previewSection}>
        <NavigationBtn />
        <PreviewMessage />
        <CardSection />
        <div className={s.fill}></div>
      </section>
      <section className={s.formSection}>
        <h1>numero do cartao</h1>
      </section>
    </div>
  );
};

export default Home;
