import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// import  PropTypes  from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
   

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitlizelatter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    document.title = `${capitlizelatter(props.category)} - NewsApp`

    const updateNews = async () => {
        props.setProgress(10)
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }


    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    },[])

    const fetchMoreData = async () => {
        
            

            const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
            // setLoading(true)
            setPage(page+1)
            let data = await fetch(url)
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)
            setLoading(false)

    }

    return (
        <>
            <h2 className='container text-center  ' style={{ color: 'red', fontWeight: '700px', fontSize: '50px', background: 'black', borderRadius: '20px',marginTop:'58px',border:'3px dotted red' }}> <strong>NewsApp - Top {capitlizelatter(props.category)} News HeadLines</strong></h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title?element.title:'Title not found'}
                                    description={element.description?element.description:'Not found'}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>


    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
}

export default News

