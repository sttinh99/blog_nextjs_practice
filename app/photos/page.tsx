import Image from "next/image";
import dog1 from "../../public/images/dog1.png";
import dog2 from "../../public/images/dog2.png";
import dog3 from "../../public/images/dog3.png";
import dog4 from "../../public/images/dog4.png";

export default function PhotosPage() {
  return (
    <div>
      <h1 className="text-2xl mb-8 font-semibold">My PhotosPage</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-60 overflow-hidden">
          <Image src={dog1} alt="dog1" className="w-full h-full object-cover" />
        </div>
        <div className="h-60 overflow-hidden">
          <Image src={dog2} alt="dog2" className="w-full h-full object-cover" />
        </div>
        <div className="h-60 overflow-hidden">
          <Image src={dog3} alt="dog3" className="w-full h-full object-cover" />
        </div>
        <div className="h-60 overflow-hidden">
          <Image src={dog4} alt="dog4" className="w-full h-full object-cover" />
        </div>
        {/* <div className="h-60 overflow-hidden">
          <img src='/images/dog1.png' alt="dog4" className="w-full h-full object-cover" />
        </div> */}
      </div>
    </div>
  );
}
