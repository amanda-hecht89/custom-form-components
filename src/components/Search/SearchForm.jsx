import useSearch from '../../hooks/use-search.js';
import { FormButton, SelectControl } from '../Forms/FormControl.jsx';

// eslint-disable-next-line react/prop-types
export default function SearchForm({ onSubmit, hex }) {
  const { hexes } = useSearch();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData);
    const params = new URLSearchParams(location.search);
    Array.from(formData.entries()).forEach(([k, v]) => {
      params.set(k, v);
    });
    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${params.toString()}`,
    );
  
  };
  return <form onSubmit={submitHandler}>
    <SelectControl label="Select Type" name="hex" value={hex}>
      {hexes.map(hex => {
        return <option key={hex} value={hex}>{hex}</option>;
      })}
    </SelectControl>
    <FormButton type="submit">Search</FormButton>
  </form>;
}
