import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, url, imageUrl, author, date, source ,batch} = this.props;

    const defaultImage =
      "https://ichef.bbci.co.uk/news/1024/branded_news/4011/live/df9e98d0-eb1c-11f0-a935-e16fc33d91b4.jpg";

    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "Unknown date";

    return (
    <div className="my-4 h-full relative">

  {/* 🔴 Badge ABOVE the card */}
  <span className="absolute -my-1 -top-5 right-1 bg-red-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow z-20">
    {batch}
  </span>

  {/* Card */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">

    {/* Image */}
    


          
           <img
            src={imageUrl || defaultImage}
            alt="news"
            className="w-full h-48 sm:h-56 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          /> 

          {/* Content */}
          <div className="p-4  flex flex-col flex-grow">

            {/* Source + Date */}
            <div className="flex justify-between items-center text-xs text-amber-950 mb-2">
              <span className="text-bold">
                Author:-{author ? author : "Unknown"}
              </span>
              <span>{formattedDate}</span>
            </div>

            {/* Title */}
            <h5 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
              {title ? title.slice(0, 70) : "No Title Available"}
            </h5>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {description
                ? description.slice(0, 120)
                : "No description available for this news."}
            </p>

            {/* Button */}
            <div className="mt-auto">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
