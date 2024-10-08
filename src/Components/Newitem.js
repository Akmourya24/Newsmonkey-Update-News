import React from 'react'

const Newitem = (props) => {
  return (
    <div>

      <div className="card ">
        <img src={props.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.discription}</p>
          <div className=' d-flex fw-semibold justify-content-between'>
            <p className="card-text"><small className="text-body-secondary">Post: {new Date(props.date).toGMTString()}</small></p>
            <p className="card-text"><small className="text-body-secondary">By :{!props.author ? "Unknown" : props.author}</small></p>
          </div>
          <a href={props.url} rel="noreferrer" target='_blank' className="btn btn-primary">More News</a>
        </div>
      </div>

    </div>
  )
}

export default Newitem


