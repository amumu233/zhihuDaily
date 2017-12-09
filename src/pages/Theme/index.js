import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../reducers";

import MobileHeader from '../../containers/mobileHeader';
import SideBar from '../../containers/sideBar';

import ThemeImage from '../../components/themeImage';
import PostLi from '../../components/postLi';
import Footer from '../../components/footer';

import './index.less'

class Theme extends React.Component{

    constructor(props){
        super(props);
        this.postHandleClick = this.postHandleClick.bind(this);
        this.themeHandleClick = this.themeHandleClick.bind(this);
    }
    componentDidMount(){
        this.props.get_theme_list();
        const themeId = this.props.match.params.id.slice(1);
        this.props.get_theme_content(themeId);
    }
    postHandleClick(id){
        this.props.history.push(`/article/:${id}`)
    }
    themeHandleClick(id){
        this.props.history.push(`/theme/:${id}`);
        this.props.get_theme_content(id);
    }
    render(){
        console.log(this.props.match.params.id)
        const { description, background, editors, name, stories } = this.props.current_theme_content; 
        const atNight = this.props.atNight;
        const postHandleClick = this.postHandleClick;
        const themeHandleClick = this.themeHandleClick;
        return (
            <div className={'theme-pages '+(atNight?'night':'')}>
                <MobileHeader></MobileHeader>
                <SideBar
                    handleClick={ themeHandleClick }
                    returnHome = { ()=>{ this.props.history.push('/') }}
                ></SideBar>
                <ThemeImage
                    image={ background }
                    description={ description } 
                ></ThemeImage>
                <div className={"theme-editor " + (atNight?'night':'')}>
                    <span className="editor-name">主编: { editors[0].name }</span>
                    <img src={ editors[0].avatar } alt="" className="editor-avatar"/>
                </div>
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

Theme.defaultProps = {
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
    current_theme_content: state.current_theme_content,
    atNight: state.atNight
})

const mapDispatchToProps = (dispatch) => ({
    get_theme_list: bindActionCreators(actions.get_theme_list,dispatch),
    get_theme_content: bindActionCreators(actions.get_theme_content,dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Theme)

