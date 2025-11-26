import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3 } from "./s3Client";

export async function listS3Media(project: string) {
  const bucket = process.env.S3_BUCKET_NAME!;
  const prefix = `media/${project}/`;

  const cmd = new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix });
  const res = await s3.send(cmd);

  return (res.Contents || [])
    .map((o) => o.Key)
    .filter((k): k is string => !!k)
    .map((k) => k.replace(prefix, ""));
}
