import React, { Component } from 'react'
import { Icon, Spin } from "antd";
class MobileHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            pullDown: false
        }
    }
    // 日夜切换
    changeCssMode(atNight){
        this.props.changeCssMode(atNight);
    }
    // 下拉菜单
    showPulldown (){
        this.setState({
            pullDown: !this.state.pullDown
        })
    }
    // toggle sidebar
    toggleSideBar(){
        this.props.toggleSideBar(this.props.showSideBar);
    }
    render(){
        return (
            <div className={ "MobileHeader " + (this.props.atNight? "night" : "day") }>
                { this.props.showSideBar }
                <Icon 
                    type="bars" 
                    className="antd-icon"
                    onClick={ this.toggleSideBar.bind(this) }
                    ></Icon>
                { this.props.isFetching? <Spin className="antd-icon"></Spin> : null }
                
                <Icon 
                    type="ellipsis" 
                    className="antd-icon"
                    onClick = {this.showPulldown.bind(this)}
                    ></Icon>
                <ul className={"pulldown " + (this.props.atNight? "night " : "day ") + (this.state.pullDown? 'show':'')}>
                    <li onClick={(event)=>{
                        this.changeCssMode.bind(this,this.props.atNight)();
                        this.showPulldown();
                    }}
                        >
                        <span className="left">[</span>
                        { this.props.atNight? "日间模式":"夜间模式"}
                        <span className="right">]</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MobileHeader