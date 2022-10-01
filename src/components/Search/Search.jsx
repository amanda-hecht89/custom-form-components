import { useState } from 'react';
import SearchForm from './SearchForm.jsx';
import ColorCard from './Color.jsx';
import { FormButton } from '../Forms/FormControl.jsx';
import { useLocation } from 'react-router-dom';
import { getAllColors } from '../../services/colors.js';
import styles from './Search.css';

export default function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search, [search]);
  const hex = query.get('hex');
  const searchText = query.get('searchText');
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState(null);

  const onSubmit = async (searchFormData) => {
    setPage(1);
    setFormData(searchFormData);
    const colorResults = await getAllColors(1, searchFormData);
    setSearchResults(colorResults.results);
  };
  const more = async () => {
    setPage(page + 1);
    const colorResults = await getAllColors(page + 1, formData);
    setSearchResults(searchResults.concat(colorResults.results));
  };

  return <section>
    <SearchForm
      hex={hex}
      searchText={searchText}
      onSubmit={onSubmit}
    />
    <ul className={styles.colorResultsList}>
      {searchResults.map(result => {
        return <li key={result._id} >
          <ColorCard color={result} />
        </li>;
      })}
    </ul>
    { searchResults.length > 0
      ? <FormButton onClick={more}>nexxt</FormButton>
      : ''
    }
  </section>;
}
