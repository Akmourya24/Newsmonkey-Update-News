import React, { Component } from 'react'

export default class Newitem extends Component {
  render() {
    let {title ,discription,urlToImage,url,date,author }=this.props
    return (
      <div>
                
                    <div className="card ">
                        <img src={urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <div className=' d-flex fw-semibold justify-content-between'>
                            <p className="card-text"><small className="text-body-secondary">Post: {new Date(date).toGMTString()}</small></p>
                            <p className="card-text"><small className="text-body-secondary">By :{!author?"Unknown":author}</small></p>
                            </div>
                            <a href={url} rel ="noreferrer" target='_blank' className="btn btn-primary">More News</a>
                        </div>
                    </div>

      </div>
    )
  }
}
