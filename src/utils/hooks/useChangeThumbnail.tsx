import { useState } from "react";

const useChangeThumbnail = (thumbnail: string) => {
  const [currentThumbnail, setCurrentThumbnail] = useState(thumbnail);
  function handleThumbnail(thumbnailChange: string) {
    return currentThumbnail === thumbnailChange
      ? setCurrentThumbnail(thumbnail)
      : setCurrentThumbnail(thumbnailChange);
  }

  return { handleThumbnail, currentThumbnail };
};

export default useChangeThumbnail;
