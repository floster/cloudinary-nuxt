import { v2 as cloudinary } from "cloudinary";

interface Results {
  resources: [{ public_id: string }];
}

export default defineEventHandler(async (event) => {
  const env = useRuntimeConfig(event);

  cloudinary.config({
    cloud_name: env.public.cloudinary.cloudName,
    api_secret: env.cloudSecret,
    api_key: env.cloudKey,
  });

  try {
    const data: Results = await cloudinary.search
      .expression("")
      .sort_by("public_id", "desc")
      .max_results(12)
      .execute();

    return { ...data };
  } catch (error) {
    console.warn(cloudinary.config());
    console.error(error);
  }
});
