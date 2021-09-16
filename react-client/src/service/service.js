import api from "../api";

const getAllTutorials = () => {
  return api.get("/tutorials");
};

const getTutorial = (id) => {
  return api.get(`/tutorials/${id}`);
};

const addTutorial = (data) => {
  return api.post("/tutorials", data);
};

const updateTutorial = (tutorialId, data) => {
  return api.put(`/tutorials/${tutorialId}`, data);
};

const deleteTutorial = (tutorialId) => {
  return api.delete(`/tutorials/${tutorialId}`);
};

const deleteAllTutorial = () => {
  return api.delete("/tutorials");
};

const findByTitle = (title) => {
  return api.get(`/tutorials?title=${title}`);
};

const DataService = {
  getAllTutorials,
  getTutorial,
  addTutorial,
  updateTutorial,
  deleteTutorial,
  deleteAllTutorial,
  findByTitle,
};

export default DataService;
