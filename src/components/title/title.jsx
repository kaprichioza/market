import React from 'react'
import styles from './title.module.css';

export const Title = (props) => {
    const { title, description } = props
    return (
        <section className={styles.wrapper}>
            <span className={styles.headline}>{title}
                <span className={styles.quantityItems}>{description}</span>
            </span>
        </section>
    )
}
