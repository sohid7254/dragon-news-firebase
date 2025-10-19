import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";

const CategoryNEws = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
        } else if (id == "1") {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filterNews);
        } else {
            const filterNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filterNews);
        }
    }, [id, data]);
    return (
        <div>
            <p className="font-bold mb-5">
                Total <span className="text-secondary">{categoryNews.length}</span> News Found
            </p>

            <div className="grid grid-cols-1 gap-5">
                {categoryNews.map((news) => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                ))}
            </div>
        </div>
    );
};

export default CategoryNEws;
