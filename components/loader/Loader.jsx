import { RotatingLines } from 'react-loader-spinner';

export default function Loader({ basic }) {
  if (basic) {
    return (
      <div className='flex justify-center items-center min-h-52 w-full h-full'>
        <RotatingLines width='30' />
      </div>
    );
  }

  return (
    <div className='w-screen h-screen fixed z-[999]'>
      <div className='fixed z-[999] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <RotatingLines width='30' />
      </div>
    </div>
  );
}
