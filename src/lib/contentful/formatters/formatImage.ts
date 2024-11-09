import { ContentfulImageInterface } from "@/types/ContentfulImageInterface";

export const formatImage = (imgData) => {
  if (!imgData) return null;

  const imgAsset: ContentfulImageInterface = {
    id: "id" in imgData ? imgData.id : "sys" in imgData ? imgData.sys.id : null,
    title: imgData.title,
    url: imgData.url,
    description: imgData.description,
    width: imgData.width,
    height: imgData.height,
  };
  return imgAsset;
};
