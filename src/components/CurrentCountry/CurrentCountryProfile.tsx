import { CurrentCountryProfileType } from '@Types';
import BorderCountriesBtns from '@components/BorderCountriesBtns/BorderCountriesBtns.';
import CountryData from '@components/CountryData/CountryData';

export default function CurrentCountryProfile({
  data,
}: CurrentCountryProfileType) {
  return (
    <div className="flex lg:flex-col lg:space-y-10 lg:space-x-0 space-x-36">
      <img
        className="imgH"
        width="40%"
        src={data.flags.png}
        alt={data.flags.alt}
      />
      <div className="flex flex-col justify-center grow">
        <p className="font-extrabold text-2xl lg:mb-6 mb-8">
          {data.name.common}
        </p>

        <CountryData data={data} />

        <BorderCountriesBtns countries={data.borders} />
      </div>
    </div>
  );
}
