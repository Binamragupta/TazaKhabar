import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  static defaultProps={
    country:"in",
    pageSize:6,
    category:"general"
  }
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  //now we can acces the information inside article using this.article
  //before we used a variable article that contained the value and passed that value using this.articles but after doing set state we dont need to use it and replaced this,article with empty array=[]
  constructor(props){
    super(props);//we need to do this bcz??
    this.state={
      article:[],
      loading:false,
      mode:"light",
      page:1,
      totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - Taza Khabar`
  }
  //aync=
  //await=
  //fetch=
  //await data.json is used to
  //by using setState we are changing value of article to the latest value we get from yhe url
  // async updateNews(){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=296cae2c22bb4174891c49c230e897a1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data= await fetch(url);
  //   let parsedData=await data.json();
  //   this.setState(
  //     {
  //       article:parsedData.articles,
  //       totalresult:parsedData.totalResults,
  //       loading:false
  //     }
  //   )
  // }
  async componentDidMount(){
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=296cae2c22bb4174891c49c230e897a1&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);//we fetch data form url store it in data
    this.props.setProgress(30)
    let parsedData=await data.json();//convert the fetched data into json and store it in parseddata and then store the article array from parsed data into article
    this.props.setProgress(70)
    this.setState(
      {
        article:parsedData.articles,
        totalresult:parsedData.totalResults,
        loading:false
      }
    )
    this.props.setProgress(100)
    // this.updateNews();

  }
  //pagesize in news api is used to describe number of articles that will be in one page,pagesize=20 in url means 20 article in one page
  // handleNextClick= async ()=>{
  //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=296cae2c22bb4174891c49c230e897a1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //     let data= await fetch(url);
  //     //as we sent the url to fatch data we set loading true .... and as soon data is fetched we set loading false
  //     this.setState({loading:true})
  //     let parsedData=await data.json();
  //     this.setState({
  //       page:this.state.page + 1 ,
  //       article:parsedData.articles,
  //       loading:false
  //     })
      //we are commenting this out to make refactor this app thus making a new function to do similar function
      // this.setState({
      //   page:this.state.page + 1
      // })
      // this.updateNews()

  // }
  // handlePrevClick=async ()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=296cae2c22bb4174891c49c230e897a1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   let data= await fetch(url);
  //   this.setState({loading:true})
  //   let parsedData=await data.json();
  //   this.setState({
  //     page:this.state.page - 1 ,
  //     article:parsedData.articles,
  //     loading:false
  //   })
    //we are commenting this out to make refactor this app thus making a new function to do similar function
    // this.setState({
    //   page:this.state.page - 1
    // });
    // this.updateNews()
  //}
  
  fetchMoreData = async() => {
    this.setState({page:this.state.page +1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=296cae2c22bb4174891c49c230e897a1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState(
      {
        article:this.state.article.concat(parsedData.articles),//here we keep the data in article as it is and then concatinate the fetched data
        totalresult:parsedData.totalResults,
      }
    )
  };
  render() {
    return (
      <>
        <h1 className="text-center mt-4 text-white ">Taza Khabar  -  Top  {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
        {/*this.state.loading jab true hoga tab spinner dekhega,as spineer componenet humesha return karha so always true so woh display hoga ki nai depend loading true hoga ki nai */}
        {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length +1 !== this.state.totalResults}
          // loader={<Spinner/>}
        >
        <div className='container'>
        <div className="row my-7">
            {/*row is a predefined class in bootstrap used to define a row and col-md-4 is used to define that 1 element take space of 4 elements pf a grid as bootstrap divide a row in 12 equal parts so 12%4 we get 3 equal spaces for 0ur 3 news item  in 1 row  */}
            {
              //map is used to itterate between  the values of an array,here the value are object so element will hold each object separately.and return it using return ,to maintain each separately we give it a key(used to uniquely identify)the to use member of that object we use element.member_name  with this as mant article member will be there that mant div will be returned each having particular element value
              this.state.article.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imgUrl={element.urlToImage} newsUrl={element.url} mode={this.state.mode} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
            //if a value is returned as null use ternay operator to set it as something
            //we use ternary operator element.title?element.title.... and all because some of the value returned where null which cannot be sliced
            //we use slice to retun the character from index 0 to 40 so that each news card appear a little uniform
            //to treat each element separately we need to use key which should have something that can identify each value of element uniquely here it is url
          }) 
        }
        {/*to use dark mode change in button  
        we using disable and giving condition if disable=true for a button then we wont be able to click upon it */}
        {/* earlier we had to surf to next page to look upon the data ahead but we made changes and added an infinite scroll which help us to view data in same page by scrolling down and the next fetched data keep getting concatinated to already viewed data */}
        </div>
        </div>
        </InfiniteScroll>
        
            {/* <div className="d-flex justify-content-evenly">
              <button disabled={this.state.page<=1} className={`btn btn-${this.state.mode === "light"?"primary":"dark"} me-md-2`} type="button" onClick={this.handlePrevClick}>&larr; Previous</button>
              <button disabled={this.state.page + 1>Math.ceil(this.state.totalresult/this.props.pageSize)} className={`btn btn-${this.state.mode === "light"?"primary":"dark"}`} type="button" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    )
  } 
}

export default News
