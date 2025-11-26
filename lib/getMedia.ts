import fs from "fs";
import path from "path";

export function getProjects() {
  const projectsDir = path.join(process.cwd(), "public/media");
  return fs
    .readdirSync(projectsDir)
    .filter((name) => fs.statSync(path.join(projectsDir, name)).isDirectory());
}

export function getMediaFiles(project: string) {
  const dir = path.join(process.cwd(), `public/media/${project}`);
  return fs.readdirSync(dir).filter((file) => /\.(jpg|jpeg|png|gif|mp4)$/i.test(file));
}
