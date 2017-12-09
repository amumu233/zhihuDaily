import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../reducers";

import MobileHeader from '../../containers/mobileHeader';
import SideBar from '../../containers/sideBar';

import Banner from '../../components/banner';
import PostLi from '../../components/postLi';
import Footer from '../../components/footer';

import './index.less'

class Index extends React.Component{

    constructor(props){
        super(props);
        this.postHandleClick = this.postHandleClick.bind(this);
        this.themeHandelChlick = this.themeHandelChlick.bind(this);
        this.bannerHandleClick = this.bannerHandleClick.bind(this);
        this.returnHome = this.returnHome.bind(this);
    }
    componentDidMount(){
        this.props.get_theme_list();
        this.props.get_news_last();
    }
    postHandleClick(id){
        this.props.history.push(`/article/:${id}`);
    }
    themeHandelChlick(id){
        this.props.history.push(`/theme/:${id}`);  
    }
    bannerHandleClick(id){
        this.props.history.push(`/article/:${id}`)
    }
    returnHome(){
        this.props.history.push('/')
    }
    render(){
        const {  stories, top_stories } = this.props.news_last;
        const atNight = this.props.atNight;
        const postHandleClick = this.postHandleClick;
        const themeHandleClick = this.themeHandelChlick;
        const returnHome = this.returnHome;
        const bannerHandleClick = this.bannerHandleClick;
        return (
            <div className={'index-pages '+(atNight?'night':'')}>
                <MobileHeader></MobileHeader>
                <SideBar
                    returnHome={ returnHome } 
                    handleClick={ themeHandleClick }></SideBar>
                <Banner
                    items={ top_stories }
                    handleClick={ bannerHandleClick }
                ></Banner>
                <p className={"index-title " + (this.props.atNight?'night':'')}>今日新闻</p>
                <ul className="post-list">
                    { stories.map(function(item,i){
                        return (
                            <PostLi
                                post={item} 
                                key={item.id}
                                atNight={atNight}
                                handleClick = { postHandleClick }
                            ></PostLi>                            
                        )
                    })}
                </ul>
                <Footer></Footer>
            </div>
        )
        
    }
}

Index.defaultProps = {
    theme_list: {
        others: []
    },
    news_last: {
        date: '',
        top_stories: [],
        stories: []
    }
}

const mapStateToProps = (state)=>({
    theme_list: state.theme_list,
    news_last: state.news_last,
    atNight: state.atNight
})

const mapDispatchToProps = (dispatch) => ({
    get_theme_list: bindActionCreators(actions.get_theme_list,dispatch),
    get_news_last: bindActionCreators(actions.get_news_last, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)

