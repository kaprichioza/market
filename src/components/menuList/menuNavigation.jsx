import React from 'react'
import styles from './menuNavigation.module.css';

export const MenuNavigation = () => {
    return (
        <nav className={styles.wrapper}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.active}`}>
                    <a href={'/'}>Каталог</a>
                </li>
                <li className={styles.item}>
                    <a href={'/'}>доставка</a>
                </li>
                <li className={styles.item}>
                    <a href={'/'}>Оплата</a>
                </li>
                <li className={styles.item}>
                    <a href={'/'}>Поддержка</a>
                </li>
            </ul>
        </nav>
    )
}
