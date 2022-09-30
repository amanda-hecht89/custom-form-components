/* eslint-disable react/prop-types */

import classnames from 'classnames';
import style from './FormControl.css';

function FormControl({ label, children }) {
  const className = classnames(style.FormControl, style.LabelText);
  return (<label className={className}>
    {label}
    {children}
  </label>);

}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest} />
    </FormControl>
  );
}
