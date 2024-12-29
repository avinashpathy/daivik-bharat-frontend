// import React from "react";
// import "./Shloka.css";

// const Shloka = ({ title, speaker, verses, phalaShruti, conclusion }) => {
//   return (
//     <div className="shloka-container">
//       <h1 className="shloka-title">{title}</h1>

//       {speaker && <p className="shloka-speaker">{speaker}</p>}

//       <div className="verses-container">
//         {verses.map((verse, index) => (
//           <div key={index} className="verse-container">
//             <p className="verse-text">{verse}</p>
//             <p className="verse-number">॥ {index + 1} ॥</p>
//           </div>
//         ))}
//       </div>

//       {phalaShruti && (
//         <div className="phala-shruti">
//           <h2 className="phala-shruti-title">फलश्रुति</h2>
//           {phalaShruti.map((verse, index) => (
//             <div key={`phala-${index}`} className="verse-container">
//               <p className="verse-text">{verse}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {conclusion && <p className="conclusion">{conclusion}</p>}
//     </div>
//   );
// };

// export default Shloka;
