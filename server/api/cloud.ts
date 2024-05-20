import { v2 as cloudinary } from "cloudinary";

import type { Results } from "@/types";

export default defineEventHandler(async (event) => {
  const env = useRuntimeConfig(event);

  cloudinary.config({
    cloud_name: env.public.cloudinary.cloudName,
    api_secret: env.cloudSecret,
    api_key: env.cloudKey,
  });

  try {
    const data: Results = await cloudinary.search
      .with_field("context")
      .expression("resource_type:image")
      .sort_by("public_id", "desc")
      .max_results(4)
      .execute();

    return { ...data };
  } catch (error) {
    console.warn(cloudinary.config());
    console.error(error);
  }
});
