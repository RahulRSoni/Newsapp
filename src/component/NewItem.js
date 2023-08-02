import React from 'react'
const NewItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card" style={{ width: '25rem', margin: '20px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: "flex-end",
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger" >{source}</span>
                </div>
                <img src={!imgUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotdpDLplQc5UOhGU7UzrG1GY4qPZ49qJYXryKug3C0g&s" : imgUrl} className="card-img-top" style={{ width: '100%', height: '200px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read more...</a>
                </div>
            </div>
        </div>
    )

}

export default NewItem;
