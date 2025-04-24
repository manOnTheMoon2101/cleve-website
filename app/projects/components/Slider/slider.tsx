import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import weather from "@/public/images/cleveland.png";
import Image from 'next/image';
export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className='bg-primary text-accent'>
     <div>
     <h1 className='text-2xl'>Weight Management App</h1>
     <Image src={weather} alt='Weather App' width={200} height={400} />
     </div>
     <div>
     <h1 className='text-2xl'>Weather App</h1>
     <Image src={weather} alt='Weather App'  width={200} height={400}/>
     </div>
    </InfiniteSlider>
  );
}
