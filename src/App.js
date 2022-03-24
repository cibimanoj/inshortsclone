import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"
import Navbar from './components/Navbar';
import { Content } from './components/content/Content';
import apikey from "./Data/apikey"
import { Footer } from './components/Footer/Footer';

function App() {
  const [category,setCategory] = useState("General")
  const [newsArray,setnewsArray]=useState([]);
  const [result,setResult]=useState();
  const [loadMore, setLoadmore] = useState(20)
  const newsApi= async ()=>{
    try{
      
      const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`)
      setnewsArray(news.data.articles);
      setResult(news.data.totalResults)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    newsApi() 
  }, [result,category,loadMore])
  
  return (
    <div>
      <Navbar setCategory ={setCategory}/>
      <Content loadMore={loadMore} setLoadmore={setLoadmore} newsArray={newsArray} result={result}/>
      <Footer/>
    </div>
  );
}

export default App;
