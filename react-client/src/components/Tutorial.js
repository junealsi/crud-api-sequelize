import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DataService from "../service/service";

const Tutorial = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  const { id } = useParams();
  const history = useHistory();

  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const fetchTutorial = (tutorialId) => {
    DataService.getTutorial(tutorialId)
      .then((response) => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTutorial(id);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = (status) => {
    let data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status,
    };

    DataService.updateTutorial(currentTutorial.id, data)
      .then((response) => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const editTutorial = () => {
    DataService.updateTutorial(currentTutorial.id, currentTutorial)
      .then((response) => {
        console.log(response.data);
        setMessage("Edited successfully");
      })
      .catch((err) => console.log(err));
  };

  const deleteTutorial = () => {
    DataService.deleteTutorial(currentTutorial.id)
      .then((response) => {
        console.log(response.data);
        history.push("/tutorials");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>
          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              Unpublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}
          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={editTutorial}
          >
            Edit Tutorial
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
