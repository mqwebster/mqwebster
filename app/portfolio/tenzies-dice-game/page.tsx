"use client";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import PortfolioPageHeader from "@/components/blocks/Portfolio/PortfolioPageHeader";
import Confetti from "react-confetti";
const Dice = dynamic(() => import("./Dice"), { ssr: false });

export default function Page() {
  const [dice, setDice] = useState(newDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const win = (arr) => {
      return arr.every((item) => item.isHeld && item.num === arr[0].num);
    };

    setTenzies(win(dice));
  }, [dice]);

  function newDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const singleDice = {
        id: 0,
        num: null,
        isHeld: false,
      };
      singleDice.id = i + 1;
      singleDice.num = Math.ceil(Math.random() * 6);
      diceArray.push(singleDice);
    }
    return diceArray;
  }

  function diceRoll() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        const newNum = Math.ceil(Math.random() * 6);
        return die.isHeld ? { ...die } : { ...die, num: newNum };
      })
    );
  }

  function diceHold(diceId) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return diceId === die.id ? { ...die, isHeld: !die.isHeld } : { ...die };
      })
    );
  }

  const diceElements = dice.map((item) => {
    return (
      <Dice
        key={item.id}
        id={item.id}
        num={item.num}
        isHeld={item.isHeld}
        diceHold={() => diceHold(item.id)}
      />
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="tenzies-dice-game"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16 mb-40"
      >
        <div className="flex flex-col">
          <PortfolioPageHeader
            title="Tenzies Dice Game"
            githubLink="https://github.com/mqwebster/mqwebster/tree/main/app/portfolio/tenzies-dice-game"
          />

          <div className="flex flex-col gap-16 w-full m-auto overflow-hidden">
            {tenzies && <Confetti />}

            <div className="flex flex-col items-center gap-4 m-auto">
              <h2 className="type-preset-3 font-title">{"Let's Play"}</h2>
              <p className="type-preset-base max-w-96 text-center">
                Click each die to freeze it at its current number between rolls.
                Roll untill all the dice are the same.
              </p>
            </div>

            <div className="grid grid-cols-5 m-auto gap-x-10 gap-y-12">
              {diceElements}
            </div>

            <button
              className="w-[160px] h-[52px] bg-blue-base text-white text-lg font-bold border-none rounded-lg m-auto"
              onClick={() => (tenzies ? setDice(newDice()) : diceRoll())}
            >
              {tenzies ? "New Game" : "Roll"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
