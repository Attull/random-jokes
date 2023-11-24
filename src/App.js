
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({})
  const fetchData = () =>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data =>{
      setData(data)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
        {data.value}
    </div>
  );
}

export default App;
