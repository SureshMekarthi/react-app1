import React from "react";

function Form() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="from-control"></input>

        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="from-control"></input>
      </div>
    </form>
  );
}

export default Form;
