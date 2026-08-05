import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

const countries = getCountries().map((code) => ({
  code,
  ddi: `+${getCountryCallingCode(code)}`,
}));

export default function DdiSelect({ value, onChange }) {
  return (
    <select className="ddi-select" value={value} onChange={(e) => onChange(e.target.value)}>
      {countries.map(({ code, ddi }) => (
        <option key={code} value={ddi}>
          {code} {ddi}
        </option>
      ))}
    </select>
  );
}