"use client";
import Button from "@/src/components/atoms/Button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
const Dice = dynamic(() => import("./Dice"), { ssr: false });

export default function Canvas() {
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
    <section
      id="tenzies-dice-game"
      className="w-full md:max-w-screen-xl z-0 px-8 py-16 mb-40"
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-16 w-full m-auto pb-8 overflow-hidden">
          {tenzies && <Confetti />}

          <div className="flex flex-col items-center gap-4 m-auto">
            <h2 className="heading-2 font-title">{"Let's Play"}</h2>
            <p className="body-lg max-w-96 text-center">
              Click each die to freeze it at its current number between rolls.
              Roll untill all the dice are the same.
            </p>
          </div>

          <div className="grid grid-cols-5 m-auto gap-2 md:gap-x-10 md:gap-y-12">
            {diceElements}
          </div>

          {/* <button
            className="w-[160px] h-[52px] bg-blue-base text-white text-lg font-bold border-none rounded-lg m-auto"
            onClick={() => (tenzies ? setDice(newDice()) : diceRoll())}
          >
            {tenzies ? "New Game" : "Roll"}
          </button> */}
          <button
            className={
              "m-auto w-fit rounded-lg border border-black bg-transparent text-white dark:border-white relative group transition duration-200"
            }
            onClick={() => (tenzies ? setDice(newDice()) : diceRoll())}
          >
            <div className="px-10 py-3">
              <div className="rounded-lg absolute -bottom-2 right-2 bg-blue-base group-hover:bg-blue-dark h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
              <span className="relative w-full">
                {tenzies ? "New Game" : "Roll"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
