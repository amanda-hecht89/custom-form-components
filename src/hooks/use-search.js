import { useEffect, useState } from 'react';
import { getColorSchemes } from '../services/colors.js';

export default function useSearch() {
  const [schemes, setSchemes] = useState([]);

  const searchEffect = () => {
    getColorSchemes().then(schemes => setSchemes(schemes.map(t => t.scheme)));
  };
  useEffect(() => searchEffect(), []);
  return {
    schemes,
  };
}
