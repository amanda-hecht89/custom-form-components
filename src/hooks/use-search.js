import { useEffect, useState } from 'react';
import { getColorSchemes } from '../services/colors.js';

export default function useSearch() {
  const [hexes, setHexes] = useState([]);

  const searchEffect = () => {
    getColorSchemes().then(hexes => setHexes(hexes.map(t => t.scheme)));
  };
  useEffect(() => searchEffect(), []);
  return {
    hexes,
  };
}
