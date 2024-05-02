import {useEffect ,useState} from "react";
import axios from "../axios.js";
import Loading from "../Loading/loading";
const CategoryList = () => {
    const [loading,setLoading] = useState(true);
    const  [categories , setCategories] = useState([]);
    useEffect(() => {
      const fetchCat = async  ()=> {
          const response = await  axios.get('/FoodCategory/categories');
          setCategories(response.data);
          setLoading(false);
      }
      fetchCat();
    },[]);

    const renderContent  = () => {
        if (loading){
            return <Loading theme="primary"/>
        }else  {
            return  (
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            همه فست فود ها
                        </a>
                    </li>
                    {
                        categories.map(category => (
                            <li className='nav-item' key={category.id}>
                                <a className='nav-link' href='#'>
                                    {category.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }
    return (
        <nav className='container mt-n5'>
           <div className='d-flex align-items-center bg-white rounded-3 shadow-lg py-4' style={{height:'80px'}}>
               {renderContent()}
           </div>
        </nav>
    )
}

export default  CategoryList;