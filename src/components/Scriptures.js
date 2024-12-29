import React from "react";
import ScriptureCard from "./ScriptureCard";
import "./Scriptures.css";

const scripturesList = [
  {
    id: 1,
    name: "Maha Lakshmi Ashtakam",
    image:
      "https://spiderimg.amarujala.com/assets/images/2016/10/26/devi-laxmi_1477488598.jpeg",
    path: "mahalaxmi-ashtakam",
  },
  {
    id: 2,
    name: "Hanuman Chalisa",
    image:
      "https://imgeng.jagran.com/images/2021/apr/22_12_2020-bajrangbali-mantra_211891391617695451006.jpg",
    path: "hanuman-chalisa",
  },
  {
    id: 3,
    name: "Shlokas to Remember",
    image: "https://images-na.ssl-images-amazon.com/images/I/61ZjJZDKAIL.jpg",
    path: "shlokas-to-remember",
  },
  {
    id: 4,
    name: "Shiva Tandava Stotram",
    image:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/03/whatsapp-image-2021-03-11-at-11-1615442109.jpeg",
    path: "shiva-tandava",
  },
  {
    id: 5,
    name: "Hanuman Ashtakam",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/hanumanstory_647_042216105140.jpg",
    path: "hanuman-ashtakam",
  },
  {
    id: 6,
    name: "Nitya Parayana Slokas",
    image: "https://images-na.ssl-images-amazon.com/images/I/61ZjJZDKAIL.jpg",
    path: "nitya-parayana-slokas",
  },
  {
    id: 7,
    name: "Sri Surya Namaskara Mantram",
    image:
      "https://i.pinimg.com/564x/5b/d1/91/5bd191ee13c95f0f4c3bd0e9f0101701.jpg",
    path: "surya-namaskar-mantra",
  },
  {
    id: 8,
    name: "Kalabhairava Ashtakam",
    image:
      "https://3.bp.blogspot.com/-kOOybedRE1c/Vm15ZS-eHUI/AAAAAAAABsI/-PolEIC31Uc/s1600/Shiva2.jpg",
    path: "kalabhairava-ashtakam",
  },
  {
    id: 9,
    name: "Shiva Sahasra Nama Stotram",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp385wroZML_N2YF_0qO6xr64BmIyitJ_PA&usqp=CAU",
    path: "shiva-sahasranama",
  },
];

const Scriptures = ({ onNavigate }) => {
  const handleScriptureSelect = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="scriptures-container">
      <h2 className="scriptures-title">Sacred Texts & Mantras</h2>
      <div className="scriptures-grid">
        {scripturesList.map((scripture) => (
          <ScriptureCard
            key={scripture.id}
            scripture={scripture}
            onSelect={handleScriptureSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Scriptures;
