import React, { useEffect, useState } from 'react';
import { CatalogContent } from '../catalogContent/catalogContent';
import { Title } from '../title/title';
import axios from 'axios';
import styles from './catalogPage.module.css';
import { pluralize } from '../../utils/pluralize';


export const CatalogPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [catalogData, setCatalogData] = useState([]);
    const quantityItems = catalogData.length;
    const descriptionText = `${quantityItems} ${pluralize(quantityItems, ['товар', 'товара', 'товаров'])}`;
    useEffect(() => {
        (async function fetchProducts() {
            try {
                const response = await axios.get('/api/v1/products');
                setCatalogData(response.data);
            } catch(e) {
                console.error(e)
                // TODO: show toast notification
            } finally {
                setIsLoading(false);                
            }            
        })();
    }, []);
    return (
        <>{isLoading
            ? <div className={styles['loading-spiner']}></div>
            : <>
                <Title title='Дом и сад' description={descriptionText} />
                <CatalogContent catalogData={catalogData} />
            </>
        }
        </>
    )
}
