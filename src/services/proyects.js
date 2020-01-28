export default () => {
  return fetch("https://elva-sf.github.io/my-portfolio/api/proyects.json")
    .then(response => response.json())
    .then(responseData => responseData.proyects);
};
