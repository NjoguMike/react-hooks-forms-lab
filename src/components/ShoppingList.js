import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ search, setSearch] = useState("")
  const [ newItem, setNewItem] = useState(items)

  function handleSearch(event){
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = newItem.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchItem = itemsToDisplay.filter(item => item.name.includes(search))

  let filtered = search === "" ? itemsToDisplay : searchItem 

  function handleFormData(data){
      setNewItem([...newItem, data])
    }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormData}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
