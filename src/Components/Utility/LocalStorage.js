const getDonatedCard = () => {
  const storedJobCard = localStorage.getItem("card");
  if (storedJobCard) {
    return JSON.parse(storedJobCard);
  }
  return [];
};

const saveDonatedCard = (id) => {
  const storedJobCards = getDonatedCard();
  const exists = storedJobCards.find((jobId) => jobId === id);
  if (!exists) {
    storedJobCards.push(id);
    localStorage.setItem("card", JSON.stringify(storedJobCards));
  }
};

export { getDonatedCard, saveDonatedCard };
