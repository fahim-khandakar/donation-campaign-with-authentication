/* eslint-disable react-refresh/only-export-components */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getDonatedCard } from "../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const cards = useLoaderData();
  const storedCards = getDonatedCard();
  const cardsLength = cards.length;
  const storedCardsLength = storedCards.length;

  const singleLength = 100 / cardsLength;
  const allCardsLength = singleLength * cardsLength;
  const fullCardsLength = singleLength * storedCardsLength;
  const cardsStoredLength = allCardsLength - fullCardsLength;

  const data = {
    datasets: [
      {
        label: `Donation is `,
        data: [cardsStoredLength.toFixed(2), fullCardsLength.toFixed(2)],
        backgroundColor: ["#FF444A", "#00C49F"],
        borderColor: ["#FFF"],
        borderWidth: 1,
      },
    ],
    labels: ["Total", "Your"],
  };

  return (
    <div className="w-1/2 md:w-1/2 mx-auto my-10 ">
      <div className="w-4/5 mx-auto ">
        <Pie data={data}></Pie>
      </div>
      <div className="flex mt-5 gap-10 w-full md:gap-20 justify-center">
        <p>
          Your Donation {fullCardsLength.toFixed(2)}%
          <span className="rounded-md px-3 h-[1px] md:px-5 ml-2 bg-[#00C49F]"></span>
        </p>
        <p>
          Total Donation {cardsStoredLength.toFixed(2)}%
          <span className="rounded-md px-3 md:px-5 ml-2 bg-[#FF444A]"></span>
        </p>
      </div>
    </div>
  );
};

export default Statistics;
