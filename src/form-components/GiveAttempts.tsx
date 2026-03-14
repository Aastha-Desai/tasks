import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    return (
        <div>
            <div>Attempts left: {attemptsLeft}</div>

            <Form.Group controlId="attempt-input">
                <Form.Label>Requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>

            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>

            <Button
                onClick={() => {
                    setAttemptsLeft(
                        attemptsLeft + (parseInt(requestedAttempts) || 0),
                    );
                }}
            >
                gain
            </Button>
        </div>
    );
}
