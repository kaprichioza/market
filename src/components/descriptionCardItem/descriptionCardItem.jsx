import React from 'react';
import styles from './descriptionCardItem.module.css';

export const DescriptionCardItem = (props) => {
    const { text } = props;
    return (
        <div className={styles.text}>{text}</div>
    )
}
