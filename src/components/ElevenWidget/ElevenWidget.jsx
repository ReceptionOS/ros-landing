import React, { useEffect, useRef, useState } from "react";

export default function ElevenWidget({ agentId }) {
    const mountRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);

        if (!document.querySelector("#elevenlabs-widget-script")) {
            const s = document.createElement("script");
            s.id = "elevenlabs-widget-script";
            s.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
            s.async = true;
            document.body.appendChild(s);
        }

        if (mountRef.current && agentId) {
            mountRef.current.innerHTML = `<elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>`;
        }
    }, [agentId]);

    return <div ref={mountRef} />;
}
