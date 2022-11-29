import { useEffect, useState } from 'react';
import axios from 'axios';
import OrmNewsBaseNavbar from "./OrmNewsBaseNavbar"
import OrmNewsRead from '../pages/OrmNewsRead';
import {
  Link,
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
      <OrmNewsBaseNavbar />
      <main className="w-full h-full bg-yellow-200">
        <Routes>
          <Route path="/newsRead" element={<OrmNewsRead />} />
        </Routes>
      </main>
    </>
  )
}