import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";


import Content from './Content'

export const BlogContent = () => {



  return (
    <div>
        <div className="separator"></div>
        <section className="blog-content">
        <div className="container">
            <Content>        
            </Content>
        </div>
        </section>
    </div>
  )
}

export default BlogContent