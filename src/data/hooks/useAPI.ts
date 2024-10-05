import { useCallback } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const fullURL = `${baseURL}${uri}`;

    const response = await fetch(fullURL);
    return getData(response);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const httpPost = useCallback(async function (path: string, body: any) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const fullURL = `${baseURL}${uri}`;

    const response = await fetch(fullURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return getData(response);
  }, []);

  async function getData(response: Response) {
    let content = "";
    try {
      content = await response.text();
      return JSON.parse(content);
    } catch (e) {
      return content;
    }
  }

  return { httpGet, httpPost };
}
