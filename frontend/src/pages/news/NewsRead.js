import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

function OrmNewsRead() {
  const url = 'http://localhost:8080/news';
  const [getNewsId, setGetNewsId] = useState('')

  var params = useParams()
  // console.log(params)

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/ormNews/newsRead/${params.id}`)
  //     .then((res) => {
  //       setGetNewsId(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     });
  // }, [params.id]);

  useEffect(() => {
    axios.get(url + `/${params.newsId}`).then((res) => {
      setGetNewsId(res.data)
      console.log(res.data)
    })
  }, [params.newsId])

  console.log(getNewsId)

  // const getNewsById = () => {
  //   axios
  //     .get(url + `/${getNewsId}`).then((res) => {
  //       setGetNewsId(res.data)
  //       console.log(res.data)
  //     })
  // }

  // getNewsById()

  return (
    <>
      <div className="w-full h-full bg-yellow-200">
        <div className="flex flex-col justify-center items-center gap-8 mx-6 md:mx-32 py-14">
          <div>
            <h1 className="font-bold text-3xl">
              {getNewsId.title}
            </h1>
          </div><div>
            <p className="font-normal">
              {getNewsId.content}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrmNewsRead