(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-course-summary-course-summary-module~pages-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/course-summary/course-summary.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/course-summary/course-summary.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"no-title\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"isModal\">\n            <ion-button fill=\"clear\" (click)=\"closeModal()\" [attr.aria-label]=\"'core.close' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-times\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!dataLoaded\" (ionRefresh)=\"refreshData($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"dataLoaded\">\n        <div *ngIf=\"course\" class=\"core-course-thumb\" #courseThumb>\n            <img *ngIf=\"course.courseImage\" [src]=\"course.courseImage\" core-external-content alt=\"\" />\n            <ion-icon *ngIf=\"!course.courseImage\" name=\"fas-graduation-cap\" class=\"course-icon\" aria-hidden=\"true\">\n            </ion-icon>\n        </div>\n        <div *ngIf=\"course\" class=\"course-container\">\n            <div class=\"list-item-limited-width\">\n                <ion-item class=\"ion-text-wrap course-name\">\n                    <ion-label>\n                        <p *ngIf=\"course.displayname && course.shortname && course.fullname != course.displayname\"\n                            class=\"core-course-shortname\">\n                            <core-format-text [text]=\"course.shortname\" contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                            </core-format-text>\n                        </p>\n                        <h1>\n                            <span class=\"sr-only\">{{ 'core.courses.aria:coursename' | translate }}</span>\n                            <core-format-text [text]=\"course.fullname\" contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                            </core-format-text>\n                        </h1>\n                        <ion-chip color=\"primary\" *ngIf=\"course.categoryname\" class=\"core-course-category ion-text-nowrap\">\n                            <span class=\"sr-only\">{{ 'core.courses.aria:coursecategory' | translate }}</span>\n                            <ion-label>\n                                <core-format-text [text]=\"course.categoryname\" contextLevel=\"coursecat\"\n                                    [contextInstanceId]=\"course.categoryid\">\n                                </core-format-text>\n                            </ion-label>\n                        </ion-chip>\n                    </ion-label>\n                    <ion-button fill=\"clear\" [href]=\"courseUrl\" core-link [showBrowserWarning]=\"false\"\n                        [attr.aria-label]=\"'core.openinbrowser' | translate\" slot=\"end\">\n                        <ion-icon name=\"fas-external-link-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"progress !== undefined || course.startdate || course.enddate\">\n                    <ion-label>\n                        <div class=\"core-course-progress\" *ngIf=\"progress !== undefined\">\n                            <core-progress-bar [progress]=\"progress\" a11yText=\"core.course.aria:sectionprogress\">\n                            </core-progress-bar>\n                        </div>\n                        <div *ngIf=\"course.startdate || course.enddate\" class=\"core-course-dates\">\n                            <p *ngIf=\"course.startdate\">\n                                <ion-icon name=\"fas-calendar\" aria-hidden=\"true\"></ion-icon>\n                                <strong>{{ 'core.course.startdate' | translate }}</strong><br>\n                                {{ course.startdate * 1000 | coreFormatDate:'strftimedaydatetime' }}\n                            </p>\n                            <p *ngIf=\"course.enddate\">\n                                <ion-icon name=\"fas-calendar\" aria-hidden=\"true\"></ion-icon>\n                                <strong>{{ 'core.course.enddate' | translate }}</strong><br>\n                                {{ course.enddate * 1000 | coreFormatDate:'strftimedaydatetime' }}\n                            </p>\n                        </div>\n                    </ion-label>\n                </ion-item>\n\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"course.summary\" detail=\"false\">\n                    <ion-label>\n                        <p class=\"item-heading\">\n                            {{'core.course.coursesummary' | translate}}\n                        </p>\n                        <core-format-text [text]=\"course.summary\" collapsible-item contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                        </core-format-text>\n                    </ion-label>\n                </ion-item>\n\n                <ion-list *ngIf=\"course.contacts && course.contacts.length\">\n                    <ion-item [button]=\"course.contacts.length >= 5\" class=\"ion-text-wrap\" (click)=\"toggleContacts()\"\n                        [attr.aria-label]=\"(contactsExpanded ? 'core.collapse' : 'core.expand') | translate\" detail=\"false\">\n                        <ion-icon *ngIf=\"course.contacts.length >= 5\" name=\"fas-chevron-right\" flip-rtl slot=\"start\" aria-hidden=\"true\"\n                            class=\"expandable-status-icon\" [class.expandable-status-icon-expanded]=\"contactsExpanded\">\n                        </ion-icon>\n                        <ion-label>\n                            <p class=\"item-heading\">\n                                {{ 'core.teachers' | translate }}\n                            </p>\n                        </ion-label>\n                    </ion-item>\n                    <ng-container *ngIf=\"contactsExpanded || course.contacts.length < 5\">\n                        <ion-item button class=\"ion-text-wrap\" *ngFor=\"let contact of course.contacts\" core-user-link [userId]=\"contact.id\"\n                            [courseId]=\"isEnrolled ? course.id : null\" [attr.aria-label]=\"'core.viewprofile' | translate\" detail=\"true\">\n                            <core-user-avatar [user]=\"contact\" slot=\"start\" [userId]=\"contact.id\" [courseId]=\"isEnrolled ? course.id : null\"\n                                [linkProfile]=\"false\">\n                            </core-user-avatar>\n                            <ion-label>\n                                <p class=\"item-heading\">{{contact.fullname}}</p>\n                            </ion-label>\n                        </ion-item>\n                    </ng-container>\n                    <core-spacer></core-spacer>\n                </ion-list>\n\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"course.customfields\">\n                    <ion-label>\n                        <ng-container *ngFor=\"let field of course.customfields\">\n                            <div *ngIf=\"field.value\"\n                                class=\"core-customfield core-customfield_{{field.type}} core-customfield_{{field.shortname}}\">\n                                <span class=\"core-customfieldname\">\n                                    <core-format-text [text]=\"field.name\" contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                                    </core-format-text>\n                                    <span class=\"core-customfieldseparator\">: </span>\n                                </span>\n                                <span class=\"core-customfieldvalue\">\n                                    <core-format-text [text]=\"field.value\" [collapsible-item]=\"field.type == 'textarea'  ? '' : null\"\n                                        contextLevel=\"course\" [contextInstanceId]=\"course.id\">\n                                    </core-format-text>\n                                </span>\n                            </div>\n                        </ng-container>\n                    </ion-label>\n                </ion-item>\n            </div>\n        </div>\n    </core-loading>\n</ion-content>\n\n<ion-footer *ngIf=\"course && dataLoaded\">\n    <div class=\"list-item-limited-width\">\n        <ng-container *ngIf=\"canAccessCourse\">\n            <ion-button *ngFor=\"let item of courseMenuHandlers\" (click)=\"openMenuItem(item)\" [class]=\"'ion-text-wrap '+ item.data.class\"\n                expand=\"block\">\n                <ion-icon *ngIf=\"item.data.icon\" [name]=\"item.data.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{item.data.title | translate }}</ion-label>\n            </ion-button>\n        </ng-container>\n\n        <ion-button expand=\"block\" (click)=\"enrolMe()\" *ngIf=\"!isEnrolled && (selfEnrolInstances.length > 0 || otherEnrolments)\"\n            class=\"ion-text-wrap\">\n            {{ 'core.courses.enrolme' | translate }}\n        </ion-button>\n\n        <ion-card class=\"core-info-card ion-text-wrap\" *ngIf=\"!isEnrolled && !selfEnrolInstances.length && !otherEnrolments\">\n            <ion-item>\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.courses.notenrollable' | translate }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <ion-button (click)=\"openCourse()\" *ngIf=\"!isModal && canAccessCourse\" expand=\"block\" fill=\"outline\" class=\"ion-text-wrap\">\n            <ion-icon name=\"fas-eye\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n            {{ 'core.course.viewcourse' | translate }}\n        </ion-button>\n    </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/core/features/course/pages/course-summary/course-summary.module.ts":
/*!********************************************************************************!*\
  !*** ./src/core/features/course/pages/course-summary/course-summary.module.ts ***!
  \********************************************************************************/
/*! exports provided: CoreCoursePreviewPageComponentModule, CoreCourseSummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursePreviewPageComponentModule", function() { return CoreCoursePreviewPageComponentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSummaryPageModule", function() { return CoreCourseSummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _course_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-summary */ "./src/core/features/course/pages/course-summary/course-summary.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





const routes = [
    {
        path: '',
        component: _course_summary__WEBPACK_IMPORTED_MODULE_4__["CoreCourseSummaryPage"],
    },
];
let CoreCoursePreviewPageComponentModule = class CoreCoursePreviewPageComponentModule {
};
CoreCoursePreviewPageComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _course_summary__WEBPACK_IMPORTED_MODULE_4__["CoreCourseSummaryPage"],
        ],
    })
], CoreCoursePreviewPageComponentModule);

