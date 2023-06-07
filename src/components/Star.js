import { FaStar } from "react-icons/fa";
function Star(props) {
    return (
        <FaStar className={props.filledStars ? 'gold' : 'grey'}
            onClick={props.onClick} 
        />
    )
}

export default Star