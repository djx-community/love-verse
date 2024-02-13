import React, { ChangeEvent, FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// Interface for form fields
export interface UseFormInterFace {
    yourName: string;
    valentineName: string;
}

// Custom hook to manage form state and validation
export const useForm = () => {
    const navigate: NavigateFunction = useNavigate(); // Initialize navigate function from react-router-dom
    const [error, setError] = useState<{ valentineName: null | string, yourName: null | string }>({
        valentineName: null,
        yourName: null
    });

    const [formState, setFormState] = React.useState<UseFormInterFace>({
        yourName: "",
        valentineName: "",
    });

    // Function to handle input change
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormState({ ...formState, [name]: value });

        // Clear error if input is not empty
        if ((error.valentineName || error.yourName) && event.target.value === '') {
            setError((err) => ({ ...err, [name]: null }));
        }
    };

    // Function to handle form submission
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        // Validate form fields
        const { isValentineNameValid, isYourNameValid } = validate(formState);

        // Set error if validation fails
        if (!isYourNameValid) {
            return setError((err) => ({ ...err, yourName: 'Enter valid name!!' }));
        } else if (!isValentineNameValid) {
            return setError((err) => ({ ...err, valentineName: 'Enter valid name!!' }));
        }

        // Navigate to preview page if form is valid
        if (formState.valentineName && formState.yourName) {
            navigate(`/preview?yourName=${formState.yourName}&valentineName=${formState.valentineName}`);
        }
    };

    // Function to validate form fields
    const validate = ({ valentineName, yourName }: UseFormInterFace) => {
        const nameRegex = /^[a-zA-Z\s]+$/; // Regular expression for normal string (only alphabets and spaces)

        // Check if both valentineName and yourName are normal strings
        const isValentineNameValid = nameRegex.test(valentineName.trim());
        const isYourNameValid = nameRegex.test(yourName.trim());

        // Return validation results
        return { isValentineNameValid, isYourNameValid };
    };

    // Return form state, handlers, and validation function
    return { error, formState, handleChange, handleSubmit, validate };
};
