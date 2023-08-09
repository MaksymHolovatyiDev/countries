import { ParamsTypes } from '@Types';
import BackBtn from '@components/BackBtn/BackBtn';
import CurrentCountry from '@components/CurrentCountry/CurrentCountry';
import Header from '@components/Header/Header';

export default function Country({ params }: ParamsTypes) {
  return (
    <>
      <Header />
      <main>
        <section className="px-20 py-8">
          <BackBtn />
          <CurrentCountry path={params.id} />
        </section>
      </main>
    </>
  );
}
