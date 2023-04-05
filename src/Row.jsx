import './Row.css'
import axios from './axios'
import {useEffect, useState} from 'react'
import YouTube from "react-youtube"
import { API_KEY } from './Requests' 
// https://netflix-clone-project-c769b.web.app

const Row = ({
    title,
    fetchUrl,
    isLargeRow = false
}) => {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    const baseMediaUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
      height: '590px',
      width: '90%',
      playerVars: {
          autoplay: 0,
      },
    };

    const handleMovieTrailer= (id)=>{
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&append_to_response=videos`).then(res=>{
          if(res.data.results.length!==0){
            setUrlId(res.data.results[0])
          }else{
            console.log('No Video Available',res.data);
          }
        }).catch(err=>{
          console.log("error");
        })

    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div  className="row_posters">

                {
                movies.map((movie) => ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                        onClick={()=>handleMovieTrailer(movie.id)}
                      
                        key={
                            movie.id
                        }
                        className={
                            `row_poster ${
                                isLargeRow && "row_poster_large"
                            }`
                        }
                        src={
                            `${baseMediaUrl}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`
                        }
                        alt={
                            movie.name
                        }/>
                ))
            } </div>
            <div className="trailer_youtube">
            { urlId && <YouTube  videoId={urlId.key} opts={opts} />}
            </div>
        </div>
    )
}

export default Row
