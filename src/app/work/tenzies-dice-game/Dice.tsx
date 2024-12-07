export default function Dice(props) {
  return (
    <div
      className={`flex items-center justify-center w-[3.2rem] h-[3.2rem] md:w-24 md:h-24 heading-4 text-black font-title  rounded-lg drop-shadow-xl cursor-pointer ${
        props.isHeld ? "bg-blue-400" : "bg-white"
      }`}
      onClick={props.diceHold}
    >
      {props.num}
    </div>
  );
}
