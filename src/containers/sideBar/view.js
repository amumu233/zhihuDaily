import React, { Component } from 'react';
import { Icon } from "antd";

class sideBar extends Component {
    // componentDidMount(){
    //     this.props.getThemeList();
    // }
    //toggle side bar
    toggleSideBar(){
        this.props.toggleSideBar(this.props.showSideBar);
    }
    render(){
        const handleClick = this.props.handleClick;
        let lis;
        if(this.props.theme_list){
            const {limit, subscribe , others} = this.props.theme_list;
            lis = others.map(function(theme,key,arr){
                return (
                    <li className="li-theme" key={theme.id} onClick={handleClick.bind(this,theme.id)}>
                        <span>{theme.name}</span>
                        <Icon type="verticle-left" className="antd-icon"></Icon>
                    </li>
                )
            })
        }
        
        return (
            <div className={"sideBar " + (this.props.showSideBar?"show":"")}
                onClick = { this.toggleSideBar.bind(this) }
            >
                <div className={ "container " + (this.props.atNight?'night':'day')}>
                    <header className={this.props.atNight? 'night':'day'}>
                        <img src="" alt=""/>
                        <span>每天三次,每次七分钟</span>
                    </header>
                    <ul className={ "theme-list " + (this.props.atNight?'night':'day')}>
                        <li className="home" onClick={ this.props.returnHome }>
                            <Icon type="book" className="antd-Icon"></Icon>
                            <span>首页</span>
                        </li>

                        { lis }
                    </ul>
                </div>
            </div>
        )
    }
}

export default sideBar