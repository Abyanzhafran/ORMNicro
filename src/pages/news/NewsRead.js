import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

function OrmNewsRead() {
  const url = 'http://localhost:8080/news';
  const [getNewsId, setGetNewsId] = useState('')

  var params = useParams()

  useEffect(() => {
    axios.get(url + `/${params.newsId}`).then((res) => {
      setGetNewsId(res.data)
      console.log(res.data)
    })
  }, [params.newsId])

  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-full bg-gray-50">
          <div className="flex flex-col justify-center items-center gap-8 mx-6 md:mx-32 lg:mx-48 py-14">
            <div className="">
              <img src="https://placeimg.com/640/330/arch" alt="Shoes" />
            </div>
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
      </div>
    </>
  )
}

export default OrmNewsRead