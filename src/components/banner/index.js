import React, { Component } from 'react';

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

import './index.less'


const BgElement = Element.BgElement;


class Banner extends Component {
  render(){
    const that = this;
    const SliderElement = this.props.items.map(function (item,i) {
        return (
            <Element
                prefixCls="banner-user-elem"
                key={ i }
                onClick={ that.props.handleClick.bind(that,item.id) }
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        backgroundImage: `url(${ item.image })`
                    }}
                ></BgElement>
                <TweenOne 
                    className="banner-user-title" 
                    animation={{ y: 30, opacity: 0, type: 'from' }}
                    style={{color: '#ffffff'}}
                >
                    { item.title }
                </TweenOne>
            </Element>
        )
    })
    return (
        
            <BannerAnim prefixCls="banner-user" autoPlay duration={1000} arrow={false}>
                { SliderElement }
            </BannerAnim>
        
    )
  }
}

export default Banner