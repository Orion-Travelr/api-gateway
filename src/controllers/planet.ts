
import {GalaxiesService, PlanetsService} from "../services/api.service";

export const index = (request: any, h: any) => {
  return GalaxiesService.all();
};

export const show = (request: any, h: any) => {
  return PlanetsService.getPlanetById(request.params.id);
};

