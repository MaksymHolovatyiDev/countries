import CrossSvg from '@assets/icons/CrossSvg';
import { useFilter } from '@components/FilterProvider/FilterProvider';

export default function CustomSelect() {
  const { region, setRegion } = useFilter();

  const searchByRegion = (
    evt: React.ChangeEvent<HTMLSelectElement> | string
  ) => {
    const data = typeof evt !== 'string' ? evt.target.value : evt;
    setRegion(data);
  };

  return (
    <div className="relative lg:w-2/4 w-44 shadow">
      <select
        className=" lg:text-sm w-full h-12 pl-4 font-semibold rounded outline-0 custom-select dark:bg-dark-blue"
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
        <CrossSvg className="w-4 h-4" />
      </button>
    </div>
  );
}
