import "./Button.css"

const Increment = ({ plus }) => {

    return (
        <div>
            <button onClick={plus}>Plus</button>
        </div>
    );
};

export default Increment;