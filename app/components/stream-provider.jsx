"use client";

import { StreamVideo } from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useStreamClients } from "../hooks/use-stream-clients";
import { Chat } from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export default function StreamProvider({ children, user, token }) {
  const { videoClient, chatClient } = useStreamClients({
    apiKey,
    user,
    token,
  });

  if (!videoClient || !chatClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-pink-300 to-yellow-400">
        <p className="text-white text-xl font-semibold mt-6">Loading...</p>
      </div>
    );
  }

  return (
    <StreamVideo client={videoClient}>
      <Chat client={chatClient}>
        {children}
      </Chat>
    </StreamVideo>
  );
}
