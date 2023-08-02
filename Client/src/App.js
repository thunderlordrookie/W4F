// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



















import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    predictedAnswer: "",
    shoeSize: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5002/api/form", form);
      console.log(response.data);
      fetchFormData();
    } catch (error) {
      console.error("Error occurred while submitting form: ", error);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const fetchFormData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/form");
      setData(response.data);
    } catch (error) {
      console.error("Error occurred while fetching form data: ", error);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name="name" onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" onChange={handleChange} /></label>
        <label>Phone Number: <input type="text" name="phoneNumber" onChange={handleChange} /></label>
        <label>Predicted Answer: <input type="text" name="predictedAnswer" onChange={handleChange} /></label>
        <label>Shoe Size:
          <select name="shoeSize" onChange={handleChange}>
            {[...Array(10)].map((e, i) => 
              <option key={i} value={i + 4}>{i + 4}</option>
            )}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Predicted Answer</th>
            <th>Shoe Size</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.predictedAnswer}</td>
              <td>{item.shoeSize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

