import React, { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(3));
    console.log("Updateing");
  }, [getItems]);

  return items.map((item) => <div key={item.id}>{item}</div>);
}

export default List;
