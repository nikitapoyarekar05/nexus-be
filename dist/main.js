"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(process.env.PORT ?? 3300, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
}
bootstrap();
//# sourceMappingURL=main.js.map