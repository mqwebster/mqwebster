import Image from "next/image";
import { useState, useEffect } from "react";
import "./index.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "",
  });

  const [allMemesData, setAllMemesData] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const { memes } = data.data;
        setAllMemesData(memes);
      });
  }, []);

  const getMemeImage = () => {
    const randNum = Math.floor(Math.random() * allMemesData.length);
    const url = allMemesData[randNum].url;

    setMeme((prevState) => ({
      ...prevState,
      image: url,
    }));
  };

  const handleClick = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className="meme-form">
      <div className="meme-form__inputs">
        <input
          type="text"
          placeholder="Meme Upper Text"
          className="meme-form__input top"
          name="topText"
          value={meme.topText}
          onChange={handleClick}
        />
        <input
          type="text"
          placeholder="Meme Lower Text"
          className="meme-form__input bottom"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleClick}
        />
      </div>

      <div className="meme-form__submit">
        <button
          type="button"
          name="button"
          // value="Get a new meme image 🖼"
          className="meme-form__btn"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>

      {meme.image && (
        <div className="meme-img">
          <Image
            src={meme.image}
            width={100}
            height={100}
            className="meme-img__inner"
            alt="Meme"
          />
          <h1 className="meme-img__text top">{meme.topText}</h1>
          <h1 className="meme-img__text bottom">{meme.bottomText}</h1>
        </div>
      )}
    </div>
  );
}
