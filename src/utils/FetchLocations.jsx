import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchLocations() {
  const [locations, setLocations] = useState(null);
  const [error, setError] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/locations`
        );
        setLocations(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { locations, error };
}
