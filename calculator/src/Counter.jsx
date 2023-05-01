import "./Counter.css";
import { useState } from "react";
import Increment from "./IncrementButton";
import Decrement from "./DecrementButton";

const Counter = () => {
    const [number, setNumber] = useState(0);

    const handlePlus = () => {
        setNumber(number + 1);
    };

    const handleMinus = () => {
        setNumber(number - 1);
    };

    return (
        <div className="fullBody">
            <h1>COUNT IS
                <section className="numberStyle">{number}</section></h1>
            <section className="buttonBody">
                <Increment plus={handlePlus} />
                <Decrement minus={handleMinus} />
            </section>
        </div>
    );
};

export default Counter;