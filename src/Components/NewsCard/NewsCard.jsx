import { FaRegEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { LuBookmark } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
    const { title, author, rating, total_view, thumbnail_url, details, tags } = news;

    const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

    return (
        <div className="card bg-base-100 shadow-xl rounded-lg">
            {/* Header */}
            <div className="flex items-center bg-base-200 justify-between px-4 p-2 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="text-gray-500 text-xl hover:text-primary">
                        <LuBookmark />
                    </button>
                    <button className="text-gray-500 text-xl hover:text-primary">
                        <IoShareSocialOutline />
                    </button>
                </div>
            </div>

            {/* Title */}
            <div className="px-4 py-2">
                <h2 className="font-bold text-lg leading-snug">{title}</h2>
            </div>

            {/* Image */}
            <figure className=" px-4">
                <img src={thumbnail_url} alt="news thumbnail" className="w-full h-56 object-cover rounded-[6px]" />
            </figure>

            {/* Details */}
            <div className="px-4 py-3 text-accent text-sm">
                {details.length > 200 ? (
                    <>
                        {details.slice(0, 200)}...
                        <span className="text-orange-500 font-semibold cursor-pointer hover:underline">Read More</span>
                    </>
                ) : (
                    details
                )}
            </div>

            {/* Tags */}
            <div className="px-4 flex flex-wrap gap-2 text-xs text-blue-600 mb-3">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 px-2 py-1 rounded-full capitalize">
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 border-t border-gray-200"></div>
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center text-yellow-500">
                    {Array(rating.number)
                        .fill()
                        .map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    <span className="ml-2 text-gray-700">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
