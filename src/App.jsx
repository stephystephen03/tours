import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const fetchTours = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
        console.log(tours);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false)

    };
    fetchTours();
  }, []);
  {isLoading && <main><Loading/></main>}
  return (
    <main>
      {/* {tours && <Loading />} */}
      <Tours tours={tours}/>
    </main>
  );
};
export default App;
