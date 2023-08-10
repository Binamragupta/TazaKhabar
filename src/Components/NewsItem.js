import React, { Component } from 'react'
import { Tilt } from 'react-tilt';
const defaultOptions={
  reverse: false,
  max:35,
  persepective:1000,
  scale:1.1,
  speed:1000,
  transistion:true,
  axis:null,
  reset:true,
  easing:"cubix-bezier(.03,.98,.52,.99)",
  boxShadow:"gray"
}
// const customOptions={
//   reverse: true,
//   max:45,
//   persepective:1500,
//   scale:1.2,
//   speed:2000,
//   transistion:true,
//   axis:"X",
//   reset:false,
//   easing:"cubix-bezier(.2,.8,.3,.1)"
// }
export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,mode,author,date,source}=this.props;//this.props ek object banke ayega usme se jo title aur description values hai woh respectively title aur description mein store hojayenge
    return (
    <div className='my-5 mx-4'> 
    <Tilt options={defaultOptions}>
        {/* it is bootstrap element ,it is a card */}
        {/* i have passed mode to make changes in future to add dark mode */}
        <div className="card">{/* it was previously style ="width:18rem but was in such a way cause it was showing error so we changed it into javascript conatining object and that has an element width" */} 
            <img src={imgUrl?imgUrl:"https://img.uxwing.com/wp-content/themes/uxwing/download/seo-marketing/latest-news-icon.svg"} className="card-img-top" alt="..."/>
           {/*use ternay operator in image we deal with article with image url = null sow we give a specified image to those */}
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <h5><span className="badge bg-secondary">{source}</span></h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">Last updated by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>{/*new datr helps convert the date we called using prop into a variable and then we use function .toGMTString to convert it into gmt format ,doing this we need not use a variable */}
                <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-${mode === "light"?"primary":"dark"}`}>Read more</a>
            </div>
        </div>
        </Tilt>
      </div>
    )
  }

}

export default NewsItem
