/* Base styles for all screen sizes */

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: darkgoldenrod;
}

.container {
  text-align: center;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 0 auto; /* Center the container horizontally */
}

.primary-color {
  color: goldenrod;
}

button {
  background-color: palegoldenrod;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: darkgoldenrod;
}

input[type="text"],
input[type="number"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px;
  width: 100%; /* Make inputs expand to full width */
}

#firstClassResult,
#multiplyResult,
#urlResult {
  margin-top: 10px;
  padding: 10px;
  background-color: grey;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

section h3 {
  font-size: 20px;
  color: goldenrod;
  margin-bottom: 10px;
}

section h5 {
  font-size: 14px;
  color: #777;
}

/* Media Queries for Responsive Design */

/* For screens with a maximum width of 600px (small screens) */
@media (max-width: 600px) {
  .container {
    max-width: 100%; /* Full width for small screens */
    padding: 10px; /* Reduce padding for small screens */
  }

  button {
    font-size: 14px; /* Reduce font size for buttons on small screens */
  }
}

