import React from 'react';
import { Icon } from "antd";
import './index.less'

class ArticleHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            like: false,
            zan: false
        }
    }

    render(){

        return (
            <div className={ "article-header " + (this.props.atNight? "night" : "day") }>
                <Icon
                    type="arrow-left"
                    className="antd-icon return-pre"
                    onClick={ this.props.return }
                ></Icon>
                <div className="others">
                    <Icon
                        className='antd-icon'
                        type={ this.state.like?'star':'star-o' }
                        onClick={ ()=>{ this.setState({like: !this.state.like}) }}
                    ></Icon>
                    <Icon
                        className="antd-icon"
                        type={this.state.zan?'like':'like-o'}
                        onClick={ ()=>{ this.setState({zan:!this.state.zan}) } }
                    ></Icon>
                </div>
                
            </div>
        )
    }
}


export default ArticleHeader