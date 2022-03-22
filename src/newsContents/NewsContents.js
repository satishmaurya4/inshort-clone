import { Container } from '@material-ui/core'
import React from 'react'
import './NewsContents.css'
import NewsCard from './NewsCard'

const NewsContents = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
  return (
      <Container maxWidth='md'>
          <div className='contents'>
              {
                  newsArray?.map((newsItem, index) => {
                      return (
                          <NewsCard key={index} newsItem={newsItem}/>
                      )
                  })
              }
              {/* {loadmore <= newsResults ?
                    
                  : <p className='nomore-results'>no more results</p>
              } */}
              {
                  loadmore <= newsResults && (
<button className='loadmore' onClick={()=>setLoadmore(loadmore+20)}>Load More</button>
                  )
              }
          </div>
    </Container>
  )
}

export default NewsContents