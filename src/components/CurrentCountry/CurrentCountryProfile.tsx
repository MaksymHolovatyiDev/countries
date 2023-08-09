

import { CurrentCountryProfileType } from '@Types';
import BorderCountriesBtns from '@components/BorderCountriesBtns/BorderCountriesBtns.';
import CountryData from '@components/CountryData/CountryData';

export default function CurrentCountryProfile({
  data,
}: CurrentCountryProfileType) {
  return (
    <div className="flex space-x-36">
      <img
        className="imgH"
        width="40%"
        src={data.flags.png}
        alt={data.flags.alt}
      />
      <div className="flex flex-col justify-center grow">
        <p className="font-extrabold text-2xl mb-8">{data.name.common}</p>

        <CountryData data={data} />

        <BorderCountriesBtns countries={data.borders} />
      </div>
    </div>
  );
}
