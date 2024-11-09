export default function Dice(props) {
  return (
    <div
      className={`flex items-center justify-center w-14 h-14 text-lg text-black font-body font-bold rounded-lg drop-shadow-xl cursor-pointer ${
        props.isHeld ? "bg-yellow-base" : "bg-white"
      }`}
      onClick={props.diceHold}
    >
      {props.num}
    </div>
  );
}
