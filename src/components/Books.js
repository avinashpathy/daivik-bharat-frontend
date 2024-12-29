// Books.js
import React from "react";
import BookCard from "./BookCard";
import "./Books.css";

const booksList = [
  {
    id: 1,
    name: "Bhagavad Gita",
    image: "https://m.media-amazon.com/images/I/91E9gGNMDVL._SY879_.jpg",
    link: "https://www.amazon.in/Bhagavad-SANSKRIT-ENGLISH-TRANSLATION-Gorakhpur/dp/B0BGX732HR/ref=sr_1_6?crid=1KY2GOJ90L6CW&dib=eyJ2IjoiMSJ9.y6Ew8IMIZVNvED7EDDjsKG-At6nEMOrlvQfojBuKv7FRHs89D398zcBkeX4cF6sfPH54B1MpMhoe6_Sx3TRVs7GhuW40JyaS1RxppI7OuTjfxN5FPLEPPdWR5f0iO6qjARz1HicibqhH7j0Jq81gZUUNBlk1gFAhUaijQr3Oyrf8NLZirCkI1g1I-ndqkyzPLsvKyhfWapGo_k0KSNEmfwo-ybOutDuLsNvLqnDz0Vg.M1MatD_S5N5OIuCJw_zr8vFWNpZ4-IfVe-4Pq2h57jQ&dib_tag=se&keywords=bhagavad+gita+gita+press+gorakhpur&nsdOptOutParam=true&qid=1735469647&sprefix=bhagavad+gita+gi%2Caps%2C250&sr=8-6",
  },
  {
    id: 2,
    name: "Ramayana",
    image: "https://m.media-amazon.com/images/I/91i7fULqCqL._SY466_.jpg",
    link: "hhttps://www.amazon.in/Shrimad-Valmikiya-Ramayan-Gorakhpur-Ramayana/dp/B0BGX2926H/ref=sr_1_3?crid=2GBA13BKD14G3&dib=eyJ2IjoiMSJ9._FobUnxYfevbFhFpUrFZpVSkwPg9M_Et9iq906p-bnwNMGCOGnN-1pM9agg5vUz61d42SlqUPHTVPCKP9-ScrT5dfChInH3F1YcIz393_6gkTnD0fRhBmkFDHjwKnNuj4qpNpffXirCadAUg2WgtHaXdFaQ6SP1hexhzemyambK8foS4eMeCfBz8RFpONGkem_URJ49Juzp71mOXMA8kjVwRG7C_tFBvTIJ9UU4xI9Y.CGgDMG54BXF3JpY_XTlEFwW1YxQ2ofWto0HvyxnxPnI&dib_tag=se&keywords=ramayana+gita+press&nsdOptOutParam=true&qid=1735469727&sprefix=ramayana+gita%2Caps%2C222&sr=8-3",
  },
  {
    id: 3,
    name: "Mahabharata",
    image: "https://m.media-amazon.com/images/I/7121DLaEBgL._SY522_.jpg",
    link: "https://www.amazon.in/Mahabharat-Part-Sanskrit-Translation-Gorakhpur/dp/B0DBQJGQX1/ref=sr_1_3?crid=1ITT8C0QX4ZXT&dib=eyJ2IjoiMSJ9.Mgjh9VMKA73aZdvspVWpIoFOTydN9PlVGIx7NmBBXVC8tGrLfRZKu3x4smN7tRW4-C0kGwyLIFGV8W8pg1hWChmpinRzz2AEJPVuiS98GAkF0ICVjeTdO0XOa4ZVutHGriqGvtBphqdqY2hiaigFH33TIlmG4om3fl8x1eL0zoBNcXAUJqg1Sp8rE4fx5zC150pm8-QkmyeettxCP_j8ov7ZtNhkTxhPFP5h6MeuLAg.GpCX6TsIE_yY-zvM1kMNJSW2BcFq0UczY9L5Sb8P2Y4&dib_tag=se&keywords=mahabharat+gita+press&nsdOptOutParam=true&qid=1735469837&sprefix=mahabharat+gita+press%2Caps%2C214&sr=8-3",
  },
  {
    id: 4,
    name: "Srimad Bhagavatam",
    image: "https://m.media-amazon.com/images/I/71GyqIqg5nL._SX550_.jpg",
    link: "https://www.amazon.in/Bhagavata-Mahapurana-English-Gorakhpur-Contains/dp/B08BC68GBP/ref=sr_1_4?crid=3HVYUD4JA398L&dib=eyJ2IjoiMSJ9.hQeF3Z1Hw9NQpCnxjBALMW3_EWgsln3AVJXJr-bOCflkka5rDsG_aC7us3wkRlmMg8OdtdtrgTHxqyVKgyXM_mOsJ-so50BXNdcOSQYGT_dJwTxIYT3rgSzlv8q51oPCnZ4aOgmKE3MXZMfrv_qntOjhcWWLRLZvJkD8_B7RtcVf9ooLUPXcGVhZaOYpLcld73Of30qHhOOcp32wNhRJGXQVyhT3H7l-wkCbg-DTTp8.axulesU4je_j0MpPJoHdj_1Gc-C2wNZWMdaMdc9e0_U&dib_tag=se&keywords=srimad+bhagavatam+gita+press&qid=1735469890&sprefix=srimad+bhagavatam+gita+press%2Caps%2C209&sr=8-4",
  },
];

const Books = () => {
  return (
    <div className="books-container">
      <h2 className="books-title">Books to read</h2>
      <div className="books-content">
        {booksList.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
