import styles from './FormLayout.css';
import { InputControl } from './FormControl.jsx';

export default function Form() {
  return (
    <div>
      <h1>FORM</h1>
      <div className={styles.Forms}>
        <form>

          <InputControl label="color" name="color" 
            placeholder="your favorite color"/>

          <InputControl label="other color" name="color" 
            placeholder="your second favorite color"/>  

        </form>
      </div>
    </div>
  );

}
