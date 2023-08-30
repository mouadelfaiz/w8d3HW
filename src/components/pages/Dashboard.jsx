import { Link } from "react-router-dom";
import data from "../data";

 const  Dashboard = () => {
  return (
    <div>
      <ul>
      {data.map((s) => {
        const { name, symbol } = s;
        return (
        <> 
      <li>
          <Link key={s.id} to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
      </li>
      </>)
    })}
      </ul>
    </div>
  );
};

export default Dashboard;