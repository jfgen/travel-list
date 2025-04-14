import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const App = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [list, setList] = useState(initialItems);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      return;
    }

    const newItem = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };

    const currentList = list;

    currentList.push(newItem);
    console.log(currentList);
    // setList(updatedList);
    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="app">
      <Logo />
      <Form
        description={description}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
        handleDescriptionChange={handleDescriptionChange}
        handleSubmit={handleSubmit}
      />
      <PackingList list={list} />
      <Stats />
    </div>
  );
};

export default App;
