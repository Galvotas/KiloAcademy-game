import axios, { AxiosResponse } from "axios";
import { URLS } from "./constant";

export const handleGetCovidData = async <T>(url?: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios({
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    method: "GET",
    url: `${URLS.PRIMARY_URL}/${url}`,
  });

  return response.data;
};

export const handleGetChartData = async <T>(country?: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios({
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },

    method: "GET",
    url: `${URLS.PRIMARY_URL}/historical/${country}?lastdays=360`,
  });

  return response.data;
};

export const getVaccineDataRequest = async <T>(country: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios({
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },

    method: "GET",
    url: `${URLS.PRIMARY_URL}/vaccine/coverage/countries/${country}?lastdays=90`,
  });

  return response.data;
};
