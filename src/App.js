import './App.css';
import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";
import {useEffect, useState} from "react";
import axios from "../src/axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notfound from '../src/assets/images/404.png'

function App() {
  const [loading,setLoading] = useState(false);
  const [fastFoodItems,setFastFoods] = useState([]);

  const fetchData = async (categoryId = null) => {
      setLoading(true);
      const response = await axios.get(
          `/FastFood/list/${categoryId ? "?categoryId=" + categoryId: ""}`
      );
      setLoading(false);
      setFastFoods(response.data);
  }


  const searchItems = async (term) => {
      setLoading(true);
      const response = await axios.get(`/FastFood/search/${term ? "?term=" + term : ""}`);
      setLoading(false)
      setFastFoods(response.data)
  }

    const renderContent = () => {
        if (loading) {
            return <Loading theme='dark' />
        } else if (fastFoodItems.length === 0) {
            return (
                <>
                    <div className='alert alert-danger text-center'>
                        هیچ آیتمی یافت نشد
                    </div>
                    <img alt='404' src={notfound} className='mx-auto d-block mt-5' />
                </>
            )
        }
        return <FastFoodList fastFoodItems={fastFoodItems}></FastFoodList>
    }



  useEffect(()=> {
      fetchData();
  },[])
    const filterItems = (categoryId) => {
        fetchData(categoryId)
    }



    return (
    <div className="App">
          <div className='bg-faded-dark wrapper '>
            <Header/>
              <CategoryList filterItems={filterItems}>
                  <SearchBar searchItems={searchItems}/>
              </CategoryList>
              <div className='container mt-4'>
                  {renderContent()}
              </div>
          </div>
    </div>
  );
}

export default App;
