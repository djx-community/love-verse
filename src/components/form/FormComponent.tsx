import React from "react"; // Import React library
import QuillPenIcon from "../../assets/quill-pen.png"; // Import QuillPenIcon image
import { useForm } from "./Helper"; // Import custom useForm hook
import "./FormComponent.css";

const FormComponent: React.FC = () => {
  // Define FormComponent functional component
  const { error, formState, handleSubmit, handleChange } = useForm(); // Destructure values from useForm hook

  return (
    <form className="gap-2 d-flex flex-column w-100" onSubmit={handleSubmit}>
      {" "}
      {/* Form element */}
      <div className="d-flex gap-md-1 flex-md-row flex-column align-items-center mt-2">
        {" "}
        {/* Div for input fields */}
        <div className="w-100">
          {" "}
          {/* Div for "Your Name" input */}
          <input
            required
            type="text"
            className={`form-control rounded-pill ${
              // Input field for "Your Name"
              error.yourName !== null ? "is-invalid" : "" // Conditionally add 'is-invalid' class if error exists
            }`}
            id="exampleInputYourName"
            aria-describedby="validationServerYourNameFeedback"
            placeholder="Your Name"
            name="yourName"
            value={formState.yourName}
            onChange={handleChange}
            autoComplete="off" // disable autocomplete
            maxLength={15} // max length of 15 characters
          />
          <div
            id="validationServerYourNameFeedback"
            className="invalid-feedback"
          >
            {error.yourName} {/* Display error message for "Your Name" input */}
          </div>
        </div>
        <span className="text-danger fs-5 lh-0">&</span> {/* "&" symbol */}
        <div className="w-100">
          {" "}
          {/* Div for "Valentine's Name" input */}
          <input
            required
            type="text"
            className={`form-control rounded-pill ${
              error.valentineName !== null ? "is-invalid" : "" // Input field for "Valentine's Name"
            }`}
            id="exampleInputValentine"
            placeholder="Valentine's Name"
            name="valentineName"
            value={formState.valentineName}
            onChange={handleChange}
            aria-describedby="validationServerValentineNameFeedback"
            autoComplete="off" // disable autocomplete
            maxLength={15} // max length of 15 characters
          />
          <div
            id="validationServerValentineNameFeedback"
            className="invalid-feedback"
          >
            {error.valentineName}{" "}
            {/* Display error message for "Valentine's Name" input */}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-danger 
        rounded-pill mt-1 d-flex gap-2 align-items-center justify-content-center"
      >
        <img src={QuillPenIcon} width="24px" height="24px" />{" "}
        {/* QuillPenIcon image */}
        Craft Our Story {/* Button text */}
      </button>
    </form>
  );
};

export default FormComponent; // Export FormComponent
