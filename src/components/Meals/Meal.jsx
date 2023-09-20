import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  return (
    <div className="flex flex-col p-4 border-2 border-green-600 hover:shadow-2xl">
      <div>
        <img src={meal.strMealThumb} alt="" width={"100%"} />
      </div>
      <div className="flex-grow">
        <h4 className="text-3xl">{meal.strMeal}</h4>
        <h5>{meal.strCategory}</h5>
      </div>
      <Link className="w-full block py-3 " to={`/meal/${meal.idMeal}`}>
        <button className="bg-green-500 w-full py-3">View Details</button>
      </Link>
    </div>
  );
};

export default Meal;
