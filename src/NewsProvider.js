import axios from "axios";

export const newsprovider = async (op) => {
  let data = [];
  const apiKey = "46936c29d52343a9abe269266381b6ed";
  const baseUrl = "http://newsapi.org/v2/";
  let variable;
  // console.log(typeof op);
  switch (parseInt(op)) {
    case 1:
      variable = "top-headlines?country=us&category=business&pageSize=50";
      break;
    case 2:
      variable = "everything?q=bitcoin&pageSize=50";
      break;
    case 3:
      variable = "top-headlines?sources=techcrunch";
      break;
    case 4:
      variable = "everything?domains=wsj.com&pageSize=50";
      break;
    case 5:
      variable = "everything?q=apple&pageSize=50";
      break;
    default:
      variable = "top-headlines?country=us&category=business&pageSize=50";
  }
  await axios
    .get(`${baseUrl}${variable}&sortBy=popularity&apiKey=${apiKey}`)
    .then((response) => {
      response.data.articles.forEach((element) => {
        data.push(element);
      });
    })
    .catch((error) => console.error(error));
  return data;
};
