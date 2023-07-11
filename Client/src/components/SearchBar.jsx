 import { useState } from "react";
import  '../Estilos/SearchBar.components.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className="searchBar">
         <input className="input" type='search' onChange = {handleChange} value = {id} />
         <button className="botonBuscar" onClick = {() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
