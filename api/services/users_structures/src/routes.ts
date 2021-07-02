/* tslint:disable */
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
import { UserController } from './controller/user.controller';
import { RestaurantController } from './controller/restaurant.controller';
import { RoleController } from './controller/role.controller';
import { RoleEmployeeController } from './controller/roleEmployee.controller';
import { expressAuthentication } from './authentication';
import * as express from 'express';

const models: TsoaRoute.Models = {
    "User": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "role": { "ref": "Role", "required": true },
            "address": { "ref": "Address", "required": true },
            "card": { "ref": "Card", "required": true },
            "employee": { "ref": "Employee", "required": true },
            "username": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "surname": { "dataType": "string", "required": true },
            "age": { "dataType": "double", "required": true },
            "email": { "dataType": "string", "required": true },
            "siret": { "dataType": "string", "required": true },
            "rib": { "dataType": "string", "required": true },
            "sponsorshipCode": { "dataType": "string", "required": true },
            "sponsorId": { "dataType": "double", "required": true },
            "suspended": { "dataType": "boolean", "required": true },
            "notification": { "dataType": "boolean", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
            "updatedAt": { "dataType": "datetime", "required": true },
        },
    },
    "Role": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "user": { "dataType": "array", "array": { "ref": "User" }, "required": true },
            "identifier": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
        },
    },
    "Address": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "country": { "dataType": "string", "required": true },
            "town": { "dataType": "string", "required": true },
            "postalCode": { "dataType": "string", "required": true },
            "address1": { "dataType": "string", "required": true },
            "address2": { "dataType": "string", "required": true },
            "longitude": { "dataType": "string", "required": true },
            "latitude": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
            "updatedAt": { "dataType": "datetime", "required": true },
        },
    },
    "Card": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "user": { "ref": "User", "required": true },
            "type": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
            "wording": { "dataType": "string", "required": true },
            "number": { "dataType": "string", "required": true },
            "expirationDate": { "dataType": "string", "required": true },
            "cvv": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
            "updatedAt": { "dataType": "datetime", "required": true },
        },
    },
    "Employee": {
        "properties": {
            "user": { "ref": "User", "required": true },
            "restaurant": { "ref": "Restaurant", "required": true },
            "role": { "ref": "RoleEmployee", "required": true },
        },
    },
    "Restaurant": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "address": { "ref": "Address", "required": true },
            "employee": { "ref": "Employee", "required": true },
            "rib": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
        },
    },
    "RoleEmployee": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "employee": { "dataType": "array", "array": { "ref": "Employee" }, "required": true },
            "identifier": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
        },
    },
    "UserUpdateParams": {
        "properties": {
            "role": { "ref": "Role" },
            "address": { "ref": "Address" },
            "username": { "dataType": "string" },
            "name": { "dataType": "string" },
            "surname": { "dataType": "string" },
            "age": { "dataType": "double" },
            "email": { "dataType": "string" },
            "siret": { "dataType": "string" },
            "rib": { "dataType": "string" },
            "sponsorshipCode": { "dataType": "string" },
            "suspended": { "dataType": "boolean" },
            "notification": { "dataType": "boolean" },
        },
    },
    "SponsorCode": {
        "properties": {
            "sponsorshipCode": { "dataType": "string", "required": true },
        },
    },
    "AddressCreationParams": {
        "properties": {
            "country": { "dataType": "string" },
            "town": { "dataType": "string" },
            "postalCode": { "dataType": "string" },
            "address1": { "dataType": "string" },
            "address2": { "dataType": "string" },
            "longitude": { "dataType": "string" },
            "latitude": { "dataType": "string" },
        },
    },
    "AddressUpdateParams": {
        "properties": {
            "country": { "dataType": "string" },
            "town": { "dataType": "string" },
            "postalCode": { "dataType": "string" },
            "address1": { "dataType": "string" },
            "address2": { "dataType": "string" },
            "longitude": { "dataType": "string" },
            "latitude": { "dataType": "string" },
        },
    },
    "CardCreationParams": {
        "properties": {
            "type": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
            "wording": { "dataType": "string", "required": true },
            "number": { "dataType": "string", "required": true },
            "expirationDate": { "dataType": "string", "required": true },
            "cvv": { "dataType": "string", "required": true },
        },
    },
    "RestaurantUpdateParams": {
        "properties": {
            "address": { "ref": "Address" },
            "rib": { "dataType": "string" },
            "title": { "dataType": "string" },
            "description": { "dataType": "string" },
        },
    },
    "RestaurantCreationParams": {
        "properties": {
            "rib": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
        },
    },
    "EmployeeCreationParams": {
        "properties": {
            "role": { "ref": "RoleEmployee" },
        },
    },
    "EmployeeUpdateParams": {
        "properties": {
            "roleId": { "dataType": "string" },
        },
    },
    "RoleCreationParams": {
        "properties": {
            "identifier": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
        },
    },
    "RoleUpdateParams": {
        "properties": {
            "identifier": { "dataType": "string" },
            "title": { "dataType": "string" },
        },
    },
    "RoleEmployeeCreationParams": {
        "properties": {
            "identifier": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
        },
    },
    "RoleEmployeeUpdateParams": {
        "properties": {
            "identifier": { "dataType": "string" },
            "title": { "dataType": "string" },
        },
    },
};
const validationService = new ValidationService(models);

