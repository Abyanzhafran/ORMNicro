import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsBaseNavbar from "./NewsBaseNavbar"
import NewsRead from '../pages/news/NewsRead';
import NewsList from '../pages/news/NewsList';
import {
  Route,
  Routes
} from "react-router-dom";

export default function OrmNews() {
  const url = 'http://localhost:8080/news';
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setNews(res.data);
    });
  }, []);

  return (
    <>
      <NewsBaseNavbar />
      <main className="w-full h-full bg-yellow-200">
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/newsRead/:newsId" element={<NewsRead />} />
        </Routes>
      </main>
    </>
  )
}