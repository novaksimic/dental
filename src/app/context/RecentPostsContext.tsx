"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type RecentPostsContextType = {
  recent: string[];
  addPost: (id: string) => void;
};

const RecentPostsContext = createContext<RecentPostsContextType | undefined>(undefined);

export function RecentPostsProvider({ children }: { children: ReactNode }) {
  const [recent, setRecent] = useState<string[]>([]);

  const addPost = (id: string) => {
    setRecent((prev) => [id, ...prev.filter((p) => p !== id)].slice(0, 5));
  };

  return (
    <RecentPostsContext.Provider value={{ recent, addPost }}>
      {children}
    </RecentPostsContext.Provider>
  );
}

export const useRecentPosts = () => {
  const context = useContext(RecentPostsContext);
  if (!context) throw new Error("useRecentPosts must be used inside RecentPostsProvider");
  return context;
};
