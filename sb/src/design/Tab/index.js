import React, { useState } from 'react';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
import PropTypes, { array } from 'prop-types';

const cx = classNames.bind(classes);

const Tab = (props) => {

    const { tabList , themeDark } = props;
    const [selectedTab, setSelectedTab] = useState(0)
    const handleTab = (tindex) => {
        setSelectedTab(tindex);
    }

    return (
        <>
            <div className={cx(themeDark?classes.dark:classes.tabContainer)}>
                {tabList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('tabItem', selectedTab === index ? 'selected' : '')}
                            onClick={() => { handleTab(index) }}>
                            {item.name}
                        </div>
                    )
                })}
            </div>

            <div className={cx('tabContent')}>
                {tabList[selectedTab].Content}
            </div>
        </>
    )
};


const TabContentDefault = (props) => {

    let iSrc = `https://picsum.photos/id/${props.id}/600/400`;

    return (
        <img src={iSrc}></img>
    )
}


Tab.propTypes = {
    tabList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        Content: PropTypes.string,
    })).isRequired,
    themeDark:PropTypes.bool
}

Tab.defaultProps = {
    tabList: [
        {
            name:'tab a',
            Content:<TabContentDefault id={111}/>
        },
        {
            name:'tab b',
            Content:<TabContentDefault id={222}/>
        },
        {
            name:'tab c',
            Content:<TabContentDefault id={178}/>
        }
    ],
    themeDark:false
}

export default Tab;