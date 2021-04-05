import React from 'react'
import styles from './menuNavigation.module.css';

export const MenuNavigation = () => {
    return (
        <nav className={ styles.wrapper }>
            <ul className={ styles.list}>
                <li className={`${styles.item} ${styles.active}`}>Каталог</li>
                <li className={styles.item}>доставка</li>
                <li className={styles.item}>Оплата</li>
                <li className={styles.item}>Поддержка</li>
            </ul>
        </nav>
    )
}
