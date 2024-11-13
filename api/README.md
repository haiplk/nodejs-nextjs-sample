my-advanced-express-app/
├── src/
│   ├── config/
│   │   ├── dbConfig.ts
│   │   ├── envConfig.ts
│   │   └── loggerConfig.ts
│   ├── controllers/
│   │   └── userController.ts
│   ├── interfaces/
│   │   ├── IUser.ts
│   │   ├── IError.ts
│   │   └── IResponse.ts
│   ├── middlewares/
│   │   ├── errorHandler.ts
│   │   ├── requestValidator.ts
│   │   └── authMiddleware.ts
│   ├── models/
│   │   └── userModel.ts
│   ├── repositories/
│   │   └── userRepository.ts
│   ├── routes/
│   │   └── userRoutes.ts
│   ├── services/
│   │   └── userService.ts
│   ├── utils/
│   │   ├── db.ts
│   │   └── logger.ts
│   ├── validations/
│   │   └── userValidation.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── nodemon.json
