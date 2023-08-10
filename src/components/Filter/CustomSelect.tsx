import { SearchRegionCountries } from '@helpers/getCountries';

export default function CustomSelect({ setCountries, region, setRegion }: any) {
  const searchByRegion = (evt: any) => {
    const data = evt ? evt.target.value : evt;
    setRegion(data);
    SearchRegionCountries(data).then(setCountries);
  };

  return (
    <div className="relative lg:w-2/4 w-44">
      <select
        className=" lg:text-sm w-full h-12 pl-4 font-semibold rounded outline-0 custom-select"
        onChange={searchByRegion}
        value={region}
      >
        <option disabled value={''} className="hidden">
          Filter by region
        </option>
        <option className="font-semibold rounded pt-6" value={'Africa'}>
          Africa
        </option>
        <option className="font-semibold rounded pt-6" value={'America'}>
          America
        </option>
        <option className="font-semibold rounded pt-6" value={'Asia'}>
          Asia
        </option>
        <option className="font-semibold rounded pt-6" value={'Europe'}>
          Europe
        </option>
        <option className="font-semibold rounded pt-6" value={'Oceania'}>
          Oceania
        </option>
      </select>

      <button
        type="button"
        className="absolute top-4 end-7 hover:text-dark-gray transition outline-0"
        style={{ display: region ? 'block' : 'none' }}
        onClick={() => searchByRegion('')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
