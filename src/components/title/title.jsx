import React from 'react'
import styles from './title.module.css';

export const Title = () => {
    return (
        <section className={styles.wrapper}>
            <span className={styles.headline}>Дом и сад
                <span className={styles.quantityItems}>
                    24 товара
                </span>
            </span>
        </section>
    )
}
