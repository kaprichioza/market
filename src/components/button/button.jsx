import React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

export const Button = (props) => {
    const { buttonText, disabled, type } = props;
    return (
        <button className={cn(disabled && 'is-disabled', styles['button'], styles[type])}>{buttonText}</button>
    )
}
