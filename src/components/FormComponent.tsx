import React, { ChangeEvent, FormEvent } from "react";
import QuillPenIcon from "../assets/quill-pen.png";

const FormComponent: React.FC = () => {
  const [formState, setFormState] = React.useState({
    yourName: "",
    valentineName: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    // console.log(formState);
  };
  return (
    <form className="gap-2 d-flex flex-column w-100" onSubmit={handelSubmit}>
      <div className="d-flex gap-md-1 flex-md-row flex-column align-items-center mt-2">
        <input
          type="text"
          className="form-control rounded-pill"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Your Name"
          name="yourName"
          value={formState.yourName}
          onChange={handleChange}
        />
        <span className="text-danger fs-5 lh-0">&</span>
        <input
          type="text"
          className="form-control rounded-pill"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Valentine's Name"
          name="valentineName"
          value={formState.valentineName}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-danger 
        rounded-pill mt-1 d-flex gap-2 align-items-center justify-content-center"
      >
        <img src={QuillPenIcon} width="24px" height="24px" />
        Craft Our Story
      </button>
    </form>
  );
};

export default FormComponent;
