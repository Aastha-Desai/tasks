import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function switchType(): void {
        type === "short_answer_question" ?
            setType("multiple_choice_question")
        :   setType("short_answer_question");
    }

    return (
        <div>
            <Button onClick={switchType}>Change Type</Button>
            {type === "short_answer_question" ?
                <p>Short Answer</p>
            :   <p>Multiple Choice</p>}
        </div>
    );
}
