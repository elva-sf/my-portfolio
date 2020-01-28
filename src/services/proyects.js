export default () => {
  return fetch("http://localhost:3000/api/proyects.json")
    .then(response => response.json())
    .then(responseData => responseData.proyects);
};
