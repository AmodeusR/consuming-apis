
const fetchDataApi = async () => {
  // A API criada em server.js
  // const myApi = "http://localhost:4567/"
  // API advinda do site JSON Placeholder, por possuir as mesmas características utilizadas no código, são intercambiáveis
  const myApi = "https://jsonplaceholder.typicode.com/users"
  try {
    const response = await fetch(myApi);
    const usersData = await response.json()
    
    usersData.forEach(user => {
      insertUser(user);
    })
  } catch (err) {
    console.log(err);
  }

}

fetchDataApi();

const tableBody = document.querySelector(".table-body");

const insertUser = ({name, id}) => {
  const newTableRow = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdId = document.createElement("td");

  tdName.textContent = name;
  tdId.textContent = id;

  newTableRow.append(tdName, tdId) ;

  tableBody.append(newTableRow);
}