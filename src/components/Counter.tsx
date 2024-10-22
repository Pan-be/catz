import React from "react";
import useCounter from "../custom_hooks/useCounter";

const Counter: React.FC = () => {

    const [count, increment] = useCounter(0)

    return (
        <div className="flex justify-center items-center gap-4">
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;

