import React from 'react'

const NeckbandsCollection = () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    
  return (
    <div>
       <div>List of Items</div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default NeckbandsCollection
