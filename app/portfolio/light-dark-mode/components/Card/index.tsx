import "./index.css";

export default function Card(props) {
  return (
    <div className={`main-card ${props.isDark ? "dark" : ""}`}>
      <h1>Fun facts about React</h1>

      <ul className="main-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
