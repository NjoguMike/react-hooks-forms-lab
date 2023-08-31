import React, { forwardRef, useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
const [ formData, setFormData ] = useState({id: "", name: "", category: "Produce"})


  function handleAddItem(event){
    const key = event.target.name
   let value = event.target.value
   
    setFormData({...formData,
                id: uuid(),
                [key]: value,
    })
  }

  return (
    <form className="NewItem" onSubmit={(e) => {e.preventDefault()
      onItemFormSubmit(formData)}}>
      <label>
        Name:
        <input id="name" type="text" name="name" value={formData.name} onChange={handleAddItem}/>
      </label>

      <label>
        Category:
        <select id="category" name="category" onChange={handleAddItem} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
