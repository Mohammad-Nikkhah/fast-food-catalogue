import './App.css';
import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";

function App() {
  return (
    <div className="App">
          <div className='bg-faded-dark wrapper '>
            <Header/>
              <CategoryList/>
          </div>
    </div>
  );
}

export default App;
