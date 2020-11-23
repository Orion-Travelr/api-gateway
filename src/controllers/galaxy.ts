
import {GalaxiesService} from "../services/api.service";

export const index = (request: any, h: any) => {
  return GalaxiesService.all();
};
