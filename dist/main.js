"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(process.env.PORT ?? 3300, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log('process.env.DB_USERNAME:', process.env.DB_USERNAME);
}
bootstrap();
//# sourceMappingURL=main.js.map