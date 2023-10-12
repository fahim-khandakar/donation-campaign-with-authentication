import { useState, useEffect } from "react";
import { getDonatedCard } from "../Utility/LocalStorage";
import { Link, useLoaderData } from "react-router-dom";

const DonatedCards = () => {
  const [cardLength, setCardLength] = useState(4);
  const [donatedCards, setDonatedCards] = useState([]);
  const cards = useLoaderData();

  useEffect(() => {
    const storedCardsIds = getDonatedCard();
    if (cards.length > 0) {
      const donatedCards = [];
      for (const id of storedCardsIds) {
        const card = cards.find((card) => card.id === id);
        if (card) {
          donatedCards.push(card);
        }
      }
      setDonatedCards(donatedCards);
    }
  }, [cards]);
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {!donatedCards.length > 0 ? (
          <div className="p-5  w-full text-xl font-bold md:text-3xl ">
            <p>No Donation Data Found!</p>
          </div>
        ) : (
          donatedCards.slice(0, cardLength).map((card) => (
            <div
              style={{ background: card.card_bg }}
              className="mt-5 mx-5 lg:mx-0 flex items-center h-[200px] rounded-lg"
              key={card.id}
            >
              <div className="flex  items-center">
                <div className="w-1/2 ">
                  <img
                    className="w-full h-[200px] object-cover"
                    src={card.picture}
                    alt=""
                  />
                </div>
                <div className="w-1/2 pl-3 lg:pl-5 pr-2 lg:pr-10">
                  <button
                    className="py-1 px-2 rounded-sm"
                    style={{
                      background: card.category_bg,
                      color: card.text_color,
                    }}
                  >
                    {card.category}
                  </button>
                  <h2 className="font-semibold text-lg md:text-2xl">
                    {card.title}
                  </h2>
                  <p
                    style={{ color: card.text_color }}
                    className="  font-extrabold "
                  >
                    ${card.price}
                  </p>
                  <Link to={`/card/${card.id}`}>
                    <button
                      style={{ background: card.button_bg }}
                      className=" px-2 lg:px-4 py-1 text-xs lg:text-base font-bold rounded-sm mt-3 text-white"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div
        className={
          cardLength >= donatedCards.length
            ? "hidden"
            : "flex justify-center mt-5"
        }
      >
        <button
          onClick={() => setCardLength(donatedCards.length)}
          className="py-2 text-white px-4 bg-green-500 rounded-lg"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default DonatedCards;
