import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';
import { Button } from './Button';


//defining the structure of each pills data
//for example id can be a number and image can be a string
interface PillData {
  id: number;
  image: string;
  text: string;
}


//data for the pills, each contains and id(key) and an image + text
const pillsData: PillData[] = [
  { id: 1, image: 'https://static.wixstatic.com/media/6fbfc3_a8625c966e064e48a7c019bf16aab4e7~mv2.jpg/v1/fill/w_1960,h_1186,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_a8625c966e064e48a7c019bf16aab4e7~mv2.jpg', text: 'U-9 2023 Legacy Tournament Team' },
  { id: 2, image: 'https://static.wixstatic.com/media/6fbfc3_85d2835757804c92b5e6cb94420d2346~mv2.jpg/v1/fill/w_1960,h_1186,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_85d2835757804c92b5e6cb94420d2346~mv2.jpg', text: 'U-10 2023 Legacy Tournament Team' },
  { id: 3, image: 'https://static.wixstatic.com/media/6fbfc3_2942a8bb7e5f4f4f94bb1594e268a117~mv2.jpg/v1/fill/w_1960,h_1186,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_2942a8bb7e5f4f4f94bb1594e268a117~mv2.jpg', text: 'U-11 2023 Legacy Tournament Team' },
  { id: 4, image: 'https://static.wixstatic.com/media/6fbfc3_67f8501902c84db0b8c4114ead4f9620~mv2.jpg/v1/fill/w_1960,h_1186,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_67f8501902c84db0b8c4114ead4f9620~mv2.jpg', text: 'U-12 2023 Legacy Tournament Team' },
  { id: 5, image: 'https://static.wixstatic.com/media/6fbfc3_6531b35e29ba4d2ba1e90d119ac864c1~mv2.jpg/v1/fill/w_1960,h_1186,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_6531b35e29ba4d2ba1e90d119ac864c1~mv2.jpg', text: 'U-14 2023 Legacy Tournament Team' },
  { id: 6, image: 'https://static.wixstatic.com/media/6fbfc3_692eb160962945b8a338d33475405646~mv2.jpg/v1/fill/w_1960,h_1186,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_692eb160962945b8a338d33475405646~mv2.jpg', text: 'U-16 2023 Legacy Tournament Team' },
];

//React.fc is an type alias for React.FunctionComponent
//this means that we are telling type script -  no need to specify the type of the props
export const InfoPills: React.FC = () => {
    //reference to scrollable container - where the pills are
  const containerRef = useRef<HTMLDivElement>(null);

  //function to scroll left
  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  //function to scroll right
  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  //return
  return (
    //div containing the pills
    <div className="flex items-center relative w-full max-w-7xl mx-auto overflow-hidden  rounded-lg">
        {/* button for left scroll */}
      <button
        onClick={scrollLeft}
        className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        {/* import from lucide */}
        <Button variant="circle"><ChevronLeft></ChevronLeft></Button>
      </button>

      {/* this is the actual scrollable container */}
      <div id='container'
        className="flex py-20 overflow-x-auto scroll-smooth w-full space-x-4 px-4 no-scrollbar rounded-xl "
        ref={containerRef} // reference to the container - allows it to scroll left right using functions
      >
        {/* map over each pill data and create a pill for each with the given info */}
        {pillsData.map((pill) => (
          <div
            key={pill.id}
            className="flex-shrink-0 w-64 shadow-md rounded-lg overflow-hidden bg-slate-800 bg-opacity-5 transform transition duration-300 ease-in-out hover:scale-105"
          >
            <img src={pill.image} alt={`Image ${pill.id}`} className="w-full h-80 object-cover rounded-xl " />
            <p className="p-4 text-center font-mono text-blue-900">{pill.text}</p>
          </div>
        ))}
      </div>
      {/* button for scrolling right */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <Button variant="circle"><ChevronRight></ChevronRight></Button>
      </button>
    </div>
  );
};

// export default InfoPills;
export default InfoPills;