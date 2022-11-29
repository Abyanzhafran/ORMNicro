import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CardNews() {
  const url = 'http://localhost:8080/news';
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setNews(res.data);
    });
  }, []);

  function truncate(str) {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  }

  return (
    <>
      <div className="card card-compact w-80 md:w-96 max-w-lg bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        {news.map((news) => (
          <div className="card-body">
            <h2 className="card-title">{news.title}</h2>
            <p>truncate(news.content)</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}