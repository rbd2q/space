import {BurgerMenu} from "../../../features/burger-menu/ui";
import {CartIcon} from "../../../shared/icons/CartIcon";
import styles from './header.module.scss';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerContainer}>
      <img src="./images/logo.png" className={styles.logo} alt="logo"/>
      <div className={styles.navigationItems}>
        <span className={styles.navigationItem}>Home</span>
        <span className={styles.navigationItem}>Products</span>
        <CartIcon/>
      </div>
      <div className={styles.burgerMenu}>
        <BurgerMenu/>
      </div>
    </div>
  </div>
)
