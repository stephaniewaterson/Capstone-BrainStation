import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchLocations() {
  const [locations, setLocations] = useState(null);
  const [error, setError] = useState(null);

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
  useEffect(() => {
    fetchData();
  }, []);

  return { locations, error, fetchData };
}
