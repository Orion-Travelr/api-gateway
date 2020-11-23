import http, {AxiosRequestConfig, Method} from "axios";

const ApiService = {
  request (resource:Method, url: string,  config?:AxiosRequestConfig): Promise<any> {
    config = {
      method: resource,
      url: url,
      baseURL: process.env.UNIVERSE_SERVICE_ENDPOINT,
      ...config
    }

    return http.request(config)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  },
};

export default ApiService;

export const PlanetsService = {
  async getPlanetById(id: number): Promise<any> {
    const response = await ApiService.request('get', `/planets/${id}`);

    return await response.data;
  },

  async getPlanetsByQuery(query: any): Promise<any> {
    const response = await ApiService.request('get', `/planets/search?${query}`);

    return await response.data;
  },
}

export const GalaxiesService = {
  async all(): Promise<any> {
    const response = await ApiService.request('get', '/galaxies');

    return await response.data;
  },
};

export const AmenitiesService = {
  async all(): Promise<any> {
    const response = await ApiService.request('get', '/amenities');

    return await response.data;
  },
};
