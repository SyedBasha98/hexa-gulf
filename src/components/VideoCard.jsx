import React, { useRef, useState } from "react";

/**
 * GIF-like mini video (autoplay, loop, muted, non-clickable).
 * Falls back to poster if video fails.
 */
export default function VideoCard({ title, bullets = [], videoSrc, poster }) {
  const wrapRef = useRef(null);
  const [failed, setFailed] = useState(false);

  return (
    <article className="card">
      <div className={`media ${failed ? "video-failed" : ""}`} ref={wrapRef}>
        {videoSrc && !failed ? (
          <video
            className="autoloop"
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            controlsList="nodownload noplaybackrate nofullscreen"
            onContextMenu={(e) => e.preventDefault()}
            onError={() => setFailed(true)}
            onPlay={() => setFailed(false)}
          />
        ) : (
          <img className="poster-fallback" src={poster} alt={title} />
        )}

        {/* extra fallback image layer */}
        <img className="poster-fallback" src={poster} alt="" aria-hidden />
        <div className="badge">{title}</div>
      </div>

      <div className="body">
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>
              <span className="chev" /> <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
