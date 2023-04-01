/* File menampilkan UI */

/* Import Library React */
import React from "react"
import Navbar from "./components/Navbar";
import Main from "./Main";

/* Function Component (Arrow) */
const App = () => {
  return (  // mengembalikan element yang dikirim dalam bentuk JSX
    <div>
      {/* Menampilkan element yang dikirim */}
      <Navbar />
      <Main />
    </div>
  )
}

export default App; // Melakukan pengiriman supaya class dapat digunkaan di file lain
