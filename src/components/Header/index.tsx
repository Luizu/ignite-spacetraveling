import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div>
        <img src="/images/logo.svg" alt="Spacetraveling logo" />
      </div>
    </header>
  );
}
