import { useState } from 'react';

import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

export default function Filter({
  setCountries,
  countries,
  serFilteredCountries,
}: any) {
  const [region, setRegion] = useState('');

  return (
    <div className="mb-8 flex lg:flex-col justify-between ">
      <CustomInput
        serFilteredCountries={serFilteredCountries}
        countries={countries}
        region={region}
      />
      <CustomSelect
        setCountries={setCountries}
        setRegion={setRegion}
        region={region}
      />
    </div>
  );
}
