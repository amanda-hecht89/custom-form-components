import styles from './FormLayout.css';
import { InputControl } from './FormControl.jsx';

export default function Form() {
  return (
    <div className={styles.Forms}>
      <h1>FORM</h1>
      <form>
        <InputControl label="color" name="color" 
          placeholder="your favorite color"/>
      </form>
    </div>
  );

}
