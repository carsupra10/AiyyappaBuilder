import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ehbrmdep", // updated to match your studio
  dataset: "production",
  apiVersion: "2025-07-26", // updated to match your studio
  useCdn: true,
});
