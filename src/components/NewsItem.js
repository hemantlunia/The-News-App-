import React from 'react'

const NewsItem = (props) => {

  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (

    <div className='container my-3'>
      <div className="card">
        <div>

          <span className="    badge rounded-pill bg-danger" style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            {source}
          </span>
        </div>
        <img className="card-img-top" src={!imgUrl ? "https://cdn.pixabay.com/photo/2017/07/26/16/32/woman-2542252_1280.jpg" : imgUrl} alt="Pic Of  Related News" />
        <div className="card-body" style={{ backgroundColor: 'pink' }}>
          <h5 className="card-title"><strong>{title}...</strong></h5>
          <p className="card p-2" style={{ backgroundColor: 'purple', color: 'whitesmoke' }}>{description}</p>
          <p className='card-text'><small className='text' style={{ backgroundColor: '', color: 'red', border: 'none' }}><> <b> By  {!author ? "Unknown" : author}</b>  On <strong>{new Date(date).toGMTString()}</strong></> </small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-danger" style={{ backgroundColor: 'aqua', color: 'black', border: 'none' }}><strong>Read More..</strong></a>
        </div>
      </div>

    </div>
  )
}


export default NewsItem
