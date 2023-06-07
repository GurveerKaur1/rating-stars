import Star from './Star';
import { useState } from 'react';

function StarRating() {
    const [rating, setRating] = useState(0);
    const ratings = {
        1: "Terrible",
        2: "Bad",
        3: "Good",
        4: "Very Good",
        5: "Excellent"
    }
    const [word, getWord] = useState(ratings[0]);

    const clickStar = (index) => {
        setRating(index + 1);
        getWord(ratings[index + 1])
    };

    return (
        <div className="container">
        <div className="child">
            {[...Array(5)].map((_, i) => (
                <Star
                    filledStars={i < rating}
                    onClick={() => clickStar(i)}
                />
            ))}
            </div>
            <h2 className='ratings'>{word}</h2>

        </div>
    );
}

export default StarRating;
