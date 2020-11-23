const qs = require('query-string');

import {GalaxiesService, PlanetsService} from "../services/api.service";

export const index = (request: any, h: any) => {
  return GalaxiesService.all();
};

export const show = (request: any, h: any) => {
  return PlanetsService.getPlanetById(request.params.id);
};

export const query = (request: any, h: any) => {
  const q = qs.stringify(request.query, {arrayFormat: 'comma', encode: false});

  return PlanetsService.getPlanetsByQuery(q);
};
