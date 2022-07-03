// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  success: boolean;
  metadata?: any;
};

export const config = {
  api: {
    externalResolver: true,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { limit } = req.query;

  try {
    const url = `https://dummyapi.io/data/v1/user`;
    const response = await axios(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "app-id": "62befb35a8d707e987d6f608",
      },
      params: req.query,
    });
    res.status(200).json({ success: true, metadata: response.data });
  } catch (e: any) {
    res.status(500).json({ success: false });
  }
};

export default handler;
