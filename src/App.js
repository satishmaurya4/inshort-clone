import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import axios from 'axios'
import {API_KEY} from './api/API_KEY'
import NewsContents from './newsContents/NewsContents';

function App() {
  const [category, setCategory] = useState('general');
  const [newsResults, setNewsResults] = useState(0);
  const [newsArray, setNewsArray] = useState([]);
  const [loadmore, setLoadmore] = useState(10);


  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`
      )
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      // setLoadmore(10);
      return "hello from news api"
    } catch(err) {
     console.log(err) 
    }
  }
  useEffect(() => {
newsApi();
    
  },[category, loadmore])

  return (
    <div>
      <Nav setCategory={setCategory} />
      <NewsContents newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore} />
    </div>
  );
}

export default App;
