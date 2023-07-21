const BASE_URL = "https://jsonplaceholder.typicode.com";
const HEADERS = { "Content-Type": "application/json" };

const App = () => {
  const getData = (data) => {
    fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: HEADERS,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.messege));
  };

  const postData = (data) => {
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.messege));
  };

  const updateData = (data, id) => {
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.messege));
  };

  const deleteData = (id) => {
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.messege));
  };

  const fetchHandler = (event) => {
    switch (event.target.name) {
      case "get":
        getData();
        break;

      case "send":
        postData({ title: "Mohammad", body: "Test body", userId: 125 });
        break;

      case "update":
        updateData({ title: "Mohammad2", body: "Test body2", userId: 1245 }, 1);
        break;

      case "delete":
        deleteData(1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <button name="get" onClick={fetchHandler}>
        get Data
      </button>
      <button name="send" onClick={fetchHandler}>
        send Data
      </button>
      <button name="update" onClick={fetchHandler}>
        update Data
      </button>
      <button name="delete" onClick={fetchHandler}>
        delete Data
      </button>
    </>
  );
};

export default App;
