import React, { useEffect, useState } from 'react';
import NewItem from './NewItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import cors from 'cors';

const NewCom = (props) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoaing] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const updateNews = async () => {
		props.setProgress(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
		setLoaing(true);
		let data = await fetch(url, cors());
		props.setProgress(30);
		let parseData = await data.json();
		props.setProgress(60);

		setArticles(parseData.articles);
		setPage(page);
		setTotalResults(parseData.totalResults);
		setLoaing(false);

		props.setProgress(100);
	};

	useEffect(() => {
		document.title = `${capitalizeFirstLetter(props.category)} | NewsSpot`;

		updateNews();
		// eslint-disable-next-line
	}, []);

	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${
			props.country
		}&category=${props.category}&apiKey=${props.apiKey}&page=${
			page + 1
		}&pagesize=${props.pageSize}`;
		setPage(page + 1);
		let data = await fetch(url);
		let parseData = await data.json();
		setArticles(articles.concat(parseData.articles));
		setTotalResults(parseData.totalResults);
	};

	// hendelPreClick = async () => {
	//   this.setState({
	//     page: this.state.page - 1
	//   })
	//   this.updateNews()
	// }

	// hendelNextClick = async () => {
	//   this.setState({
	//     page: this.state.page + 1
	//   })
	//   this.updateNews()
	// }

	return (
		<>
			<div className='text-center'>
				<h2>Top Headlines</h2>
				{loading && <Spinner />}
			</div>

			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Spinner />}>
				<div className='container my-3'>
					<div className='row my-4 d-flex justify-content-evenly'>
						{articles.map((element, index) => {
							return (
								<div
									className='col-md-4 mx-36'
									key={index}>
									<NewItem
										title={element.title ? element.title.slice(0, 45) : ''}
										description={
											element.description
												? element.description.slice(0, 80)
												: ''
										}
										imgUrl={element.urlToImage}
										newsUrl={element.url}
										author={element.author}
										date={element.publishedAt}
										source={element.source.name}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>

			{/* <div className='container d-flex justify-content-around my-5'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.hendelPreClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.hendelNextClick}>Next &rarr;</button>
        </div> */}
		</>
	);
};

NewCom.defaultProps = {
	country: 'in',
	pageSize: 21,
	category: 'general',
};

NewCom.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};

export default NewCom;
