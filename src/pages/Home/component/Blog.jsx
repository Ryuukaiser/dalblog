import React, {Component, useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import ItemBlog from './ItemBlog';
function Blog() {
     const [advice, setAdvice] = useState([]);
     const [count, setCount] = useState();
     const [page, setPage] = React.useState(2);
    
    const handleChange = (event, value) => {
            setPage(value);
      };
        useEffect(() => {
        let getLists = async () => {
          try {
            const response = await fetch(`https://nhatphidev2k.pythonanywhere.com/api/v1/post/list/?page=${page}`);
            const data = await response.json();
            setAdvice(data.results);
            setCount(data.count)
          } catch (error) {
            console.log("error", error);
          } }
          getLists();

        }, [page]);
    
     const lists = () => {
        if(advice !== null){ 
       let list = advice.map((data, index) => (
        <ItemBlog myBlog={data}></ItemBlog>
        //      <div  className="blog__news" key={data.id} >  
        //      <div  className="news__image" >                          
        //          <img src={data.image} alt=""/>    
        //      </div>
        //      <div className='news__texts'>                  
        //          <div  className="news__title" >                          
        //              <h3>
        //                {data.title}
        //              </h3>
        //          </div>
        //          <div  className="news__content" >                          
        //              <p>
        //              {data.content}
        //              </p>
        //          </div>
        //          <div  className="news_more" >                          
        //              <a href={`/blogcontent/${data.id}/`}>Xem thêm {">>"}</a>
        //          </div>
        //      </div>  
        //  </div>
        
         ));
         return list;
     }};
        return (
        <section className="blog">
            <div className="container">
             <div className="blog__wrapper">
                <div className="blog__item news">
                    <div className="blog__title">
                        <h2>
                            Blog mới
                        </h2>      
                    </div>
                    {lists()}
                    <Pagination count={count %5 ===0 ? count/5: Math.round(count/5)}  page={page} onChange={handleChange} variant="outlined" color="secondary" />
                </div>

                <div className="blog__item suggests">
                    <div className="blog__title">
                        <h2>
                            Đề xuất
                        </h2>
                    </div>
                    <div  className="suggests__blog" >
                        <div className="suggests__item">
                            <div  className="suggests__image" >                          
                                <img src="/images/suggests_item.jpg" alt=""/>    
                            </div>                        
                            <div  className="suggests__title" >                          
                                <h3>
                                    Cuộc sống hàng ngày
                                </h3>
                            </div>
                        </div> 
                        <div className="suggests__item">
                            <div  className="suggests__image" >                          
                                <img src="/images/suggests_item_2.jpg" alt=""/>    
                            </div>                        
                            <div  className="suggests__title" >                          
                                <h3>
                                    Cuộc sống hàng ngày
                                </h3>
                             </div>
                        </div>
                        <div className="suggests__item">
                            <div  className="suggests__image" >                          
                                <img src="/images/suggests_item_3.jpg" alt=""/>    
                            </div>                        
                            <div  className="suggests__title" >                          
                                <h3>
                                    Cuộc sống hàng ngày
                                </h3>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
             </div>
        </section>    
    
  )
}


export default Blog