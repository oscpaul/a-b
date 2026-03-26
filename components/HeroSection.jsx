export default function TypeLockup() {
  return (
    <section className="w-full min-h-[70vh] flex items-center py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 w-full">
        
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          
          {/* Top Row */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Your Headline Here
            </h2>
            <p className="text-gray-600">
              Short supporting text goes here.
            </p>
          </div>

          {/* Bottom Row (Features) */}
          <div className="flex justify-between w-full mt-10">
            
            <div className="w-[48%] p-4 border rounded-lg">
              <p className="font-medium text-sm">Feature One</p>
              <p className="text-xs text-gray-500">Small detail</p>
            </div>

            <div className="w-[48%] p-4 border rounded-lg">
              <p className="font-medium text-sm">Feature Two</p>
              <p className="text-xs text-gray-500">Small detail</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2">
          <img
            src="/muffler1.jpg"
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
