export default function TypeLockup() {
  return (
    <section className="w-full h-screen">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row h-full">
        
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col h-full">
          
  {/* Top Row */}
<div className="h-1/2 border border-transparent hover:border-black transition-colors flex items-center">
  <div className="p-6">
    <h2 className="text-3xl md:text-4xl font-semibold mb-3">
      Your Headline Here
    </h2>
    <p className="text-gray-600">
      Short supporting text goes here.
    </p>
  </div>
</div>

{/* Bottom Row */}
<div className="h-1/2 border border-transparent hover:border-black transition-colors flex items-center">
  <div className="w-full flex gap-4 p-6">
    <div className="flex-1 border rounded-lg p-4">
      <p className="font-medium text-sm">Feature One</p>
      <p className="text-xs text-gray-500">Small detail</p>
    </div>

    <div className="flex-1 border rounded-lg p-4">
      <p className="font-medium text-sm">Feature Two</p>
      <p className="text-xs text-gray-500">Small detail</p>
    </div>
  </div>
</div>

        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 h-full">
          <img
            src="/muffler1.jpg"
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
