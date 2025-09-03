import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  classN?: string;
  max?: number;
}

export function StarRating({ rating, classN, max = 5 }: StarRatingProps) {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (i <= Math.floor(rating)) {
      // Estrella llena
      stars.push(<FaStar key={i} className={`text-secondary-400 ${classN}`} />);
    } else if (
      i === Math.floor(rating) + 1 &&
      rating % 1 >= 0.25 &&
      rating % 1 <= 0.75
    ) {
      // Media estrella
      stars.push(
        <FaStarHalfAlt key={i} className={`text-secondary-400 ${classN}`} />
      );
    } else if (i === Math.floor(rating) + 1 && rating % 1 > 0.75) {
      // Si está más cerca de la siguiente, redondeamos hacia arriba
      stars.push(<FaStar key={i} className={`text-secondary-400 ${classN}`} />);
    } else {
      // Estrella vacía
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
}
