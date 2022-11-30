/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

function DashboardNewsList() {
  const url = 'https://orm-nicro-qbjl92t49-abyanzhafran.vercel.app/news';
  const [news, setNews] = useState([]);
  const [insertTitle, setInsertTitle] = useState('');
  const [insertContent, setInsertContent] = useState('');

  useEffect(() => {
    axios.get(url).then((res) => {
      setNews(res.data);
    });
  }, []);

  const addNews = () => {
    axios
      .post(url, {
        title: insertTitle,
        content: insertContent,
      })
      .then(() => {
        alert('News Added');
      });
  };

  function truncate(str) {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  }

  return (
    <div className="flex flex-col w-full px-4 mt-14">
      <div className="flex w-full justify-between mb-4">
        <span className="font-bold text-2xl">Daftar Berita</span>
        <label class="btn btn-info btn-sm" for="my-modal-1">
          <AddIcon />
          Tambah berita
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>Judul</th>
              <th>Konten</th>
              <th>Tanggal Buat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {news.map((news) => (
              <tr>
                <th>{news.id}</th>
                <td>{news.title}</td>
                <td>{truncate(news.content)}</td>
                <td>{news.createdAt}</td>
                <td className="flex gap-1">
                  <label
                    className="btn btn-xs btn-success modal-button"
                    for="my-modal-1"
                  >
                    Edit
                  </label>
                  <label
                    className="btn btn-xs btn-error"
                    for="my-modal-2"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* add modal */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-4 mt-8">
            <span className="font-bold text-2xl">Tulis berita</span>
            <input
              placeholder="News title"
              className="input input-bordered"
              type="text"
              onChange={(e) => setInsertTitle(e.target.value)}
            />
            <textarea
              class="textarea textarea-bordered"
              placeholder="Content"
              onChange={(e) => setInsertContent(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-action">
            <label
              for="my-modal-1"
              className="btn btn-primary"
              onClick={() => addNews()}
            >
              Submit
            </label>
            <label for="my-modal-1" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <span className="font-bold text-2xl">Hapus berita ?</span>
          <div className="modal-action">
            <label
              for="my-modal-2"
              className="btn btn-primary"
            >
              Delete
            </label>
            <label for="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNewsList;
