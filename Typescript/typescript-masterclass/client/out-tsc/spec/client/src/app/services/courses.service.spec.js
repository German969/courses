"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var courses_service_1 = require("./courses.service");
describe('Service: Courses', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [courses_service_1.CoursesService]
        });
    });
    it('should ...', testing_1.inject([courses_service_1.CoursesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=courses.service.spec.js.map