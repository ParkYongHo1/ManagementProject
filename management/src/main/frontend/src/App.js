import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState("")
  useEffect(()=>{
    axios.get('/api/data')
    .then(res=> setData(res.data))
    .catch(err=>console.log(err))
  },[])
  return(
    <div>
      벡엔드 데이터 : {data}
    </div>
  )
}

export default App;
