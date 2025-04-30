import styles from "./page.module.scss";
import WelcomeScreen from "./components/WelcomeScreen";

export default function Home() {
  return (
    <div className={styles.background}>
      <WelcomeScreen />
    </div>
  );
}
