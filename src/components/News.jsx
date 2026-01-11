import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";


export class News extends Component {
static defaultProps={
  country:"us",
  pageSize:8,
  category:"general"
}

static propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }



  async componentDidMount() {
    this.updateNews();
  }

  updateNews = async () => {
  this.setState({ loading: true });

  const { country, category, pageSize } = this.props;

  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=42217be46bd14e0bb0d0e96a0b38fa0c&page=${this.state.page}&pageSize=${pageSize}`;

  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
    articles: parsedData.articles || [],
    totalResults: parsedData.totalResults || 0,
    loading: false,
  });
};


  handlePrevClick = () => {
    this.setState(
      { page: this.state.page - 1 },
      this.updateNews
    );
  };

  handleNextClick = () => {
    this.setState(
      { page: this.state.page + 1 },
      this.updateNews
    );
  };

  render() {
    const { pageSize } = this.props;

  const totalPages = Math.ceil(
    this.state.totalResults / pageSize
  );
    

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            News App
          </h1>

          {/* 🔄 Loader */}
          {this.state.loading && (
            <div className="flex justify-center items-center py-20">
              <Loader />
            </div>
          )}

          {/* 📰 News Cards */}
          {!this.state.loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {this.state.articles.map((element) => (
                <NewsItem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  url={element.url}
                  imageUrl={element.urlToImage}
                />
              ))}
            </div>
          )}

          {/* ⬅️➡️ Pagination */}
          <div className="flex justify-between items-center mt-10">
            <button
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
              className="px-5 py-2 rounded-full bg-indigo-600 text-white font-medium 
                         hover:bg-indigo-700 transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Previous
            </button>

            <button
              disabled={this.state.page + 1 >= totalPages}
              onClick={this.handleNextClick}
              className="px-5 py-2 rounded-full bg-indigo-600 text-white font-medium 
                         hover:bg-indigo-700 transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Next →
            </button>
          </div>

          {/* 📄 Page Info */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Page {this.state.page} of {totalPages-1}
          </p>
        </div>
      </div>
    );
  }
}

export default News;
