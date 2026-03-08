import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎆" | "🍀" | "🎃" | "🦃" | "🎄";

const NEXT_ALPHABET: Record<Holiday, Holiday> = {
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "🍀",
    "🍀": "🦃",
    "🦃": "🎄",
};

const NEXT_YEAR: Record<Holiday, Holiday> = {
    "🍀": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🍀",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function advanceAlphabet(): void {
        setHoliday(NEXT_ALPHABET[holiday]);
    }

    function advanceYear(): void {
        setHoliday(NEXT_YEAR[holiday]);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
