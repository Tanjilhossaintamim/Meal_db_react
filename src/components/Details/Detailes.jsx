import { useLoaderData, useNavigate } from "react-router-dom";

const Detailes = () => {
  const { data } = useLoaderData();
  const { strMeal, strMealThumb, strInstructions } = data.meals[0];
  const navigate = useNavigate();

  return (
    <div className="container flex items-center space-x-8 mt-5">
      <div className="w-2/4 h-72">
        <img src={strMealThumb} alt="" width={"100%"} height={"100%"} />
      </div>
      <div className="w-2/4">
        <h1 className="text-2xl font-bold py-3">{strMeal}</h1>
        <p>{strInstructions}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-purple-700 to-teal-600 mt-3 rounded-lg text-white py-2 px-4"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Detailes;
