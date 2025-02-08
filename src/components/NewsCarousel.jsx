import React, { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { IoIosArrowDropright } from "react-icons/io";
function NewsCarousel() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const url =
        "https://real-time-news-data.p.rapidapi.com/search?query=cybersecurity&limit=10&time_published=anytime&country=US&lang=en";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "f9d1fb53b2msh02c60a5a4d4d75cp1cadf2jsnc96bd3534d93",
          "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data);
        setNews(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getNews();
  }, []);
  return (
    <div className="news-container m-4">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
        }}
      >
        {news.map((newsItem) => (
          <SplideSlide>
            <div
              className="news-card p-5 m-4"
              style={{ backgroundImage: `url(${newsItem.photo_url})` }}
            >
              <div className="d-flex justify-content-center align-items-center flex-column news-card-content">
                <h4 className="news-title">{newsItem.title}</h4>
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-button"
                >
                  Full Story <IoIosArrowDropright size={25} />
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default NewsCarousel;
