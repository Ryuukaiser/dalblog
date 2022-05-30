import React from 'react'

const ItemBlog = (props) => {
  return (
    <div  className="blog__news" key={props.myBlog.id} >  
    <div  className="news__image" >                          
        <img src={props.myBlog.image} alt=""/>    
    </div>
    <div className='news__texts'>                  
        <div  className="news__title" >                          
            <h3>
              {props.myBlog.title}
            </h3>
        </div>
        <div  className="news__content" >                          
            <p>
            {props.myBlog.content}
            </p>
        </div>
        <div  className="news_more" >                          
            <a href={`/blogcontent/${props.myBlog.id}/`}>Xem thêm {">>"}</a>
        </div>
    </div>  
</div>
  )
}

export default ItemBlog