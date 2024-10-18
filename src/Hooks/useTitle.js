import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - MedQuest`;
  }, [title]);
  return null;
};

export default useTitle;
