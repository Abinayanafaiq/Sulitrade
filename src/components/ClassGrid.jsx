"use client";
import React, { useState, useRef } from "react";
import VideoCard from "./VideoCard";

// extractor regex
function extractYouTubeId(url) {
  if (!url) return null;
  const re =
    /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/))([A-Za-z0-9_-]{11})/;
  const m = url.match(re);
  return m ? m[1] : null;
}

export default function ClassGrid({ modulesData }) {
  const [active, setActive] = useState(null);
  const [openSections, setOpenSections] = useState(() =>
    modulesData.map((m) => ({ id: m.sectionId, open: true }))
  );
  const videoContainerRef = useRef(null);

  const toggleSection = (id) => {
    setOpenSections((s) =>
      s.map((x) => (x.id === id ? { ...x, open: !x.open } : x))
    );
  };

  const onView = (video) => {
    // Prioritas: jika sudah ada videoId langsung, pakai itu
    // Jika tidak, extract dari videoUrl
    let id = video.videoId;
    if (!id && video.videoUrl) {
      id = extractYouTubeId(video.videoUrl);
    }

    setActive({
      ...video,
      videoId: id,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;

    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen?.() ||
        videoContainerRef.current.webkitRequestFullscreen?.() ||
        videoContainerRef.current.mozRequestFullScreen?.() ||
        videoContainerRef.current.msRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() ||
        document.webkitExitFullscreen?.() ||
        document.mozCancelFullScreen?.() ||
        document.msExitFullscreen?.();
    }
  };

  return (
    <div className="space-y-8">
      {/* Modal / Player */}
      {active && (
        <div className="bg-gradient-to-r from-[#0b1220] to-[#071028] rounded-xl p-4 sm:p-6 shadow-xl">
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1 pr-2">
              <h2 className="text-white text-base sm:text-xl font-semibold">
                {active.title}
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                {active.desc}
              </p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="px-3 py-2 border rounded text-gray-200 text-sm shrink-0"
            >
              Tutup
            </button>
          </div>

          <div
            ref={videoContainerRef}
            className="relative bg-black rounded overflow-hidden"
          >
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${active.videoId}?rel=0`}
                title={active.title}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded text-xs sm:text-sm flex items-center gap-2 z-10"
              title="Toggle Fullscreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
          </div>
        </div>
      )}

      {/* Sections */}
      {modulesData.map((section) => {
        const sOpen =
          openSections.find((x) => x.id === section.sectionId)?.open ?? true;

        return (
          <section key={section.sectionId} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                {section.title}
              </h3>
              <button
                onClick={() => toggleSection(section.sectionId)}
                className="text-xs sm:text-sm text-gray-300 px-3 py-1 hover:bg-slate-800 rounded"
              >
                {sOpen ? "Collapse" : "Expand"}
              </button>
            </div>

            {sOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {section.items.map((video) => (
                  <VideoCard key={video.id} video={video} onView={onView} />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
