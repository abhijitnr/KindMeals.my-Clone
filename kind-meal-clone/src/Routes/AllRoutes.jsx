import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MealDeals from "../Pages/MealDeals";
import Articles from "../Pages/Articles";
import Help from "../Pages/Help";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import MyRecipes from "../Pages/MyRecipes";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealdeals" element={<MealDeals />} />
        <Route path="/kindmoments" element={<h1>KindMoments</h1>} />
        <Route path="/hotpicks" element={<h1>Hot Picks</h1>} />
        <Route path="/recipes" element={<h1>Recipes</h1>} />
        <Route path="/directory" element={<h1>Directory</h1>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
