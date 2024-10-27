// components/GitHubContributions.tsx
import React, { useEffect, useState } from "react";

interface Event {
  id: string;
  type: string;
  created_at: string;
}

const GitHubContributions: React.FC<{ username: string }> = ({ username }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchGitHubContributions = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/events`
      );
      if (!response.ok) throw new Error("Failed to fetch events");
      const data: Event[] = await response.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGitHubContributions();
  }, [username]);

  return (
    <div>
      <h2 className="text-2xl font-bold">GitHub Contributions</h2>
      <img
        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
        alt="GitHub Stats"
      />
    </div>
  );
};

export default GitHubContributions;
