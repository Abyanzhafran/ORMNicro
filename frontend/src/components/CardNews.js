import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import EastIcon from '@mui/icons-material/East';

export default function CardNews() {
  const url = 'http://localhost:8080/news';
  const [news, setNews] = useState([]);
  const [getNewsId, setGetNewsId] = useState('')

  useEffect(() => {
    axios.get(url).then((res) => {
      setNews(res.data);
    });
  }, []);

  return (
    <>
      {news.map((news) => (
        <div className="card card-compact w-80 md:w-96 max-w-lg bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{news.title}</h2>
            <p className="line-clamp-2">{news.content}</p>
            <div className="card-actions justify-end pt-4">
              <Link
                to={`/ormNews/newsRead/${news.newsId}`}
                className="btn btn-primary gap-2 btn-sm"
              >
                {news.newsId}
                <EastIcon />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}