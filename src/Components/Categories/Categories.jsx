import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
    const categories = use(categoriesPromise);

    return (
        <div>
            <p className="font-bold text-gray-600">
                All Categoris (<span className="text-black">{categories.length}</span>)
            </p>
            <div className="grid grid-cols-1 mt-4 gap-3">
                {categories.map((category) => (
                    <NavLink key={category.id} className={"btn bg-white border-0 hover:bg-base-200 text-accent font-semibold"} to={`/category/${category.id}`}>
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
