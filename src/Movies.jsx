import React from "react";
import "./styles.css";
import axios from 'axios';

// const config = {
//   method: 'get',
//   url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=c14286efd49ae138e2d5e2661df06122',
//   // url: 'https://api.igdb.com/v4/games',
//   headers: {}
// };

// const baseURL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=c14286efd49ae138e2d5e2661df06122';
const baseURL = 'http://localhost:3000/mov';


export default function Movies() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
    setPost(response.data)
  });
}, []);

if (!post) return null;


let mov = post.join(' <br> ');
// document.write(mov);
// let mov = post.join('\r\n');

return(
  <div class="popular"
    dangerouslySetInnerHTML={{__html: mov}}
  />
);
}

// async function GetMovies() {
//   const response = await axios(config);
//   const filtered = response.data.results.map(movie => movie.title);
//   return (<div><p>{filtered}</p></div>);
// }  