let CoreCourseSummaryPageModule = class CoreCourseSummaryPageModule {
};
CoreCourseSummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            CoreCoursePreviewPageComponentModule,
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseSummaryPageModule);



/***/ }),

/***/ "./src/core/features/course/pages/course-summary/course-summary.scss":
/*!***************************************************************************!*\
  !*** ./src/core/features/course/pages/course-summary/course-summary.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host {\n  --thumb-height: 180px;\n}\n:host ion-content {\n  position: absolute;\n}\n:host .core-course-thumb {\n  background: var(--course-color, white);\n  overflow: hidden;\n  text-align: center;\n  height: var(--thumb-height);\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n}\n:host .core-course-thumb.course-color-0 {\n  --course-color: var(--core-course-color-0);\n  --course-color-tint: var(--core-course-color-0-tint);\n}\n:host .core-course-thumb.course-color-1 {\n  --course-color: var(--core-course-color-1);\n  --course-color-tint: var(--core-course-color-1-tint);\n}\n:host .core-course-thumb.course-color-2 {\n  --course-color: var(--core-course-color-2);\n  --course-color-tint: var(--core-course-color-2-tint);\n}\n:host .core-course-thumb.course-color-3 {\n  --course-color: var(--core-course-color-3);\n  --course-color-tint: var(--core-course-color-3-tint);\n}\n:host .core-course-thumb.course-color-4 {\n  --course-color: var(--core-course-color-4);\n  --course-color-tint: var(--core-course-color-4-tint);\n}\n:host .core-course-thumb.course-color-5 {\n  --course-color: var(--core-course-color-5);\n  --course-color-tint: var(--core-course-color-5-tint);\n}\n:host .core-course-thumb.course-color-6 {\n  --course-color: var(--core-course-color-6);\n  --course-color-tint: var(--core-course-color-6-tint);\n}\n:host .core-course-thumb.course-color-7 {\n  --course-color: var(--core-course-color-7);\n  --course-color-tint: var(--core-course-color-7-tint);\n}\n:host .core-course-thumb.course-color-8 {\n  --course-color: var(--core-course-color-8);\n  --course-color-tint: var(--core-course-color-8-tint);\n}\n:host .core-course-thumb.course-color-9 {\n  --course-color: var(--core-course-color-9);\n  --course-color-tint: var(--core-course-color-9-tint);\n}\n:host .core-course-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host .core-course-thumb ion-icon.course-icon {\n  padding: 24px;\n  font-size: calc(var(--thumb-height) - 48px);\n  color: var(--course-color-tint);\n}\n:host .course-container {\n  position: relative;\n  top: calc(var(--thumb-height) - var(--big-radius));\n  border-radius: var(--big-radius) var(--big-radius) 0 0;\n  background-color: var(--ion-background-color);\n  box-shadow: var(--drop-shadow-top);\n  -webkit-clip-path: inset(-5px 0px 0px 0px);\n          clip-path: inset(-5px 0px 0px 0px);\n}\n:host .course-name {\n  --background: transparent;\n}\n:host .course-name ion-label {\n  margin-bottom: 0px;\n}\n:host h1 {\n  font-size: 20px;\n}\n:host .core-course-category {\n  margin-left: 0;\n  margin-right: 0;\n}\n:host .core-course-dates {\n  background: var(--light);\n  border-radius: var(--small-radius);\n  padding: 8px;\n  width: 100%;\n}\n:host .core-course-dates p {\n  margin-bottom: 8px;\n}\n:host .core-course-dates p:last-child {\n  margin-bottom: 0px;\n}\n:host .core-course-dates ion-icon {\n  margin-right: 8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .core-course-dates ion-icon {\n    margin-right: unset;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n:host .core-customfield {\n  margin-bottom: 8px;\n}\n:host .core-customfield.core-customfield_textarea {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 12px;\n}\n:host .core-customfield .core-customfieldname {\n  margin-right: 4px;\n  font-weight: bold;\n  display: inline;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .core-customfield .core-customfieldname {\n    margin-right: unset;\n    -webkit-margin-end: 4px;\n    margin-inline-end: 4px;\n  }\n}\n:host .core-customfield .core-customfieldvalue {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9jb3Vyc2UvcGFnZXMvY291cnNlLXN1bW1hcnkvY291cnNlLXN1bW1hcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQWtHQTs7RUFBQTtBQ3BHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDN0RBO0VBQ0kscUJBQUE7QUFvREo7QUFsREk7RUFDSSxrQkFBQTtBQW9EUjtBQWpESTtFQUNJLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBbURSO0FBaERZO0VBQ0ksMENBQUE7RUFDQSxvREFBQTtBQWtEaEI7QUFwRFk7RUFDSSwwQ0FBQTtFQUNBLG9EQUFBO0FBc0RoQjtBQXhEWTtFQUNJLDBDQUFBO0VBQ0Esb0RBQUE7QUEwRGhCO0FBNURZO0VBQ0ksMENBQUE7RUFDQSxvREFBQTtBQThEaEI7QUFoRVk7RUFDSSwwQ0FBQTtFQUNBLG9EQUFBO0FBa0VoQjtBQXBFWTtFQUNJLDBDQUFBO0VBQ0Esb0RBQUE7QUFzRWhCO0FBeEVZO0VBQ0ksMENBQUE7RUFDQSxvREFBQTtBQTBFaEI7QUE1RVk7RUFDSSwwQ0FBQTtFQUNBLG9EQUFBO0FBOEVoQjtBQWhGWTtFQUNJLDBDQUFBO0VBQ0Esb0RBQUE7QUFrRmhCO0FBcEZZO0VBQ0ksMENBQUE7RUFDQSxvREFBQTtBQXNGaEI7QUFsRlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBb0ZaO0FBakZRO0VBQ0ksYUFBQTtFQUNBLDJDQUFBO0VBQ0EsK0JBQUE7QUFtRlo7QUEvRUk7RUFDSSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0RBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQWlGUjtBQTlFSTtFQUNJLHlCQUFBO0FBZ0ZSO0FBL0VRO0VBQ0ksa0JBQUE7QUFpRlo7QUE3RUk7RUFDSSxlQUFBO0FBK0VSO0FBNUVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUE4RVI7QUEzRUk7RUFDSSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE2RVI7QUEzRVE7RUFDSSxrQkFBQTtBQTZFWjtBQTFFUTtFQUNJLGtCQUFBO0FBNEVaO0FBekVRO0VMK0tKLGlCSzlLeUM7QUEyRTdDO0FMc0dNO0VBQ0U7SUFLSSxtQkFBQTtJQUtGLHVCSzVMbUM7SUw2TG5DLHNCSzdMbUM7RUFpRjNDO0FBQ0Y7QUE3RUk7RUFDSSxrQkFBQTtBQStFUjtBQTdFUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBK0VaO0FBNUVRO0VMZ0tKLGlCSy9KeUM7RUFDakMsaUJBQUE7RUFDQSxlQUFBO0FBOEVaO0FMa0ZNO0VBQ0U7SUFLSSxtQkFBQTtJQUtGLHVCSzdLbUM7SUw4S25DLHNCSzlLbUM7RUFzRjNDO0FBQ0Y7QUFuRlE7RUFDSSxlQUFBO0FBcUZaIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL2NvdXJzZS9wYWdlcy9jb3Vyc2Utc3VtbWFyeS9jb3Vyc2Utc3VtbWFyeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcblxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXG4gKi9cblxuXG4vLyBTdHJpbmcgVXRpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFN0cmluZyBSZXBsYWNlIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XG5cbiAgQGlmICRpbmRleCB7XG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xuICB9XG5cbiAgQHJldHVybiAkc3RyaW5nO1xufVxuXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XG4gIC8vIGVtcHR5IGFycmF5L2xpc3RcbiAgJHNwbGl0LWFycjogKCk7XG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcbiAgICAvLyBnZXQgdGhlIHN1YnN0cmluZyBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gdGhlIHNlcGFyYXRvclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XG4gICAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRpdGVtKTtcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xuICAgIC8vIGZpbmQgbmV3IGluZGV4IG9mIHNlcGFyYXRvclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICB9XG4gIC8vIGFkZCB0aGUgcmVtYWluaW5nIHN0cmluZyB0byBsaXN0ICh0aGUgbGFzdCBpdGVtKVxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XG5cbiAgQHJldHVybiAkc3BsaXQtYXJyO1xufVxuXG5cbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XG5cbiAgQGlmICRzdGFydC1pbmRleCB7XG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xuICAgICRlbmQtaW5kZXg6IHN0ci1pbmRleCgkcG9zdCwgJGVuZCk7XG5cbiAgICBAaWYgJGVuZC1pbmRleCB7XG4gICAgICBAcmV0dXJuIHN0ci1zbGljZSgkcG9zdCwgMSwgJGVuZC1pbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbnVsbDtcbn1cblxuXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xuICBAaWYgKHR5cGUtb2YoJHN0cmluZykgPT0gc3RyaW5nKSB7XG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcbiAgfVxuXG4gIEByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xuICAkc3BhY2VzOiBzdHItcmVwbGFjZSgkdmFsLCBcIiBcIiwgXCIlMjBcIik7XG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XG4gIEByZXR1cm4gJGVuY29kZWQ7XG59XG5cblxuLy8gQWRkIFJvb3QgU2VsZWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxuLy9cbi8vIEV4YW1wbGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdFwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxuLy9cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLmZpeGVkKVwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2hhZG93XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gYWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsICRhZGRIb3N0U2VsZWN0b3IpIHtcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XG5cbiAgJGxpc3Q6ICgpO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QoIGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBhIGNsYXNzIG9uIHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSk6aG9zdChcIik7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcblxuICAgICAgJG5ldy1lbGVtZW50OiAoKTtcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xuXG4gICAgICBAZWFjaCAkZWxlbWVudCBpbiAkZWxlbWVudHMge1xuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcblxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcblxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QgaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGp1c3QgdGhlIGhvc3RcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiLCBjb21tYSk7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XG4gICAgLy8gb3Igbm9ybWFsIGVsZW1lbnQgc28gYXBwZW5kIGJvdGggdGhlIGRpciBjaGVjayBhbmQgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSB7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIiN7JGFkZEhvc3RTZWxlY3Rvcn0gI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gJGxpc3Q7XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcbiAqL1xuXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XG4gIH1cbn1cblxuLy8gR2V0cyB0aGUgc3BlY2lmaWMgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSB0aGUgbmFtZSBhbmQgdmFyaWF0aW9uLiBBbHBoYS9yZ2IgYXJlIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlLCAwLjUpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpLCAwLjUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XG4gICR2YWx1ZXM6IG1hcC1nZXQoJGNvbG9ycywgJG5hbWUpO1xuICAkdmFsdWU6IG1hcC1nZXQoJHZhbHVlcywgJHZhcmlhdGlvbik7XG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcblxuICBAaWYgKCR2YXJpYXRpb24gPT0gYmFzZSkge1xuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XG4gIH1cblxuICBAaWYgKCRhbHBoYSkge1xuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcbiAgICBAcmV0dXJuIHJnYmEodmFyKCN7JHZhcmlhYmxlfS1yZ2IsICR2YWx1ZSksICRhbHBoYSk7XG4gIH1cbiAgQGlmICgkcmdiKSB7XG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcbiAgfVxuXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xufVxuXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcbiAqL1xuXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbnRlbnQ6IFwiXCI7XG5cbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICBAY29udGVudDtcblxuICAvLyAkcm9vdDogI3smfTtcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAvLyAgICN7JHJvb3R9IHtcbiAgLy8gICAgIEBjb250ZW50O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAkcm9vdDogI3smfTtcblxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgfSBAZWxzZSB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgQGF0LXJvb3Qge1xuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICN7JHByb3B9LXRvcDogJHRvcDtcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICByaWdodDogJHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgdG9wOiAkdG9wO1xuICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAkb3RoZXItZGlyOiBudWxsO1xuXG4gIEBpZiAkZGlyID09IGx0ciB7XG4gICAgJG90aGVyLWRpcjogcnRsO1xuICB9IEBlbHNlIHtcbiAgICAkb3RoZXItZGlyOiBsdHI7XG4gIH1cblxuICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgZGlyZWN0aW9uOiAkZGlyO1xuICB9XG4gIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICRleHRyYTogbnVsbDtcblxuICAkeDogbnVsbDtcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xuICovXG5cbi8vIFJlc3BvbnNpdmUgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG1ha2UtZ3JpZC13aWR0aHMoJHdpZHRoczogJGdyaWQtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5cbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEl0ZW0gTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gaXRlbS1wdXNoLXN2Zy11cmwoJGZpbGwpIHtcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XG5cbiAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCB0cnVlKTtcbn1cbiIsIkB1c2UgXCJzYXNzOm1hdGhcIiBhcyBtYXRoO1xuXG4vKipcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgNi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XG4gICAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudCk7XG4gIH1cblxuICAvLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuICAvLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCAtMTAuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xuICB9XG5cbiAgLy8gSW9uaWMgQ29sb3JzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuICAvLyBjb2xvcnMgbWFwXG5cbiAgQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzKSB7XG4gICAgICAkYmFzZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XG4gICAgICAkbGlnaHQ6IG1hcC1nZXQoJGJhc2UsICdsaWdodCcpO1xuXG4gICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGxpZ2h0KTtcblxuICAgICAgYm9keS5kYXJrIHtcbiAgICAgICAgICAkZGFyazogbWFwLWdldCgkYmFzZSwgJ2RhcmsnKTtcbiAgICAgICAgICAkZGFyazogbWl4KCRsaWdodCwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XG4gICAgICAgICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRkYXJrKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpIHtcbiAgICAgICRjb250cmFzdDogZ2V0X2NvbnRyYXN0X2NvbG9yKCRiYXNlKTtcbiAgICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGJhc2UpO1xuICAgICAgJHRpbnQ6IGdldC1jb2xvci10aW50LXBlcmNlbnQoJGJhc2UpO1xuXG4gICAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcbiAgICAgIC0tI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG5cbiAgICAgIC8vIEludGVybmFsIGlvbmljIHVzZSBvbmx5LlxuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG5cbiAgICAgIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XG4gICAgICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xuICAgICAgfVxuICB9XG5cblxuIEBtaXhpbiBjb3JlLWZvY3VzKCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xuICAgIH1cbiB9XG5cbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgMXB4IHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG59XG5cbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHByb3BlcnRpZXM6IGFsbCwgJGR1cmF0aW9uOiA1MDBtcywgJHRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQpIHtcbiAgICAkdHJhbnNpdGlvbnM6ICgpO1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XG4gICAgICAkdHJhbnNpdGlvbnM6IGFwcGVuZCgkdHJhbnNpdGlvbnMsICRwcm9wZXJ0eSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiwgY29tbWEpO1xuICAgIH1cblxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcbn1cblxuLyoqXG4gKiBTYW1lIGFzIGl0ZW0tcHVzaC1zdmctdXJsIGJ1dCBhZG1pdHMgZmxpcC1ydGxcbiAqL1xuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAgICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xuXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCAkcHggJHR5cGUgJGNvbG9yLCBudWxsKTtcbn1cblxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1lbmQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG5cbiAgICBAaWYgKCRlbmQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICB9XG4gICAgQGlmICgkc3RhcnQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBvc2l0aW9uKCR0b3AsICRzYWZlLWFyZWEtZW5kLCAkYm90dG9tLCAkc2FmZS1hcmVhLXN0YXJ0KTtcbn1cblxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrbW9kZSgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiYm9keS5kYXJrXCIpfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XG4gICAgZmxleDogMCAwICR3aWR0aDtcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIHZhcigtLWhvcml6b250YWwtbWFyZ2luKTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ29sb3IgbWl4aW5zLlxuQGZ1bmN0aW9uIGdldF9icmlnaHRuZXNzKCRjb2xvcikge1xuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xufVxuXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XG4gICAgJGx1bWlhbmNlOiBsdW1pbmFuY2UoJGNvbG9yKTtcblxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXG4gICAgJHdoaXRlQ29udHJhc3Q6ICgkbHVtaWFuY2UgKyAwLjA1KSAvICgxICsgMC4wNSk7XG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xuXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xufVxuXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XG4gICAgJHI6IHJlZCgkY29sb3IpO1xuICAgICRnOiBncmVlbigkY29sb3IpO1xuICAgICRiOiBibHVlKCRjb2xvcik7XG5cbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XG5cbiAgICBAcmV0dXJuIGlmKCR5aXEgPj0gMTI4LCAkZGFyaywgJGxpZ2h0KTtcbn1cblxuLy8gV0NBRyBjb250cmFzdCBhbGdvcnl0aG1cbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xuICAgICRiYWNrZ3JvdW5kTHVtaW5hbmNlOiBsdW1pbmFuY2UoJGJhY2tncm91bmQpO1xuXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcbiAgICAgICAgQHJldHVybiAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KSAvICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSk7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xuICAgIH1cbn1cblxuQGZ1bmN0aW9uIGx1bWluYW5jZSgkY29sb3IpIHtcbiAgICAkcjogcmVkKCRjb2xvcik7XG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcblxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcbiAgICAkZzogY29tcG9uZW50LWx1bWluYW5jZSgkZyk7XG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xuXG4gICAgQHJldHVybiAkciAqIDAuMjEyNiArICRnICogMC43MTUyICsgJGIgKiAwLjA3MjI7XG59XG5cbkBmdW5jdGlvbiBjb21wb25lbnQtbHVtaW5hbmNlKCR2YWx1ZSkge1xuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xuXG4gICAgQGlmICgkdmFsdWUgPD0gMC4wMzkyOCkge1xuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICBAcmV0dXJuIG1hdGgucG93KCgkdmFsdWUgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4iLCIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICAgICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxuJGdyYXktNDAwOiAgICAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICAgICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxuJGJsYWNrOiAgICAgICAjMDAwMDAwICFkZWZhdWx0OyAvLyBBdm9pZCB1c2FnZVxuXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XG4kY3lhbjogICAgICAgICMwMDgxOTYgIWRlZmF1bHQ7IC8vIE5vdCB1c2VkLlxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xuJHllbGxvdzogICAgICAjZjBhZDRlICFkZWZhdWx0O1xuXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XG5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcms6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAkcmVkICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kY29sb3JzOiAgKFxuICAgIHByaW1hcnk6IChsaWdodDogJHByaW1hcnksIGRhcms6ICRwcmltYXJ5KSxcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcbiAgICB3YXJuaW5nOiAobGlnaHQ6ICR3YXJuaW5nKSxcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxuICAgIGxpZ2h0OiAobGlnaHQ6ICRsaWdodCwgZGFyazogJGRhcmspLFxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXG4pICFkZWZhdWx0O1xuXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgICB4czogMCxcbiAgICBzbTogNTc2cHgsXG4gICAgbWQ6IDc2OHB4LFxuICAgIGxnOiA5OTJweCxcbiAgICB0YWJsZXQ6IDk5MnB4LFxuICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG5cbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS4gKGRlcHJlY2F0ZWQgb24gNC4wKVxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdXNlciBwYWdlLlxuJGNvcmUtdXNlci1oaWRlLXNpdGVpbmZvOiAkY29yZS1tb3JlLWhpZGUtc2l0ZWluZm8gIWRlZmF1bHQ7XG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcbiRjb3JlLXVzZXItaGlkZS1zaXRldXJsOiAkY29yZS1tb3JlLWhpZGUtc2l0ZXVybCAhZGVmYXVsdDtcblxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cbiRhY3Rpdml0eS1pY29uLWNvbG9yczogKFxuICAgIGFkbWluaXN0cmF0aW9uOiAjNWQ2M2Y2LFxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXG4gICAgY29sbGFib3JhdGlvbjogI2Y3NjM0ZCxcbiAgICBjb21tdW5pY2F0aW9uOiAjMTFhNjc2LFxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXG4gICAgaW50ZXJmYWNlOiAjYTM3OGZmXG4pICFkZWZhdWx0O1xuXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jb2xvcnM6IChcbiAgICBjYXRlZ29yeTogIzhlMjRhYSxcbiAgICBjb3Vyc2U6ICRyZWQsXG4gICAgZ3JvdXA6ICR5ZWxsb3csXG4gICAgdXNlcjogJGJsdWUsXG4gICAgc2l0ZTogJGdyZWVuXG4pICFkZWZhdWx0O1xuIiwiQGltcG9ydCAnfnRoZW1lL2dsb2JhbHMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgICAtLXRodW1iLWhlaWdodDogMTgwcHg7XG5cbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuY29yZS1jb3Vyc2UtdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb3Vyc2UtY29sb3IsIHdoaXRlKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXRodW1iLWhlaWdodCk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIEBmb3IgJGkgZnJvbSAwIHRvIGxlbmd0aCgkY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgJi5jb3Vyc2UtY29sb3ItI3skaX0ge1xuICAgICAgICAgICAgICAgIC0tY291cnNlLWNvbG9yOiB2YXIoLS1jb3JlLWNvdXJzZS1jb2xvci0jeyRpfSk7XG4gICAgICAgICAgICAgICAgLS1jb3Vyc2UtY29sb3ItdGludDogdmFyKC0tY29yZS1jb3Vyc2UtY29sb3ItI3skaX0tdGludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uLmNvdXJzZS1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tdGh1bWItaGVpZ2h0KSAtIDQ4cHgpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvdXJzZS1jb2xvci10aW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb3Vyc2UtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IGNhbGModmFyKC0tdGh1bWItaGVpZ2h0KSAtIHZhcigtLWJpZy1yYWRpdXMpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmlnLXJhZGl1cykgdmFyKC0tYmlnLXJhZGl1cykgMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3Atc2hhZG93LXRvcCk7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoLTVweCAwcHggMHB4IDBweCk7XG4gICAgfVxuXG4gICAgLmNvdXJzZS1uYW1lIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5jb3JlLWNvdXJzZS1jYXRlZ29yeSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLmNvcmUtY291cnNlLWRhdGVzIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbC1yYWRpdXMpO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIDhweCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5jb3JlLWN1c3RvbWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICYuY29yZS1jdXN0b21maWVsZF90ZXh0YXJlYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29yZS1jdXN0b21maWVsZG5hbWUge1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwobnVsbCwgNHB4KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG4gICAgICAgIC5jb3JlLWN1c3RvbWZpZWxkdmFsdWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/core/features/course/pages/course-summary/course-summary.ts":
/*!*************************************************************************!*\
  !*** ./src/core/features/course/pages/course-summary/course-summary.ts ***!
  \*************************************************************************/
