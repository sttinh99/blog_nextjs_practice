export default function PhotosPage() {
  return (
    <div>
      <h1 className="text-2xl mb-8 font-semibold">My PhotosPage</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-60 overflow-hidden">
          <img src="images/dog1.png" className="w-full h-full object-cover"/>
        </div>
        <div className="h-60 overflow-hidden">
          <img src="images/dog2.png" className="w-full h-full object-cover"/>
        </div>
        <div className="h-60 overflow-hidden">
          <img src="images/dog3.png" className="w-full h-full object-cover" />
        </div>
        <div className="h-60 overflow-hidden">
          <img src="images/dog4.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
