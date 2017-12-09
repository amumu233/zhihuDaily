import React from 'react';
import './index.less';

export default class ThemeImage extends React.Component{
    render(){
        return (
            <div className="theme-image"
                style={{
                    backgroundImage: `url(${ this.props.image })`
                }}
            >
                <div className="theme-title">{ this.props.description }</div>
            </div>
        )
    }
}