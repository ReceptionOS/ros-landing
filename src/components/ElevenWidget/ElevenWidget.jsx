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

            // Auto-open the widget after it initializes
            const widget = mountRef.current.querySelector("elevenlabs-convai");
            if (widget) {
                const tryClick = (attempts) => {
                    if (attempts <= 0) return;
                    const sr = widget.shadowRoot;
                    if (sr) {
                        const btn = sr.querySelector("button");
                        if (btn) { btn.click(); return; }
                    }
                    setTimeout(() => tryClick(attempts - 1), 200);
                };
                tryClick(15);
            }
        }
    }, [agentId]);

    return <div ref={mountRef} />;
}
