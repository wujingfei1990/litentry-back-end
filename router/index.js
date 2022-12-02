import { SwaggerRouter } from 'koa-swagger-decorator';
import {ROUTE_PREFIX,SWAGGER_OPTS} from '../config'
const router = new SwaggerRouter({
  prefix:ROUTE_PREFIX
});

router.swagger(SWAGGER_OPTS);

// mapDir will scan the input dir, and automatically call router.map to all Router Class
router.mapDir(__dirname, {
  // default: true. To recursively scan the dir to make router. If false, will not scan subroutes dir
   recursive: true,
  // default: true, if true, you can call ctx.validatedBody[Query|Params] to get validated data.
   doValidation: true,
});

export default router;