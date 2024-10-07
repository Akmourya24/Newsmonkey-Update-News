import React, { Component } from 'react'
import Newitem from './Newitem'
import Spinner from './Spinner'

export default class India extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            // totalResults: 0
        }
    }


    componentDidMount = async () => {
        this.props.setProgress(10)
        const getUrl = `https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apikey}`
        const data = await fetch(getUrl)
        this.props.setProgress(30)
        const bigData = await data.json();
        this.props.setProgress(70)
        console.log(bigData)
        this.setState({
            articles: bigData.articles
        })
        this.props.setProgress(100)

    }

    filterNews = () => {
        return this.state.articles.filter(article => {
            return article.urlToImage !== null && article.discription !== null
        
    })
}

render() {
    const updatedNews =this.filterNews()
    return (
        <>

            <div className='container my-3'>
                <h1 className=' text-center my-5'>Newsdonkey - All India News </h1>
                <div className='container my-3  d-flex justify-content-end'>
                </div>
                {this.state.loading && <Spinner />}
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
}
