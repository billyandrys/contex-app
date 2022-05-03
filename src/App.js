import { MovieList } from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./contexts/UserContext";





function App() {
  

  return (
    <div >
    <UserProvider >
      <Navbar/>
      <MovieList/>
     </UserProvider> 
    </div>
  );
}

export default App;
