import load from "../../assests/load2.gif";

export const Loading = () => {
  return (
    <main className='h-screen w-full overflow-hidden'>
      <div className='h-[400px]  w-full flex justify-center items-center'>
        <img src={load} alt='' />
      </div>
    </main>
  );
};
