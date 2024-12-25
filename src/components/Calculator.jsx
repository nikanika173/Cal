import { useState } from "react";
import "./Calculator.scss";

export const Calculator = () => {
    const [equation, setEquation] = useState("")

    const handleButtonClick = (value) => {
        setEquation((prev) => prev + value);
    };

    const deletePrev = () => {
        setEquation((prev) => prev.slice(0, -1))
    };

    const handleSubmit = () => {
        try {

            const result = eval(equation);
            setEquation(result.toString())
        } catch {
            setEquation("INVALID SYNTAX")
        }
    }

    const reset = () => {
        setEquation("");
    };

    const buttons = [
        { label: "7", value: "7" },
        { label: "8", value: "8" },
        { label: "9", value: "9" },
        { label: "DEL", action: deletePrev, className: "bl" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "+", value: "+" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "-", value: "-" },
        { label: ".", value: "." },
        { label: "0", value: "0" },
        { label: "/", value: "/" },
        { label: "*", value: "*" },
        { label: "RESET", action: reset, className: "bl x" },
        { label: "=", action: handleSubmit, className: "rl y" },
    ];

    return (
        <div className="screen">
            <div className="cal-frame">
                <div className="cal-screen">
                    <input
                        type="text"
                        className="cal-sc bottom"
                        value={equation}
                        readOnly
                    />
                </div>
                <div className="cal-btn">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            className={`sim-btn wl ${btn.className || ""}`}
                            onClick={() =>
                                btn.action ? btn.action() : handleButtonClick(btn.value)
                            }
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
