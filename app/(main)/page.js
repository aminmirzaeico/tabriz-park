import Image from 'next/image';
import Navbar from '../components/Navbar';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Links from './links';
import parkings from './parkings';
import { ParkingCard } from '../components/ParkingCard';
import { FAQ } from '../components/FAQ';

export default function Home() {
  const description = "قبل از خروج از خانه، پارکینگ خود را رزرو کنید تا دیگر معطل گشتن دنبال جای پارک نباشید. حتی میتوانید یک جای پارک را از چند روز قبل رزرو کنید"


  return (
    <main className="relative  flex flex-col items-center justify-start bg-white dark:bg-[#1a1a1a]">
      <Navbar />
      <div className="relative flex flex-col flex-wrap w-[97%] sm:w-[95%] md:w-[95%] mt-28 bg-green-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 p-2 lg:px-32 min-h-screen z-10 rounded-lg pb-5 -mb-32">
        <div className='flex flex-col md:flex-row text-center md:text-right w-full items-center md:items-start md:p-10'>
          <div className='md:w-full h-full'>
            <Image
              src="/landing.webp"
              alt="Landing Image"
              className="text-center rounded-lg shadow-xl"
              width={400}
              height={24}
              priority
            />
          </div>
          <div className='w-full h-full text-center md:text-right'>
            <h1 className='w-full font-bold text-2xl mt-6 text-center md:text-right'>تجربه زندگی راحت تر با <span className='text-green-400 flex-nowrap text-5xl text-center'><br />تبریز پارک</span></h1>
            <br />
            <p className='ml-10'>{description}</p>
            <div className='w-full h-full py-10 px-10 flex items-center justify-center md:justify-start'>
              <button type="button" class="inline-flex items-center text-green-400 hover:text-white border-2
             border-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium 
             rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-400 dark:text-green-400
              dark:hover:text-white dark:hover:bg-green-400 dark:focus:ring-green-400">
                <ArrowLeftIcon className='w-4 h-4 mr-3' />
                ورود به وب اپ
              </button>
            </div>
          </div>
        </div>
        <Links />
        <div className='flex flex-col flex-wrap items-center justify-center my-10'>
          <h1 className='w-full font-bold text-3xl my-6 text-center '>لیست پارکینگ ها</h1>

          <div className='flex flex-row gap-3 flex-wrap items-center justify-center p-3' dir="rtl">
            {parkings.parkings.map((parking) => (
              <ParkingCard name={parking.name} address={parking.address}
                capacity={parking.capacity} freeSpace={parking.freeSpace} imageUrl={parking.imageUrl} />
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center justify-center my-10 min-w-72'>
          <h1 className='w-full font-bold text-3xl my-6 text-center '>سوالات متداول</h1>
          <FAQ />
        </div>
      </div>
    </main>
  );
}
