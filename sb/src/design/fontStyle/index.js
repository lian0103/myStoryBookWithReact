import React from 'react';
import classes from './styles.module.scss';

const FontStyle = (props) =>{

    const { size } = props;

    const cssStyle = {
        'font-size':size
    }

    console.log(classes.font);


    return(
        <>
            <h1 className={classes.font} style={cssStyle}>hello</h1>
        </>
    )
};

export default FontStyle;