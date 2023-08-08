import { ParamsTypes } from '@Types';
import BackBtn from '@components/BackBtn/BackBtn';
import CurrentCountry from '@components/CurrentCountry/CurrentCountry';

export default function Country({params}:ParamsTypes) {
  return (
    <>
      <BackBtn />
          <CurrentCountry path={ params.id} />
    </>
  );
}
