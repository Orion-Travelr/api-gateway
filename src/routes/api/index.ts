import {index,show} from "../../controllers/planet";

export default {
  name: "ApiRoutes",
  register: async (server: any, options: any) => {
    server.route([
      {
        method: "GET",
        path: "/planets",
        config: {
          id: 'planet.index',
          handler: index
        }
      },
      {
        method: "GET",
        path: "/planets/{id}",
        config: {
          id: 'planet.show',
          handler: show,
        }
      },
      {
        method: "GET",
        path: "/galaxies",
        config: {
          id: 'galaxies.index',
          handler: index
        }
      },
      {
        method: "GET",
        path: "/amenities",
        config: {
          id: 'amenities.index',
          handler: index
        }
      }
    ]);
  }
};
