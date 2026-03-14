import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function color_change(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            {COLORS.map((c) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    key={c}
                    id={`color-${c}`}
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={color_change}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
