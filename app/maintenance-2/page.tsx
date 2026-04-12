


import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

// Video details - change these to match your video
const videoTitle = "Maintenance Video Title";           // Make it descriptive
const videoDescription = " Full Routine Maintenance Service Full engine oil change, oil filter, Fresh coolant/antifreeze flush ,(brake, power steering, washer), transmission check and service, Tire rotation, pressure ,Battery inspection,test ,engine and cabin air filter.";
const videoUploadDate = "2026-04-01";                   // Use actual upload date (YYYY-MM-DD)
const videoDuration = "PT2M45S";                        // ISO 8601 format: PT minutes M seconds S  (e.g. PT1M30S = 1 min 30 sec)
const thumbnailUrl = "https://www.devwordpressspace.site/thumbnail/44D26A87-4FE2-41DB-A7AA-E43DD3E0C011.jpg"; // Full absolute URL
const videoContentUrl = "https://www.devwordpressspace.site/44D26A87-4FE2-41DB-A7AA-E43DD3E0C011.mp4";     // Full absolute URL to your MP4
const videoEmbedUrl = "https://www.devwordpressspace.site/maintenance-2";                       // Usually same as page URL

export const metadata: Metadata = {
  title: videoTitle,
  description: videoDescription.slice(0, 160),
  openGraph: {
    title: videoTitle,
    description: videoDescription,
    images: [{ url: thumbnailUrl }],
    videos: [{ url: videoContentUrl }],
  },
};

export default function MaintenanceVideoWatchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Routine car maintenance is the regular care your vehicle needs to stay safe, reliable, and efficient. Think of it as ongoing upkeep that prevents breakdowns and expensive repairs later.",
    "name": videoTitle,
    "description": videoDescription,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": videoUploadDate,
    "duration": videoDuration,
    "contentUrl": videoContentUrl,     // Direct link to the MP4 file
    "embedUrl": videoEmbedUrl,         // URL of the watch page
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": "0"      // Optional: you can update this later
    }
  };

  return (
    <>
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back to original page */}
          <Link 
            href="/maintenance-1" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8"
          >
            ← Back to Maintenance Page
          </Link>

          {/* Video Title */}
          <h1 className="text-4xl font-bold mb-4">{videoTitle}</h1>

          {/* Video Player - Large and prominent */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mb-10">
            <video
              controls
              autoPlay
              muted
              playsInline
              className="w-full h-full"
            >
              <source 
                src="/A9E2A6AE-A40C-4BE4-B557-AB5588D3CC19.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About this video</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {videoDescription}
            </p>

            {/* Optional: Add transcript or chapters here later */}
            {/* <h3 className="mt-10 mb-4">Transcript</h3> */}
            {/* ... transcript text ... */}
          </div>

          {/* Extra helpful content (Google likes text on watch pages) */}
          <div className="mt-12 text-sm text-gray-400">
            Uploaded on {new Date(videoUploadDate).toLocaleDateString()}
          </div>
        </div>
      </div>
    </>
  );
}
