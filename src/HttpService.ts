import axios from "axios";

interface App {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
}

interface getAppsResponse {
  approws: App[];
  totalCount: number;
}

const HttpService = axios.create({
  headers: { "ngrok-skip-browser-warning": "69420" },
});

export const getApps = async (
  pageNumber: number,
  pageSize: number
): Promise<getAppsResponse | void> => {
  try {
    const res = await HttpService.put("api/v1/app-service/get-apps", {
      pageNumber,
      pageSize,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
