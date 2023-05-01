import "./Button.css"

const Decrement = ({ minus }) => {
    return (
        <div>
            <button onClick={minus}>Minus</button>
        </div>
    );
};

export default Decrement;