export default function TypeLockup() {
  return (
<section className="w-full min-h-[80vh] flex items-center">      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
          
          {/* Top Row */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Your Headline Here
            </h2>
            <p className="text-gray-600">
              Short supporting text goes here. Keep it tight.
            </p>
          </div>

          {/* Bottom Row (Features) */}
          <div className="flex gap-4 mt-6">
            <div className="flex-1 p-3 border rounded-lg">
              <p className="font-medium text-sm">Feature One</p>
              <p className="text-xs text-gray-500">Small detail</p>
            </div>

            <div className="flex-1 p-3 border rounded-lg">
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
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
