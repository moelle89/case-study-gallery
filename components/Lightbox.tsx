"use client";

import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("body");

export default function Lightbox({ src, isVideo }: { src: string; isVideo?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        {isVideo ? (
          <video src={src} style={{ width: "100%", borderRadius: "6px" }} />
        ) : (
          <img src={src} style={{ width: "100%", borderRadius: "6px" }} />
        )}
      </div>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: { background: "rgba(0,0,0,0.8)" },
          content: { inset: "5%", padding: 0, background: "transparent", border: "none" }
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          {isVideo ? (
            <video src={src} controls autoPlay style={{ maxWidth: "90%", maxHeight: "90%" }} />
          ) : (
            <img src={src} style={{ maxWidth: "90%", maxHeight: "90%" }} />
          )}
        </div>
      </Modal>
    </>
  );
}
