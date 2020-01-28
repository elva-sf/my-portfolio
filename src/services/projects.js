export default () => {
  return fetch("https://elva-sf.github.io/my-portfolio/api/projects.json")
    .then(response => response.json())
    .then(responseData => responseData.projects);
};
