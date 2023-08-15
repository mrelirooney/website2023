import { useEffect, useState } from "react";
import axios from 'axios';

function Tgims(){
    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    axios.get('http://127.0.0.1:8000/tgims/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

  return (
    <div>
      {/* Display fetched data */}
      {data.length > 0 && (
          <div>
              <br></br>
              <h3 className="title00">"{data[0].title}"</h3>
              <h4 className="title01">"{data[0].description}"</h4>
              <br></br>
          </div>
      )}
    </div>
  );
};

export default Tgims;