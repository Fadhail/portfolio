// pages/api/github-contributions.ts
import type { NextApiRequest, NextApiResponse } from "next";

// Define the type for the GitHub event
type GitHubEvent = {
  type: string;
  created_at: string;
  payload: {
    commits: { message: string }[];
  };
};

const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"; // Replace with your GitHub username

const fetchContributions = async () => {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/events`
  );
  const events: GitHubEvent[] = await res.json(); // Use the GitHubEvent type

  const contributions = Array(365).fill(0); // Create an array for contributions for each day of the year

  // Calculate contributions (basic example; you may want to refine this logic)
  events.forEach((event) => {
    const createdAt = new Date(event.created_at);
    const dayOfYear = Math.floor(
      (createdAt.getTime() -
        new Date(createdAt.getFullYear(), 0, 0).getTime()) /
        1000 /
        60 /
        60 /
        24
    );

    // Count only push events or other relevant events
    if (event.type === "PushEvent") {
      contributions[dayOfYear] += event.payload.commits.length;
    }
  });

  return contributions;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contributions = await fetchContributions();
  res.status(200).json(contributions);
}
