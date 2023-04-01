/* File Logic Proccess Navbar */

/* Import Library React */
import React from "react"
import { Route, Switch } from "react-router-dom";

/* Import Class for Route */
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Notfound from "./pages/Notfound"
import Buku from "./pages/Buku"

/* Function Component (Arrow) */
const Main = () => {
    return (    // mengembalikan element yang dikirim dalam bentuk JSX
        /* Logic Switch (jika) */
        <Switch>
            <Route exact path="/" component={Home} />  {/* Jika component = Home maka tampilkan router Home */}
            <Route path="/about" component={About} />   {/* Ji  ka component = About maka tampilkan router About */}
            <Route path="/contact" component={Contact} />   {/* Jika component = Contact maka tampilkan router Contact */}
            <Route path="/gallery" component={Gallery} />   {/* Jika component = Gallery maka tampilkan router Gallery */}
            <Route path="/buku" component={Buku} />   {/* Jika component = Gallery maka tampilkan router Gallery */}
            <Route path="*" component={Notfound} />
        </Switch>
    )
}
export default Main;    // Melakukan pengiriman supaya class dapat digunkaan di file lain
