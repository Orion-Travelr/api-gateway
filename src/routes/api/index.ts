import {index as planetIndex,show as planetShow, query as planetQuery} from "../../controllers/planet";
import {index as amenityIndex} from "../../controllers/amenity";
import {index as galaxyIndex} from "../../controllers/galaxy";

export default {
  name: "ApiRoutes",
  register: async (server: any, options: any) => {
    server.route([
      {
        method: "GET",
        path: "/planets",
        config: {
          id: 'planet.index',
          handler: planetIndex
        }
      },
      {
        method: "GET",
        path: "/planets/search",
        config: {
          id: 'planet.search',
          handler: planetQuery
        }
      },
      {
        method: "GET",
        path: "/planets/{id}",
        config: {
          id: 'planet.show',
          handler: planetShow,
        }
      },
      {
        method: "GET",
        path: "/galaxies",
        config: {
          id: 'galaxies.index',
          handler: galaxyIndex
        }
      },
      {
        method: "GET",
        path: "/amenities",
        config: {
          id: 'amenities.index',
          handler: amenityIndex
        }
      }
    ]);
  }
};
