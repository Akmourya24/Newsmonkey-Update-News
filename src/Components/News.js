import React, { Component } from 'react'

import Newitem from './Newitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";





export default class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 10,
        category: "general",

    }
    static PropTypo = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFLetter = (string) => {
        return (string.charAt(0).toUpperCase() +
            string.slice(1));
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,


        }

        document.title = this.capitalizeFLetter(`NewsDonky-${this.props.category}`)
    }

    newsUpade = async () => {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(40)
        let parsedDate = await data.json()
        console.log(parsedDate)
        this.props.setProgress(70)
        this.setState({
            articles: parsedDate.articles,
            totalResults:parsedDate.totalResults,
            loading: false

        })
        this.props.setProgress(100)

    }
    async componentDidMount() {
        // let url ="https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=20&apikey=${this.props.apikey}4884af1d92afa19a25b9ecd189964fa6"
        this.newsUpade()

    }

    fetchMoreData = async() => {
        this.setState({page:this.state.page +1

                })
                const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
                this.setState({ loading: true })
                let data = await fetch(url)
                let parsedDate = await data.json()
                console.log(parsedDate)
                this.setState({
                    articles:this.state.articles.concat(parsedDate.articles),
                    totalResults:parsedDate.totalResults,

                    loading: false
                })
    }
    // handlePrevesClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.newsUpade()
    // }

    // handleNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1,
    //     })
    //     this.newsUpade()

    // }

    filterArticles = () => {
        return this.state.articles.filter(article => {
            return article.urlToImage !== null && article.description !== null;
        });
    }

    render() {
        const fillteedArticle = this.filterArticles()
        return (
            <>

                <div className='container my-3'>
                    <h1 className=' text-center my-5'>Newsdonkey - Top {this.capitalizeFLetter(this.props.category)} Headlines </h1>
                    <div className='container my-3  d-flex justify-content-end'>
                    </div>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles !== this.state.totalResults}
                        loader= {this.state.loading && <Spinner />}></InfiniteScroll>
                    <div className='row' >
                        {fillteedArticle.map((Element) => {

                            return <div className='col-md-4' key={Element.url}>
                                <Newitem url={Element.url} title={Element.title} discription={Element.description} urlToImage={Element.urlToImage} author={Element.author} date={Element.publishedAt} />
                            </div>

                        })

                        }
                    </div>
                    {/* <div className='container my-3  d-flex justify-content-end'>
                        <button type="button" disabled={this.state.page <= 1} className="btn mx-3 btn-primary" onClick={this.handlePrevesClick} >&#8592; Previous </button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil((this.totalResults / this.props.pageSize))} className="btn btn-primary" onClick={this.handleNextClick}>Next &#8594;</button>

                    </div> */}


                </div>
            </>
        )
    }
}
