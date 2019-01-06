import React from 'react'

const Urls = ({urls, deleteUrl}) => {
  return (
    <div className="url-list">
    <ul className="collection with-header">
    <li className="collection-header"><h4>Tiny Urls</h4></li>
      { 
        
        urls.map(url => {
          return (
            <div className="url" key={url.shortUrl}>
            <li className="collection-item">
                <div><a href= {url.shortUrl} rel="noopener noreferrer" target="_blank">{url.shortUrl}</a>
                    <a href="#!" className="secondary-content">
                        <i className="material-icons" onClick={() => {deleteUrl(url.shortUrl, url.userId)}}> delete
                        </i>
                    </a>
                </div>      
            </li>
            </div>
          )
        })
      }
      </ul>
    </div>
  );
}

export default Urls