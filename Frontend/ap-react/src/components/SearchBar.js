import {useState} from 'react'
var data = require("./players.json")

function SearchBar() {
    //Value represents current input state of the search bar
    //SetValue is used to update it
    //Initial useState value is '', so value is initalized to ''
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSearch = (searchTerm) => {
        //Update search bar to display search term used
        setValue(searchTerm);
        //Get target value from search, could pass to API (Backend design option)
        console.log(searchTerm)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange} placeholder='Search player' />
            <button onClick={() => onSearch(value)}>Search</button>
            <div>
                {data.filter(item => {
                    //What the user is typing
                    const searchTerm = value.toLowerCase()
                    //Get the player name as we use the filter and go through each array element
                    const fullName = item.full_name.toLowerCase();
                    
                    //Item from the player JSON array gets added into the new array from the filter if the below conditions are met
                    return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
                }).map((item) =>
                    //Map results from filter to a dropdown list where clicking on the result searches them
                    <div onClick={()=>onSearch(item.full_name)} key={item.full_name}>{item.full_name}</div>
                )}
            </div>
        </div>
    );
}

export default SearchBar