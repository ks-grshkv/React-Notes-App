/* eslint-disable react/prop-types */
import { useState } from 'react'
import Card from './Card';

export default function Search(){

    // const {children} = props
    const [searchValue, setSearchValue] = useState('clover')
    // const [sendSearch, setSendSearch] = useState(false)
    var name, image

    async function Test (inputValue){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+inputValue).then(
            async (response) => {
                const result = await response.json();
                console.log(result.drinks[0].strDrink)
                name = result.drinks[0].strDrink
                image = result.image
            }
        )
        
    }

    return <>
    <input type='text' value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}>

    </input>
    <button onClick={()=>{
        Test(searchValue)
    }}></button>

    <Card name={name} image={image}></Card>
    
    </>
}