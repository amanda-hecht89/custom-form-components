import SearchResultCard from './SearchSoloCard.jsx';
import styles from './SearchForm';

export default function SearchResults({ results, infiniteScrollRef }) {
  return <ul className={styles.Forms}>
    {results.map((result, i) => {
      const ref = i == results.length - 3 ? infiniteScrollRef : undefined;
      return <SearchResultCard
        key={result._id}
        pokemon={result}
        infiniteScrollRef={ref}
      />;
    })}
  </ul>;
}
