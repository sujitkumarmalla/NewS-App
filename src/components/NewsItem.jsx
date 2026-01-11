import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, url, imageUrl } = this.props;

    const defaultImage =
      "https://ichef.bbci.co.uk/news/1024/branded_news/4011/live/df9e98d0-eb1c-11f0-a935-e16fc33d91b4.jpg";

    return (
      <div className="my-3">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">

          {/* Image */}
          <img
            src={imageUrl ? imageUrl : defaultImage}
            alt="news"
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />

          {/* Content */}
          <div className="p-4 flex flex-col flex-grow">

            {/* Title */}
            <h5 className="text-lg font-semibold mb-2 text-gray-800">
              {title ? title.slice(0, 60) : "No Title Available"}
            </h5>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {description
                ? description.slice(0, 100)
                : "No description available for this news."}
            </p>

            {/* Button */}
            <div className="mt-auto">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
              >
                Read More
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
