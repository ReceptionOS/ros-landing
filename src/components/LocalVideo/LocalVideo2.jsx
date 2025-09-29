import React, { useRef, useEffect, useState } from "react";
import { LocalVideoSection } from "./styled.components";

const LocalVideo2 = ({ src, webmSrc, mp4Src, poster, className }) => {
  const ref = useRef();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <LocalVideoSection ref={ref} className={className || ""} >
      {load ? (
        <video
          muted
          playsInline
          autoPlay
          loop
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        >
          {/* {mp4Src && <source src={mp4Src} type="video/mp4" />} */}
          {/* {webmSrc && <source src={webmSrc} type="video/webm" />} */}
          {src && <source src={src} type="video/mp4" />}
        </video>
      ) : (
        <img src={poster} alt="" style={{ width: "100%", display: "block" }} />
      )}
    </LocalVideoSection>
  );
};

export default LocalVideo2;
