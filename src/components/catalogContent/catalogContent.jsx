import React from 'react';
import styles from './catalogContent.module.css';
import { CardProduct } from '../cardProduct/cardProduct';

export const CatalogContent = (props) => {
    const { catalogData } = props;     
    return (
        <section className={styles.wrapper}>
            {catalogData.map((product) =>
                <CardProduct productData={product} key={product.id} />
            )}
        </section >
    )
}
