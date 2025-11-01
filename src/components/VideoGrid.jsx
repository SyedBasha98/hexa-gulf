import React, { useMemo, useState } from "react";
import VideoCard from "./VideoCard.jsx";
import cx from "../utils/cx.js";

export default function VideoGrid({ items = [], categories = [] }) {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((x) => x.cat === filter);
  }, [filter, items]);

  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cx("pill", filter === c && "active")}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid cards">
        {filtered.map((p) => (
          <VideoCard
            key={p.t}
            title={p.t}
            bullets={p.bullets}
            videoSrc={p.videoMp4}
            poster={p.poster}
          />
        ))}
      </div>
    </>
  );
}
