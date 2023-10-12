import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Banner = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSearch = () => {
    const outputValue = cards.filter((card) =>
      card.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setOutput(outputValue);
  };
  return (
    <div className="max-w-6xl">
      <img
        className="rounded-lg absolute top-0 -z-20 opacity-5 w-full max-w-6xl"
        src="https://i.ibb.co/6yhrVcB/Rectangle-4281.png"
        alt=""
      />
      <div className="flex flex-col justify-center items-center h-96">
        <h1 className="text-xl px-5 md:px-0 md:text-3xl lg:text-5xl font-bold pb-10  text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="flex">
          <input
            id="input-field"
            className="border rounded-md pl-5 md:w-[400px]"
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-[#FF444A] text-white py-2 px-5 rounded-tr-md rounded-br-md"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {output.length > 0
          ? output.map((card) => <Card card={card} key={card.id}></Card>)
          : cards.map((card) => <Card card={card} key={card.id}></Card>)}
      </div>
    </div>
  );
};

export default Banner;
