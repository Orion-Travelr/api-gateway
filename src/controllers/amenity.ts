
import {AmenitiesService} from "../services/api.service";

export const index = (request: any, h: any) => {
  return AmenitiesService.all();
};
