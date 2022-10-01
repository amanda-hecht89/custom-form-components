/* eslint-disable react/prop-types */

export default function ColorCard({ color }) {
  return <article>
    <h2>{color.color}</h2>
    <dl>
      <dt>Shades</dt>
      <dd>{color.shade_1} {color.shade_2}</dd>
    </dl>
  </article>;
}
