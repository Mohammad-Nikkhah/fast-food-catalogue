import {BsSearch} from 'react-icons/bs'
import {useState} from "react";
const SearchBar = ({searchItems}) => {
    const [value,setValue] = useState('');
    const onSubmit = event => {
        event.preventDefault();
        searchItems(value);
    }
    return (
        <form onSubmit={onSubmit} className='search flex-fill d-flex align-items-center'>
            <div className='input-group'>
                 <input className='form-control rounded-end pe-5 border-success'
                        type='text' placeholder='جستوجوی فست فود'
                        value={value}
                        onChange={e=> setValue(e.target.value)}
                 />
                 <BsSearch className='position-absolute top-50 me-3 text-muted translate-middle-y'/>
            </div>
        </form>
    )
}

export default SearchBar;