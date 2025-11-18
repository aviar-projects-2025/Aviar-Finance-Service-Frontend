import React, { useEffect, useRef, useState } from "react";
import "../modalCss.css"

const TARGET_URL = "https://aviarfs.my1003app.com";

const ApplyModalLauncher = ({
    setOpen,
    open,
}) => {
//   const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | embedded | blocked
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!open) return; // only run when modal is open

    setStatus("loading");
    const iframe = iframeRef.current;

    const handleLoad = () => {
      // If it reaches here, the iframe DID load.
      // We may not be allowed to inspect contentWindow (cross-origin), that's fine.
      setStatus("embedded");
      // Optionally log success
      logIframeStatus("loaded");
    };

    const checkIframeBlocked = setTimeout(() => {
      // Heuristic: no contentWindow or some weird failure
      if (!iframe || !iframe.contentWindow) {
        setStatus("blocked");
        logIframeStatus("blocked");
      }
    }, 1500);

    if (iframe) {
      iframe.addEventListener("load", handleLoad);
    }

    return () => {
      if (iframe) iframe.removeEventListener("load", handleLoad);
      clearTimeout(checkIframeBlocked);
    };
  }, [open]);

  const logIframeStatus = async (status) => {
    try {
      // Optional: hit your backend to log behavior
      await fetch("http://localhost:5000/api/telemetry/iframe-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetUrl: TARGET_URL,
          status,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      // Fail silently; logging isn't critical for UX
      console.warn("Telemetry log failed:", err);
    }
  };

  const handleContinue = () => {
    // Same window redirect to the secure 1003 app
    window.location.href = TARGET_URL;
  };

  const closeModal = () => {
    setOpen(false);
    setStatus("idle");
  };

  return (
    <>
      

      {open && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-header">
              <h3 style={{ margin: 0 }}>AVIAR Loan Application</h3>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            {status !== "blocked" && (
              <div className="modal-body">
                {status === "loading" && (
                  <div className="loading-overlay">
                    <div className="spinner" />
                    <p className="smalltext">Loading secure application…</p>
                  </div>
                )}

                <iframe
                  ref={iframeRef}
                  title="AVIAR Loan Application"
                  src={TARGET_URL}
                  style={{
                    width: "100%",
                    height: "70vh",
                    border: "none",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            )}

            {status === "blocked" && (
              <div className="modal-body blocked-state">
                <p style={{ marginBottom: "0.5rem" }}>
                  Your secure loan application can’t be displayed inside this
                  window due to security settings from our provider.
                </p>
                <p className="smalltext" style={{ marginBottom: "1rem" }}>
                  Click the button below to continue in this window.
                </p>
                <button className="btn-primary" onClick={handleContinue}>
                  Continue to secure application
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyModalLauncher;
