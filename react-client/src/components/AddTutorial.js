import { useState } from "react";
import DataService from "../service/service";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submit, setSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    const data = {
      title: tutorial.title,
      description: tutorial.description,
    };

    DataService.addTutorial(data)
      .then((response) => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
        });
        setSubmit(true);
      })
      .catch((err) => console.log(err));
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmit(false);
  };

  return (
    <div className="submit-form">
      {submit ? (
        <div>
          <h4>Submitted successfully.</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <button className="btn btn-success" onClick={saveTutorial}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
