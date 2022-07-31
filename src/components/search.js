import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { API_URL, APIoptions } from "../api"

const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState(null);


    const loadOptions = (inputValue) => {
    return fetch(`${API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, 
    APIoptions)
	.then(response => response.json())
	.then((response) => {
        return {
            options: response.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`
                }
            })
        }
    })
	.catch(err => console.error(err));
    }

    const handelOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
        placeholder="Search for your city"
        debounceTimeout={60000}
        value={search}
        onChange={handelOnChange}
        loadOptions={loadOptions}/>
    )
};

export default Search;