import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const { image_url, details, title, category_id } = news;
    return (
        <div className="border border-gray-200 p-4 rounded mt-3">
            <div className="space-y-2">
                <img src={image_url} alt="image_url" className="object-cover w-full rounded" />
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-accent">{details}</p>
                <Link to={`/category/${category_id}`} className="btn btn-secondary">
                    <FaArrowLeftLong />
                    All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;