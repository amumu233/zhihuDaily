import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../reducers";

import ArticleHeader from '../../containers/articleHeader';
import Footer from '../../components/footer';

import './index.less'

class Article extends React.Component {
    componentDidMount(){
        const articleId = this.props.match.params.id.slice(1);
        this.props.get_article(articleId);
    }
    render (){
        let __html = this.props.article.body;
        let str1 = ` style="background-image:url(${this.props.article.image})"`;
        let str2 = `<div class="article-image-title">
                        <div class="article-title">${this.props.article.title}</div>
                        <div class="image-source">${this.props.article.image_source}</div>
                   </div>`;
        let position = __html.indexOf('<div class="img-place-holder">');
        let insertFlag = (str,flg,sn)=>{
            var newstr="";
            var beforeStr = str.slice(0,sn);
            var afterStr = str.slice(sn);
            newstr = beforeStr + flg + afterStr;
            return newstr;
        };
        if(position!==-1){
            __html = insertFlag(__html,str2,position + 30);
            __html = insertFlag(__html,str1,__html.indexOf('<div class="img-place-holder">')+29);
            console.log(__html);
        }
        return (
            <div className={"article-pages " + (this.props.atNight?'night':'')}>
                {/* {article-header} */}
                <ArticleHeader 
                    atNight={this.props.atNight}
                    return={()=>{ this.props.history.goBack() }}    
                ></ArticleHeader>
                <div className={"article-container " + (this.props.atNight?'night':'')} ref='articleContainer' dangerouslySetInnerHTML={{__html: __html}}>
                    
                </div>
                <Footer></Footer>
            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    article: state.article,
    atNight: state.atNight
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    get_article: bindActionCreators(actions.get_article,dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)