export default function MediaSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Top Content */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Main Headline Here
        </h2>

        <p className="text-gray-600 max-w-xl mb-6">
          Short supporting subheadline that explains the value clearly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            Primary
          </button>
          <button className="px-6 py-3 border rounded-lg">
            Secondary
          </button>
        </div>

        {/* Iframe Placeholder */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-2 border-dashed rounded-xl flex items-center justify-center mb-10">
          <span className="text-gray-400 text-sm">iframe goes here</span>
        </div>

        {/* SVG Links */}
        <div className="flex gap-6 mb-10">
          <a href="#" className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </a>

          <a href="#" className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <rect x="4" y="4" width="16" height="16" />
            </svg>
          </a>

          <a href="#" className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </a>
        </div>

        {/* Bottom Headline */}
        <h3 className="text-2xl md:text-3xl font-semibold">
          Secondary Headline Below
        </h3>

      </div>
    </section>
  );
}
