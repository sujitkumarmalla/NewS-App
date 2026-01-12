import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.props.category} - by sujit`;
  }

  componentDidMount() {
    this.updateNews();
  }

  updateNews = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });

    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=42217be46bd14e0bb0d0e96a0b38fa0c&page=${page}&pageSize=${pageSize}`;

    this.props.setProgress(40);

    const data = await fetch(url);
    const parsedData = await data.json();

    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
    });

    this.props.setProgress(100);
  };

  handlePrevClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.updateNews
    );
  };

  handleNextClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.updateNews
    );
  };

  render() {
    const { pageSize, category } = this.props;
    const { articles, loading, page, totalResults } = this.state;

    const totalPages = Math.ceil(totalResults / pageSize);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            News App – Top {category} headlines
          </h1>

          {/* Loader */}
          {loading && (
            <div className="flex justify-center py-20">
              <Loader />
            </div>
          )}

          {/* News Cards */}
          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {articles.map((element) => (
                <NewsItem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  url={element.url}
                  imageUrl={element.urlToImage}
                  date={element.publishedAt}
                  author={element.author}
                  batch={element.source?.name}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center mt-10">
            <button
              disabled={page <= 1}
              onClick={this.handlePrevClick}
              className="px-5 py-2 rounded-full bg-indigo-600 text-white disabled:opacity-50"
            >
              ← Previous
            </button>

            <button
              disabled={page  >= totalPages}
              onClick={this.handleNextClick}
              className="px-5 py-2 rounded-full bg-indigo-600 text-white disabled:opacity-50"
            >
              Next →
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
    );
  }
}

export default News;
