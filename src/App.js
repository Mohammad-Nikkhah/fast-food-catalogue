import './App.css';
import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";
import {useEffect, useState} from "react";
import axios from "../src/axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";

function App() {
  const [loading,setLoading] = useState(false);
  const [fastFoodItems,setFastFoods] = useState([]);

  const fetchData = async (categoryId = null) => {
      setLoading(true);
      const response = await axios.get(`/FastFood/list/`);
      setLoading(false);
      setFastFoods(response.data);
  }

  const renderContent = () => {
      if (loading) {
          return <Loading theme='dark'/>
      }
      return <FastFoodList fastFoodItems={fastFoodItems} ></FastFoodList>
  }

  useEffect(()=> {
      fetchData();
  },[])
  return (
    <div className="App">
          <div className='bg-faded-dark wrapper '>
            <Header/>
              <CategoryList/>
              <div className='container mt-4'>
                  {renderContent()}
              </div>
          </div>
    </div>
  );
}

export default App;
