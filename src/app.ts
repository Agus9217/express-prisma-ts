import { env } from "./infraestructure/config/envs";
import { InfraestructorRoutes } from "./infraestructure/routes";
import { Server } from "./infraestructure/server";

(() => {
  const server = new Server({
    port: env.PORT,
    router: InfraestructorRoutes.routes,
  });

  server.start();
})();
