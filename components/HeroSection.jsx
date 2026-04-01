{/* Full Width Hero Section */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* Background Image - Full Width */}
  <img 
    src="/pic1.jpg" 
    alt="Auto Repair Shop"
    className="absolute inset-0 w-full h-full object-cover"
  />
  
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16 pb-12">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white mb-6">
      Get professional<br />
      auto care with{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        confidence.
      </span>
    </h1>
    
    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto mb-10">
      Expert auto repair and maintenance serving DuPage County, Lombard, Addison, and surrounding areas.
    </p>

    <a 
      href="tel:+1234567890"
      className="group border border-white/80 hover:border-white text-white px-9 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm inline-flex items-center justify-center gap-3 mx-auto"
    >
      <span className="md:hidden">📞</span>
      <span>Call For Service</span>
    </a>
  </div>
</div>
