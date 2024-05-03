import {HiShoppingCart} from 'react-icons/hi';
import './fastFoodItems.css';
const FastFoodItem = ({id,name,price,ingredients,imageUrl,delay}) => {
  return (
      <div className='card product-card shadow-sm border-0 h-100 pb-1 fadeIn-Horiz ' style={{animationDelay:delay + 's'}}>
          <span className='badge badge-end badge-shadow bg-success fs-md fw-medium'>
              قیمت : {price.toLocaleString()}تومان
          </span>
          <div className='card__placeholder'>
              <img alt={`product-${id}`} className='card-img-top' src={imageUrl}/>
          </div>
          <div className='card-body text-center pt-3 pb-4 d-flex flex-column'>
              <h5 className='mb-2'>{name}</h5>
              <div className='fs-ms fw-bold text-muted mb-3'>
                  {ingredients}
              </div>
              <button className='btn btn-outline-success btn-sm w-100 mt-auto fw-bold'>
                     افزودن به سبد
                  <HiShoppingCart className='fs-5 fw-bold right-15'/>

              </button>
          </div>
      </div>
  )
}

export default FastFoodItem;