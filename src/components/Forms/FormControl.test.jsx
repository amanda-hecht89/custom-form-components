import { render, screen } from '@testing-library/react';
import { InputControl, SelectControl } from './FormControl.jsx';

test('input control should work', async () => {
  render(
    <InputControl
      label="color"
      name="color"
      required
      placeholder="your favorite color"
    />
  );

  const inputControl = screen.getByLabelText('color');
  expect(inputControl.name).toEqual('color');
  expect(inputControl.placeholder).toEqual('your favorite color');
  expect(inputControl.required).toEqual(true);
});

test('select control should render', async () => {
  render(
    <SelectControl label="shade" name="shade" required>
      <option>Light</option>
      <option>Dark</option>
      <option>Pastel</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('shade');
  expect(selectControl.name).toEqual('shade');
  expect(selectControl.required).toEqual(true);
  expect(selectControl.options.length).toEqual(3);
});
