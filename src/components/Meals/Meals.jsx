import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
  const { data } = useLoaderData();

  return (
    <div className="container">
      <span className="text-4xl">All Meals</span>
      <div className="grid grid-cols-4 gap-4">
        {data.meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
