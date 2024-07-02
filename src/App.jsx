import "./App.css";
import "./utils/i18n";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar/>
            <Hero></Hero>
        </>
    );
}

export default App;
