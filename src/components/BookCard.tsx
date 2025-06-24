import React from "react";
import { Link } from "react-router-dom";

interface BookCardProps{
    id: string,
    title: string,
    image: string,
    price: number,
}

const BookCard: React.FC<BookCardProps> =({id, title, image, price}) => {
    return (
        <section>
            <div>
                <div className="border p-4 rounded">
                    <Link to={`/product/${id}`}>
                        <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />
                    </Link>

                    <h2 className="font-semibold">{title}</h2>
                    <p>${price}</p>
                </div>
            </div>
        </section>
    );
};

export default BookCard;