export function RegisterRoutes(app: express.Express) {
    app.get('/api/users',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
                byEmail: { "in": "query", "name": "byEmail", "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.getAll.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/users/:id',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.get.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.put('/api/users/:id',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "UserUpdateParams" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.update.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.delete('/api/users/:id',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.remove.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/users/:id/sponsor',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "SponsorCode" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.createSponsor.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/users/:id/addresses/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.getAddress.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/users/:id/addresses',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "AddressCreationParams" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.createAddress.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.put('/api/users/:id/addresses/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "AddressUpdateParams" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.updateAddress.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/users/:id/cards',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.getAllCards.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/users/:id/cards/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.getCard.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/users/:id/cards',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CardCreationParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.createCard.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.delete('/api/users/:id/cards/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new UserController();


            const promise = controller.removeCard.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/restaurants',
        function(request: any, response: any, next: any) {
            const args = {
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.getAll.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/restaurants/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.get.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.put('/api/restaurants/:id',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "RestaurantUpdateParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.update.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.delete('/api/restaurants/:id',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.remove.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/restaurants',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                expReq: { "in": "request", "name": "expReq", "required": true, "dataType": "object" },
                req: { "in": "body", "name": "req", "required": true, "ref": "RestaurantCreationParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.create.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/restaurants/:id/addresses/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.getAddress.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/restaurants/:id/addresses',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "AddressCreationParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.createAddress.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.put('/api/restaurants/:id/addresses/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "AddressUpdateParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.updateAddress.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/restaurants/:id/users',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.getAllEmployees.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/restaurants/:id/users/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.getEmployee.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/restaurants/:id/users/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "EmployeeCreationParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.createEmployee.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.delete('/api/restaurants/:id/users/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.removeEmployee.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.put('/api/restaurants/:id/users/:id_2',
        authenticateMiddleware([{ "jwt": [] }]),
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                id_2: { "in": "path", "name": "id_2", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "EmployeeUpdateParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RestaurantController();


            const promise = controller.updateEmployee.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/roles',
        function(request: any, response: any, next: any) {
            const args = {
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleController();


            const promise = controller.getAll.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/roles/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleController();


            const promise = controller.get.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/roles',
        function(request: any, response: any, next: any) {
            const args = {
                req: { "in": "body", "name": "req", "required": true, "ref": "RoleCreationParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleController();


            const promise = controller.create.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.put('/api/roles/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "RoleUpdateParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleController();


            const promise = controller.update.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.delete('/api/roles/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleController();


            const promise = controller.remove.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/roleEmployees',
        function(request: any, response: any, next: any) {
            const args = {
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleEmployeeController();


            const promise = controller.getAll.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/api/roleEmployees/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleEmployeeController();


            const promise = controller.get.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.post('/api/roleEmployees',
        function(request: any, response: any, next: any) {
            const args = {
                req: { "in": "body", "name": "req", "required": true, "ref": "RoleEmployeeCreationParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleEmployeeController();


            const promise = controller.create.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.put('/api/roleEmployees/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                req: { "in": "body", "name": "req", "required": true, "ref": "RoleEmployeeUpdateParams" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleEmployeeController();


            const promise = controller.update.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    app.delete('/api/roleEmployees/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new RoleEmployeeController();


            const promise = controller.remove.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return (request: any, _response: any, next: any) => {
            let responded = 0;
            let success = false;

            const succeed = function(user: any) {
                if (!success) {
                    success = true;
                    responded++;
                    request['user'] = user;
                    next();
                }
            }

            const fail = function(error: any) {
                responded++;
                if (responded == security.length && !success) {
                    error.status = 401;
                    next(error)
                }
            }

            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    let promises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        promises.push(expressAuthentication(request, name, secMethod[name]));
                    }

                    Promise.all(promises)
                        .then((users) => { succeed(users[0]); })
                        .catch(fail);
                } else {
                    for (const name in secMethod) {
                        expressAuthentication(request, name, secMethod[name])
                            .then(succeed)
                            .catch(fail);
                    }
                }
            }
        }
    }

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode;
                if (isController(controllerObj)) {
                    const headers = controllerObj.getHeaders();
                    Object.keys(headers).forEach((name: string) => {
                        response.set(name, headers[name]);
                    });

                    statusCode = controllerObj.getStatus();
                }

                if (data || data === false) { // === false allows boolean result
                    response.status(statusCode || 200).json(data);
                } else {
                    response.status(statusCode || 204).end();
                }
            })
            .catch((error: any) => next(error));
    }

    function getValidatedArgs(args: any, request: any): any[] {
        const fieldErrors: FieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors);
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors);
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors);
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.');
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.');
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }
}
