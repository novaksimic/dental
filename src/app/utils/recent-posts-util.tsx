export const getRecentPosts = (): string[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("recentPosts");
  return stored ? JSON.parse(stored) : [];
};

export const addRecentPost = (id: string) => {
  if (typeof window === "undefined") return;

  const stored = localStorage.getItem("recentPosts");
  const current: string[] = stored ? JSON.parse(stored) : [];

  const updated = [id, ...current.filter((p) => p !== id)].slice(0, 5);

  localStorage.setItem("recentPosts", JSON.stringify(updated));
};