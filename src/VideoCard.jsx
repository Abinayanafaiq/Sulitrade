"use client";
import React from "react";

// Regex extractor YouTube ID
function extractYouTubeId(url) {
  const re =
    /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/))([A-Za-z0-9_-]{11})/;
  const m = url?.match(re);
  return m ? m[1] : null;
}

export default function VideoCard({ video, onView }) {
  // gunakan video.videoId jika ada, jika tidak parse dari video.videoUrl
  const id = video.videoId || extractYouTubeId(video.videoUrl);

  const thumb = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="bg-gradient-to-b from-[#071028] via-[#05040a] to-[#030303] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={thumb}
          alt={video.title}
          onError={(e) => {
            e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          }}
          className="w-full h-40 sm:h-44 md:h-36 lg:h-44 object-cover"
        />

        <div className="absolute left-3 top-3 px-2 py-1 bg-indigo-600/90 text-xs text-white rounded">
          Suli
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white text-sm sm:text-base font-semibold leading-tight">
          {video.title}
        </h3>

        <p className="text-gray-300 text-xs mt-1 line-clamp-2">{video.desc}</p>

        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={() => onView({ ...video, videoId: id })}
            className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-md"
          >
            Lihat
          </button>

          <button
            onClick={() =>
              navigator.clipboard.writeText(
                window.location.href + `?m=${video.id}`
              )
            }
            className="text-sm px-3 py-2 border border-gray-700 rounded-md text-gray-300"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}
