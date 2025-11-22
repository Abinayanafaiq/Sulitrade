"use client";

import { useEffect, useState } from "react";

export default function VideoPage() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (access === "granted") {
      setAllowed(true);
    } else {
      window.location.href = "/";
    }
  }, []);

  if (!allowed) return null;

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Modul 01</h1>
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/pok45zJBYBg"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