/*! exports provided: CoreCourseSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSummaryPage", function() { return CoreCourseSummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_course_services_course_options_delegate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/course/services/course-options-delegate */ "./src/core/features/course/services/course-options-delegate.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _courses_components_self_enrol_password_self_enrol_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../courses/components/self-enrol-password/self-enrol-password */ "./src/core/features/courses/components/self-enrol-password/self-enrol-password.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _singletons_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/colors */ "./src/core/singletons/colors.ts");
/* harmony import */ var _singletons_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/text */ "./src/core/singletons/text.ts");
/* harmony import */ var _classes_promised_value__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @classes/promised-value */ "./src/core/classes/promised-value.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
















const ENROL_BROWSER_METHODS = ['fee', 'paypal'];
/**
 * Page that shows the summary of a course including buttons to enrol and other available options.
 */
let CoreCourseSummaryPage = class CoreCourseSummaryPage {
    constructor() {
        this.courseId = 0;
        this.isEnrolled = false;
        this.canAccessCourse = true;
        this.selfEnrolInstances = [];
        this.otherEnrolments = false;
        this.dataLoaded = false;
        this.isModal = false;
        this.contactsExpanded = false;
        this.courseUrl = '';
        this.courseMenuHandlers = [];
        this.useGuestAccess = false;
        this.guestInstanceId = new _classes_promised_value__WEBPACK_IMPORTED_MODULE_15__["CorePromisedValue"]();
        this.courseData = new _classes_promised_value__WEBPACK_IMPORTED_MODULE_15__["CorePromisedValue"]();
        this.waitStart = 0;
        this.enrolUrl = '';
        this.pageDestroyed = false;
        this.waitingForBrowserEnrol = false;
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = _singletons__WEBPACK_IMPORTED_MODULE_8__["Platform"].resume.subscribe(() => {
            if (!this.waitingForBrowserEnrol || !this.dataLoaded) {
                return;
            }
            _singletons__WEBPACK_IMPORTED_MODULE_8__["NgZone"].run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.waitingForBrowserEnrol = false;
                this.dataLoaded = false;
                yield this.refreshData();
            }));
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.courseId) {
                // Opened as a page.
                try {
                    this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                    _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].back();
                    this.closeModal(); // Just in case.
                    return;
                }
                this.course = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('course');
            }
            else {
                // Opened as a modal.
                this.isModal = true;
            }
            const currentSiteUrl = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getRequiredCurrentSite().getURL();
            this.enrolUrl = _singletons_text__WEBPACK_IMPORTED_MODULE_14__["CoreText"].concatenatePaths(currentSiteUrl, 'enrol/index.php?id=' + this.courseId);
            this.courseUrl = _singletons_text__WEBPACK_IMPORTED_MODULE_14__["CoreText"].concatenatePaths(currentSiteUrl, 'course/view.php?id=' + this.courseId);
            yield this.getCourse();
        });
    }
    /**
     * Check if the user can access as guest.
     *
     * @return Promise resolved if can access as guest, rejected otherwise. Resolve param indicates if
     *         password is required for guest access.
     */
    canAccessAsGuest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guestInstanceId = yield this.guestInstanceId;
            if (guestInstanceId === undefined) {
                return false;
            }
            const info = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCourseGuestEnrolmentInfo(guestInstanceId);
            // Guest access with password is not supported by the app.
            return !!info.status && !info.passwordrequired;
        });
    }
    /**
     * Convenience function to get course. We use this to determine if a user can see the course or not.
     *
     * @param refresh If it's refreshing content.
     */
    getCourse(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.otherEnrolments = false;
            try {
                yield Promise.all([
                    this.getEnrolmentMethods(),
                    this.getCourseData(),
                    this.loadCourseExtraData(),
                ]);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting enrolment data');
            }
            yield this.setCourseColor();
            if (!this.course ||
                !('progress' in this.course) ||
                typeof this.course.progress !== 'number' ||
                this.course.progress < 0 ||
                this.course.completionusertracked === false) {
                this.progress = undefined;
            }
            else {
                this.progress = this.course.progress;
            }
            yield this.loadMenuHandlers(refresh);
            this.dataLoaded = true;
        });
    }
    /**
     * Get course enrolment methods.
     */
    getEnrolmentMethods() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selfEnrolInstances = [];
            this.guestInstanceId.reset();
            const enrolmentMethods = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCourseEnrolmentMethods(this.courseId);
            enrolmentMethods.forEach((method) => {
                if (!method.status) {
                    return;
                }
                if (method.type === 'self') {
                    this.selfEnrolInstances.push(method);
                }
                else if (method.type === 'guest') {
                    this.guestInstanceId.resolve(method.id);
                }
                else {
                    // Other enrolments that comes from that WS should need user action.
                    this.otherEnrolments = true;
                }
            });
            if (!this.guestInstanceId.isSettled()) {
                // No guest instance found.
                this.guestInstanceId.resolve(undefined);
            }
        });
    }
    /**
     * Get course data.
     */
    getCourseData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Check if user is enrolled in the course.
                try {
                    this.course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getUserCourse(this.courseId);
                    this.isEnrolled = true;
                }
                catch (_a) {
                    // The user is not enrolled in the course. Use getCourses to see if it's an admin/manager and can see the course.
                    this.isEnrolled = false;
                    this.course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCourse(this.courseId);
                }
                // Success retrieving the course, we can assume the user has permissions to view it.
                this.canAccessCourse = true;
                this.useGuestAccess = false;
            }
            catch (_b) {
                // The user is not an admin/manager. Check if we can provide guest access to the course.
                this.canAccessCourse = yield this.canAccessAsGuest();
                this.useGuestAccess = this.canAccessCourse;
            }
            this.courseData.resolve(this.course);
        });
    }
    /**
     * Load some extra data for the course.
     */
    loadCourseExtraData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const courseByField = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCourseByField('id', this.courseId);
                const courseData = yield this.courseData;
                if (courseData) {
                    courseData.customfields = courseByField.customfields;
                    courseData.contacts = courseByField.contacts;
                    courseData.displayname = courseByField.displayname;
                    courseData.categoryname = courseByField.categoryname;
                    courseData.overviewfiles = courseByField.overviewfiles;
                }
                else {
                    this.course = courseByField;
                    this.courseData.resolve(courseByField);
                }
                // enrollmentmethods contains ALL enrolment methods including manual.
                if (!this.isEnrolled && ((_a = courseByField.enrollmentmethods) === null || _a === void 0 ? void 0 : _a.some((method) => ENROL_BROWSER_METHODS.includes(method)))) {
                    this.otherEnrolments = true;
                }
            }
            catch (_b) {
                // Ignore errors.
            }
        });
    }
    /**
     * Load the course menu handlers.
     *
     * @param refresh If it's refreshing content.
     * @return Promise resolved when done.
     */
    loadMenuHandlers(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.course) {
                return;
            }
            this.courseMenuHandlers =
                yield _features_course_services_course_options_delegate__WEBPACK_IMPORTED_MODULE_6__["CoreCourseOptionsDelegate"].getMenuHandlersToDisplay(this.course, refresh, this.useGuestAccess);
        });
    }
    /**
     * Open the course.
     *
     * @param replaceCurrentPage If current place should be replaced in the navigation stack.
     */
    openCourse(replaceCurrentPage = false) {
        if (!this.canAccessCourse || !this.course || this.isModal) {
            return;
        }
        _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_7__["CoreCourseHelper"].openCourse(this.course, { params: { isGuest: this.useGuestAccess }, replace: replaceCurrentPage });
    }
    /**
     * Enrol in browser.
     */
    browserEnrol() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Send user to browser to enrol. Warn the user first.
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.courses.browserenrolinstructions'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.courses.completeenrolmentbrowser'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.openinbrowser'));
            }
            catch (_a) {
                // User canceled.
                return;
            }
            this.waitingForBrowserEnrol = true;
            yield _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getRequiredCurrentSite().openInBrowserWithAutoLogin(this.enrolUrl, undefined, {
                showBrowserWarning: false,
            });
        });
    }
    /**
     * Confirm user to Self enrol in course.
     *
     * @param enrolMethod The enrolment method.
     */
    selfEnrolConfirm(enrolMethod) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.courses.confirmselfenrol'), enrolMethod.name);
                this.selfEnrolInCourse(enrolMethod.id);
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Self enrol in a course.
     *
     * @param instanceId The instance ID.
     * @param password Password to use.
     * @return Promise resolved when self enrolled.
     */
    selfEnrolInCourse(instanceId, password = '') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showModalLoading('core.loading', true);
            try {
                yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].selfEnrol(this.courseId, password, instanceId);
                // Close modal and refresh data.
                this.isEnrolled = true;
                this.dataLoaded = false;
                // Sometimes the list of enrolled courses takes a while to be updated. Wait for it.
                yield this.waitForEnrolled(true);
                yield this.refreshData().finally(() => {
                    // My courses have been updated, trigger event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].trigger(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesProvider"].EVENT_MY_COURSES_UPDATED, {
                        courseId: this.courseId,
                        course: this.course,
                        action: _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesProvider"].ACTION_ENROL,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId());
                });
                this.openCourse(true);
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
            catch (error) {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
                if (error && error.errorcode === _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesProvider"].ENROL_INVALID_KEY) {
                    // Initialize the self enrol modal.
                    // Invalid password, show the modal to enter the password.
                    const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].openModal({
                        component: _courses_components_self_enrol_password_self_enrol_password__WEBPACK_IMPORTED_MODULE_9__["CoreCoursesSelfEnrolPasswordComponent"],
                        componentProps: { password },
                    });
                    if (modalData !== undefined) {
                        this.selfEnrolInCourse(instanceId, modalData);
                        return;
                    }
                    if (!password) {
                        // No password entered, don't show error.
                        return;
                    }
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorselfenrol', true);
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher The refresher if this was triggered by a Pull To Refresh.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateUserCourses());
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCourse(this.courseId));
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCourseEnrolmentMethods(this.courseId));
            promises.push(_features_course_services_course_options_delegate__WEBPACK_IMPORTED_MODULE_6__["CoreCourseOptionsDelegate"].clearAndInvalidateCoursesOptions(this.courseId));
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCoursesByField('id', this.courseId));
            if (this.guestInstanceId.value) {
                promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCourseGuestEnrolmentInfo(this.guestInstanceId.value));
            }
            yield Promise.all(promises).finally(() => this.getCourse()).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Wait for the user to be enrolled in the course.
     *
     * @param first If it's the first call (true) or it's a recursive call (false).
     * @return Promise resolved when enrolled or timeout.
     */
    waitForEnrolled(first) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (first) {
                this.waitStart = Date.now();
            }
            // Check if user is enrolled in the course.
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateUserCourses());
            try {
                yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getUserCourse(this.courseId);
            }
            catch (_a) {
                // Not enrolled, wait a bit and try again.
                if (this.pageDestroyed || (Date.now() - this.waitStart > 60000)) {
                    // Max time reached or the user left the view, stop.
                    return;
                }
                return new Promise((resolve) => {
                    setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (!this.pageDestroyed) {
                            // Wait again.
                            yield this.waitForEnrolled();
                        }
                        resolve();
                    }), 5000);
                });
            }
        });
    }
    /**
     * Opens a menu item registered to the delegate.
     *
     * @param item Item to open
     */
    openMenuItem(item) {
        const params = Object.assign({ course: this.course }, item.data.pageParams);
        _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].navigateToSitePath(item.data.page, { params });
    }
    /**
     * Set course color.
     */
    setCourseColor() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.course) {
                return;
            }
            yield _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_12__["CoreCoursesHelper"].loadCourseColorAndImage(this.course);
            if (!this.courseThumb) {
                return;
            }
            if (this.course.color) {
                this.courseThumb.nativeElement.style.setProperty('--course-color', this.course.color);
                const tint = _singletons_colors__WEBPACK_IMPORTED_MODULE_13__["CoreColors"].lighter(this.course.color, 50);
                this.courseThumb.nativeElement.style.setProperty('--course-color-tint', tint);
            }
            else if (this.course.colorNumber !== undefined) {
                this.courseThumb.nativeElement.classList.add('course-color-' + this.course.colorNumber);
            }
        });
    }
    /**
     * Open enrol action sheet.
     */
    enrolMe() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selfEnrolInstances.length == 1 && !this.otherEnrolments) {
                this.selfEnrolConfirm(this.selfEnrolInstances[0]);
                return;
            }
            if (this.selfEnrolInstances.length == 0 && this.otherEnrolments) {
                this.browserEnrol();
                return;
            }
            const buttons = this.selfEnrolInstances.map((enrolMethod) => ({
                text: enrolMethod.name,
                handler: () => {
                    this.selfEnrolConfirm(enrolMethod);
                },
            }));
            if (this.otherEnrolments) {
                buttons.push({
                    text: _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.courses.completeenrolmentbrowser'),
                    handler: () => {
                        this.browserEnrol();
                    },
                });
            }
            buttons.push({
                text: _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.cancel'),
                role: 'cancel',
            });
            this.actionSheet = yield _singletons__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"].create({
                header: _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.courses.enrolme'),
                buttons: buttons,
            });
            yield this.actionSheet.present();
        });
    }
    /**
     * Toggle list of contacts.
     */
    toggleContacts() {
        this.contactsExpanded = !this.contactsExpanded;
    }
    /**
     * Close the modal.
     */
    closeModal() {
        _singletons__WEBPACK_IMPORTED_MODULE_8__["ModalController"].dismiss();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        this.pageDestroyed = true;
        (_a = this.courseStatusObserver) === null || _a === void 0 ? void 0 : _a.off();
        this.appResumeSubscription.unsubscribe();
    }
};
CoreCourseSummaryPage.ctorParameters = () => [];
CoreCourseSummaryPage.propDecorators = {
    course: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    courseId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    courseThumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['courseThumb',] }]
};
CoreCourseSummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-course-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./course-summary.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/course-summary/course-summary.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./course-summary.scss */ "./src/core/features/course/pages/course-summary/course-summary.scss")).default]
    })
], CoreCourseSummaryPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-course-summary-course-summary-module~pages-index-index-module.js.map