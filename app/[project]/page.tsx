import Image from "next/image";
import { getMediaFiles, getProjects } from "../../lib/getMedia";
import Lightbox from "../../components/Lightbox";

export async function generateStaticParams() {
  return getProjects().map((p) => ({ project: p }));
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  const { project } = params;
  const files = getMediaFiles(project);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1>{project}</h1>

      <div style={{
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))"
      }}>
        {files.map((file) => {
          const isVideo = file.endsWith(".mp4");
          const src = `/media/${project}/${file}`;

          return (
            <Lightbox key={file} src={src} isVideo={isVideo} />
          );
        })}
      </div>
    </div>
  );
}
