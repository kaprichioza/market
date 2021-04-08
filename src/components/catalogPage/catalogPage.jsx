import React, { useEffect, useState } from 'react';
import { CatalogContent } from '../catalogContent/catalogContent';
import { Title } from '../title/title';
import { pluralize } from '../../utils/pluralize';
import { Loader } from '../loader/loader';
import { getCatalog } from '../../services/cartApi';

export const CatalogPage = (props) => {    
    const [isLoading, setIsLoading] = useState(true)
    const [catalogData, setCatalogData] = useState([]);
    const quantityItems = catalogData.length;
    const descriptionText = `${quantityItems} ${pluralize(quantityItems, ['товар', 'товара', 'товаров'])}`;
    useEffect(() => {
        (async function fetchProducts() {
            try {
                const response = await getCatalog();
                setCatalogData(response.data);
            } catch (e) {
                console.error(e)
                // TODO: show toast notification
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    return (
        <>{isLoading
            ? <Loader />
            : <>
                <Title title='Дом и сад' description={descriptionText} />
                <CatalogContent onAddToCart={props.onAddToCart} catalogData={catalogData} />
            </>
        }
        </>
    )
}
