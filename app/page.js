"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleJoin = () => {
    const name = username.trim() === "" ? "anonymous" : username.trim();

    // const meetingId = "meeting-" + Math.random().toString(36).substring(2, 10);
    const meetingId = process.env.NEXT_PUBLIC_CALL_ID;

    router.push(`/meeting/${meetingId}?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-red-600 to-yellow-400 text-brown">
      <div className="p-8 bg-green-400 rounded-2xl border border-blue-700 w-80 backdrop-blur-sm shadow-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Jesus vs Allah Battle Meeting
        </h2>

        <input
          className="px-4 py-3 w-full rounded-lg bg-gray-700/80 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
          placeholder="e.g. Allah Supporter 1_Rigur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={handleJoin}
          className="mt-5 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow-lg transition"
        >
          Join Meeting
        </button>
      </div>
    </div>
  );
}