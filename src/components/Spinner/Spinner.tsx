import { TailSpin } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className="flex justify-center mt-20">
      <TailSpin
        height="80"
        width="80"
        color="#436455"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
