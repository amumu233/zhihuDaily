import React, { Component } from 'react';
import './index.less'


export default class PostLi extends Component {
    render(){
        const post = this.props.post;
        const atNight = this.props.atNight;
        return (
            <li className={'post-li '+ (atNight?'night':'')}>
                <div className="post-container"  onClick={this.props.handleClick.bind(this,post.id)}>
                    <div className="post-title">{post.title}</div>
                    { post.images?
                        <img className="post-thumb" src={post.images[0]} alt=""/>
                        :
                        null
                    }
                    
                </div>
            </li>
        )
    }
}
