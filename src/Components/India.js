import React, { useState, useEffect } from 'react'
import Newitem from './Newitem'
import Spinner from './Spinner'

const India = (props) => {

    const [articles, setArticles] = useState([])
    const loading = false


    const newsUpade = async () => {
        props.setProgress(10)
        // const getUrl = `https://newsapi.org/v2/everything?q=india&apiKey=${props.apikey}`
        let getUrl ="https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=20&apikey=4884af1d92afa19a25b9ecd189964fa6"
        const data = await fetch(getUrl)
        props.setProgress(30)
        const bigData = await data.json();
        props.setProgress(70)
        console.log(bigData)
        setArticles(bigData.articles)
        props.setProgress(100)

    }
    useEffect(() => {
        newsUpade()
        // eslint-disable-next-line
    }, []);

    const filterNews = () => {
        return articles.filter(article => {
            return article.urlToImage !== null && article.discription !== null

        })
    }


    const updatedNews = filterNews()
    return (
        <>

            <div className='container my-3'>
                <h1 className=' text-center my-5'>Newsdonkey - All India News </h1>
                <div className='container my-3  d-flex justify-content-end'>
                </div>
                {loading && <Spinner />}
                <div className='row' >
                    {updatedNews.map((E) => {

                        return <div className='col-md-4' key={E.url}>
                            <Newitem url={E.url} title={E.title} discription={E.description} urlToImage={E.urlToImage} author={E.author} date={E.publishedAt} />
                        </div>

                    })

                    }
                </div>
            </div>

        </>
    )
}
export default India
