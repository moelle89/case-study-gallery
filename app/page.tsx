import Link from "next/link";
import Image from "next/image";
import { getProjects, getMediaFiles } from "../lib/getMedia";

export default function Page() {
  const projects = getProjects();
  const previews = projects.map((p) => {
    const files = getMediaFiles(p);
    const firstImg = files.find((f) => /\.(jpg|jpeg|png)$/i.test(f));
    return {
      name: p,
      preview: firstImg ? `/media/${p}/${firstImg}` : null
    };
  });

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Case Studies</h1>
      <div style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))"
      }}>
        {previews.map((p) => (
          <Link
            key={p.name}
            href={`/${p.name}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}
          >
            {p.preview ? (
              <Image
                src={p.preview}
                width={400}
                height={300}
                alt={p.name}
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <div style={{
                width: "100%",
                height: "200px",
                background: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                No Preview
              </div>
            )}

            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: 0 }}>{p.name}</h3>
              <p style={{ opacity: 0.7 }}>Click to view case study</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
