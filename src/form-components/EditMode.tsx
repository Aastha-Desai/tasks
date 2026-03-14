import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function edit_changing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function name_changing(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function student_changing(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit_mode_switch"
                label="Edit Mode"
                checked={editMode}
                onChange={edit_changing}
            />

            {editMode ?
                <div>
                    <Form.Group controlId="name-input">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={name_changing}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={student_changing}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
