import React, { useState, useEffect } from 'react'

import Newitem from './Newitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";





const News = (props) => {
    News.defaultProps = {
        country: "us",
        pageSize: 10,
        category: "general",

    }
    News.PropTypo = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    const capitalizeFLetter = (string) => {
        return (string.charAt(0).toUpperCase() +
            string.slice(1));
    }

    const [articles, setArticles] = useState([])
    const [loading, setLoding] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)



    const newsUpade = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
        setLoding(true)
        let data = await fetch(url)
        props.setProgress(40)
        let parsedDate = await data.json()
        console.log(parsedDate)
        props.setProgress(70)
        setArticles(parsedDate.articles)
        setTotalResults(parsedDate.totalResults)
        setLoding(false)
        props.setProgress(100)

    }
    useEffect(() => {
        document.title = capitalizeFLetter(`Newsmonkey-Updated-News-${props.category}`)
        newsUpade();
        // eslint-disable-next-line
    }, []);



    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
        setLoding(true)
        let data = await fetch(url)
        let parsedDate = await data.json()
        console.log(parsedDate)
        setArticles(articles.concat(parsedDate.articles))
        setTotalResults(parsedDate.totalResults)
        setLoding(false)

    }

    const filterArticles = (articles) => {
        return articles.filter(article => {
            return article.urlToImage !== null && article.description !== null;
        });
    }
    const fillteedArticle = filterArticles(articles)
    return (
        <>

            <div className='container my-3'>
                <h1 className=' text-center my-5'>Newsdonkey - Top {capitalizeFLetter(props.category)} Headlines </h1>
                <div className='container my-3  d-flex justify-content-end'>
                </div>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles !== totalResults}
                    loader={loading && <Spinner />}>
                    <div className='row' >
                        {fillteedArticle.map((Element) => {

                            return <div className='col-md-4' key={Element.url}>
                                <Newitem url={Element.url} title={Element.title} discription={Element.description} urlToImage={Element.urlToImage} author={Element.author} date={Element.publishedAt} />
                            </div>

                        })

                        }
                    </div>

                </InfiniteScroll>
            </div>
        </>
    )

}
export default News