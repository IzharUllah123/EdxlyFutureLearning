import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const ZOOM_TOKEN_URL = "https://zoom.us/oauth/token";
const ZOOM_MEETING_URL = "https://api.zoom.us/v2/users/me/meetings";

async function getZoomAccessToken() {
  const auth = Buffer.from(
    `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
  ).toString("base64");

  const res = await axios.post(
    `${ZOOM_TOKEN_URL}?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
    {},
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return res.data.access_token;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { title } = req.body;

    // Validate environment variables
    if (!process.env.ZOOM_CLIENT_ID || !process.env.ZOOM_CLIENT_SECRET || !process.env.ZOOM_ACCOUNT_ID) {
      throw new Error("Missing Zoom credentials in environment variables");
    }

    const token = await getZoomAccessToken();

    const meeting = await axios.post(
      ZOOM_MEETING_URL,
      {
        topic: title || "Edxly Live Class",
        type: 2, // Scheduled meeting
        duration: 40,
        settings: {
          join_before_host: true,
          waiting_room: false,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({
      joinUrl: meeting.data.join_url,
      startUrl: meeting.data.start_url,
      meetingId: meeting.data.id,
    });
  } catch (error: any) {
    console.error("Zoom Error:", error?.response?.data || error.message);

    return res.status(500).json({
      error: error?.response?.data?.message || error.message || "Failed to create Zoom meeting",
      details: error?.response?.data || null,
    });
  }
}