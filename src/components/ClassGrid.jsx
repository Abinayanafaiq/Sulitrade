"use client";
import React, { useState } from "react";
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

  return (
    <div className="space-y-8">
      {/* Modal / Player */}
      {active && (
        <div className="bg-gradient-to-r from-[#0b1220] to-[#071028] rounded-xl p-6 shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-white text-xl font-semibold">
                {active.title}
              </h2>
              <p className="text-gray-300 text-sm mt-1">{active.desc}</p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="px-3 py-2 border rounded text-gray-200"
            >
              Tutup
            </button>
          </div>

          <div className="mt-4">
            <div className="aspect-video w-full rounded overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${active.videoId}`}
                title={active.title}
                width="100%"
                height="560"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
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
              <h3 className="text-white text-2xl font-bold">{section.title}</h3>
              <button
                onClick={() => toggleSection(section.sectionId)}
                className="text-sm text-gray-300"
              >
                {sOpen ? "Collapse" : "Expand"}
              </button>
            </div>

            {sOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
