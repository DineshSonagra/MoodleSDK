(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-storagemanager-storagemanager-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/course-storage/course-storage.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/course-storage/course-storage.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'addon.storagemanager.coursedownloads' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"downloadCourseEnabled\">\n            <ion-label>\n                <p>{{ 'addon.storagemanager.courseinfo' | translate }}</p>\n            </ion-label>\n        </ion-item>\n\n\n        <ion-card class=\"wholecourse\">\n            <ion-card-header>\n                <ion-card-title>{{ title }}</ion-card-title>\n                <ion-item class=\"size ion-text-wrap ion-no-padding\">\n                    <ion-label>\n                        <p class=\"item-heading ion-text-wrap\">{{ 'addon.storagemanager.totaldownloads' | translate }}</p>\n                    </ion-label>\n                    <ion-badge color=\"light\" slot=\"end\">\n                        <ng-container *ngIf=\"!calculatingSize\">{{ totalSize | coreBytesToSize }}</ng-container>\n                        <ng-container *ngIf=\"calculatingSize\">{{ 'core.calculating' | translate }}</ng-container>\n                    </ion-badge>\n                </ion-item>\n                <ion-button *ngIf=\"downloadCourseEnabled\" (click)=\"prefetchCourse()\" expand=\"block\" fill=\"outline\" class=\"ion-no-margin\"\n                    [disabled]=\"prefetchCourseData.loading\">\n                    <ion-icon *ngIf=\"!prefetchCourseData.loading\" [name]=\"prefetchCourseData.icon\" slot=\"start\"></ion-icon>\n                    <ion-spinner *ngIf=\"prefetchCourseData.loading\" slot=\"start\"></ion-spinner>\n                    {{ prefetchCourseData.statusTranslatable | translate }}\n                </ion-button>\n                <ion-button [disabled]=\"calculatingSize || totalSize <= 0\" (click)=\"deleteForCourse()\" expand=\"block\" color=\"danger\"\n                    class=\"ion-no-margin ion-margin-top\">\n                    <ion-icon name=\"fas-trash\" slot=\"start\" [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate:\n                        { name: title }\">\n                    </ion-icon>\n                    {{ 'addon.storagemanager.deleteall' | translate }}\n                </ion-button>\n            </ion-card-header>\n        </ion-card>\n        <ng-container *ngFor=\"let section of sections\">\n            <ion-card class=\"section\" *ngIf=\"section.modules.length > 0\">\n                <ion-card-header>\n                    <ion-item [lines]=\"section.expanded ? 'full' : 'none'\" button detail=\"false\" (click)=\"toggleExpand($event, section)\"\n                        [class.core-course-storage-section-expanded]=\"section.expanded\"\n                        [attr.aria-label]=\"(section.expanded ? 'core.collapse' : 'core.expand') | translate\"\n                        [attr.aria-expanded]=\"section.expanded\" [attr.aria-controls]=\"'core-course-storage-section-' + section.id\">\n                        <ion-icon name=\"fas-chevron-right\" flip-rtl slot=\"start\" class=\"expandable-status-icon\"\n                            [class.expandable-status-icon-expanded]=\"section.expanded\">\n                        </ion-icon>\n                        <ion-label>\n                            <p class=\"item-heading ion-text-wrap\">\n                                <core-format-text [text]=\"section.name\" contextLevel=\"course\" [contextInstanceId]=\"section.course\"\n                                    [adaptImg]=\"false\">\n                                </core-format-text>\n                            </p>\n                            <ion-badge [color]=\"section.downloadStatus == statusDownloaded ? 'success' : 'light'\"\n                                *ngIf=\"!section.calculatingSize && section.totalSize > 0\">\n                                <ion-icon name=\"fam-cloud-done\" *ngIf=\"section.downloadStatus == statusDownloaded\"\n                                    [attr.aria-label]=\"'core.downloaded' | translate\">\n                                </ion-icon>{{ section.totalSize | coreBytesToSize }}\n                            </ion-badge>\n                            <ion-badge color=\"light\" *ngIf=\"section.calculatingSize\">\n                                {{ 'core.calculating' | translate }}\n                            </ion-badge>\n                            <!-- Download progress. -->\n                            <p *ngIf=\"downloadEnabled && section.isDownloading\">\n                                <core-progress-bar [progress]=\"section.total == 0 ? -1 : section.count / section.total\">\n                                </core-progress-bar>\n                            </p>\n                        </ion-label>\n                        <div class=\"storage-buttons\" slot=\"end\"\n                            *ngIf=\"(!section.calculatingSize && section.totalSize > 0) || downloadEnabled\">\n                            <div *ngIf=\"downloadEnabled\" slot=\"end\" class=\"core-button-spinner\">\n                                <core-download-refresh *ngIf=\"!section.isDownloading && section.downloadStatus != statusDownloaded\"\n                                    [status]=\"section.downloadStatus\" [enabled]=\"true\" (action)=\"prefecthSection(section)\"\n                                    [loading]=\"section.isDownloading || section.isCalculating\" [canTrustDownload]=\"true\">\n                                </core-download-refresh>\n\n                                <ion-badge class=\"core-course-download-section-progress\"\n                                    *ngIf=\"section.isDownloading && section.count < section.total\" role=\"progressbar\"\n                                    [attr.aria-valuemax]=\"section.total\" [attr.aria-valuenow]=\"section.count\"\n                                    [attr.aria-valuetext]=\"'core.course.downloadsectionprogressdescription' | translate:section\">\n                                    {{section.count}} / {{section.total}}\n                                </ion-badge>\n                            </div>\n                            <ion-button (click)=\"deleteForSection(section)\" *ngIf=\"!section.calculatingSize && section.totalSize > 0\"\n                                color=\"danger\" fill=\"clear\">\n                                <ion-icon name=\"fas-trash\" slot=\"icon-only\"\n                                    [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate: { name: section.name }\">\n                                </ion-icon>\n                            </ion-button>\n                        </div>\n                    </ion-item>\n                </ion-card-header>\n                <ion-card-content id=\"core-course-storage-section-{{section.id}}\">\n                    <ng-container *ngIf=\"section.expanded\">\n                        <ng-container *ngFor=\"let module of section.modules\">\n                            <ion-item class=\"core-course-storage-activity\"\n                                *ngIf=\"downloadEnabled || (!module.calculatingSize && module.totalSize > 0)\">\n                                <core-mod-icon slot=\"start\" *ngIf=\"module.handlerData.icon\" [modicon]=\"module.handlerData.icon\"\n                                    [modname]=\"module.modname\" [componentId]=\"module.instance\">\n                                </core-mod-icon>\n                                <ion-label class=\"ion-text-wrap\">\n                                    <h3 class=\"{{module.handlerData!.class}} addon-storagemanager-module-size\">\n                                        <core-format-text [text]=\"module.handlerData.title\" [courseId]=\"module.course\" contextLevel=\"module\"\n                                            [contextInstanceId]=\"module.id\" [adaptImg]=\"false\">\n                                        </core-format-text>\n                                    </h3>\n                                    <ion-badge [color]=\"module.downloadStatus == statusDownloaded ? 'success' : 'light'\"\n                                        *ngIf=\"!module.calculatingSize && module.totalSize > 0\">\n                                        <ion-icon name=\"fam-cloud-done\" *ngIf=\"module.downloadStatus == statusDownloaded\"\n                                            [attr.aria-label]=\"'core.downloaded' | translate\">\n                                        </ion-icon>{{ module.totalSize | coreBytesToSize }}\n                                    </ion-badge>\n                                    <ion-badge color=\"light\" *ngIf=\"module.calculatingSize\">\n                                        {{ 'core.calculating' | translate }}\n                                    </ion-badge>\n                                </ion-label>\n\n                                <div class=\"storage-buttons\" slot=\"end\">\n                                    <core-download-refresh *ngIf=\"downloadEnabled && module.handlerData?.showDownloadButton &&\n                                        module.downloadStatus != statusDownloaded\" [status]=\"module.downloadStatus\" [enabled]=\"true\"\n                                        [canTrustDownload]=\"true\" [loading]=\"module.spinner || module.handlerData.spinner\"\n                                        (action)=\"prefetchModule(module, section)\">\n                                    </core-download-refresh>\n                                    <ion-button fill=\"clear\" (click)=\"deleteForModule(module, section)\"\n                                        *ngIf=\"!module.calculatingSize && module.totalSize > 0\" color=\"danger\">\n                                        <ion-icon name=\"fas-trash\" slot=\"icon-only\"\n                                            [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate: { name: module.name }\">\n                                        </ion-icon>\n                                    </ion-button>\n                                </div>\n                            </ion-item>\n                        </ng-container>\n                    </ng-container>\n                </ion-card-content>\n            </ion-card>\n        </ng-container>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/courses-storage/courses-storage.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/courses-storage/courses-storage.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'addon.storagemanager.managedownloads' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <core-loading [hideUntil]=\"loaded\">\n        <div class=\"ion-padding-horizontal ion-text-wrap\" *ngIf=\"spaceUsage\">\n            <h2>{{ 'addon.storagemanager.alldata' | translate }}</h2>\n        </div>\n        <ion-card *ngIf=\"spaceUsage\">\n            <ion-item class=\"ion-text-wrap total\">\n                <ion-label>\n                    <p class=\"item-heading ion-text-wrap\">{{ 'addon.storagemanager.totalspaceusage' | translate }}</p>\n                    <ion-badge color=\"light\" *ngIf=\"spaceUsage.spaceUsage\">{{ spaceUsage.spaceUsage | coreBytesToSize }}</ion-badge>\n                </ion-label>\n                <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteSiteStorage($event)\"\n                    [hidden]=\"spaceUsage.spaceUsage! + spaceUsage.cacheEntries! <= 0\"\n                    [attr.aria-label]=\"'addon.storagemanager.deleteallsitedata' | translate\">\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ion-card>\n\n        <div class=\"ion-padding-horizontal ion-text-wrap\">\n            <h2>{{ 'addon.storagemanager.downloadedcourses' | translate }}</h2>\n        </div>\n        <ion-card>\n            <ion-item class=\"size courses ion-text-wrap\" lines=\"full\">\n                <ion-label>\n                    <p class=\"item-heading\">{{ 'addon.storagemanager.totalspaceusage' | translate }}</p>\n                    <ion-badge color=\"light\">{{ totalSize | coreBytesToSize }}</ion-badge>\n                </ion-label>\n                <ion-button slot=\"end\" (click)=\"deleteCompletelyDownloadedCourses($event)\"\n                    [disabled]=\"completelyDownloadedCourses.length === 0\" color=\"danger\" fill=\"clear\">\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" ariaLabel=\"{{ 'addon.storagemanager.deletecourses' | translate }}\">\n                    </ion-icon>\n                </ion-button>\n            </ion-item>\n            <ion-item *ngFor=\"let course of downloadedCourses\" class=\"course\" (click)=\"openCourse(course.id, course.title)\" button>\n                <ion-label class=\"ion-text-wrap\">\n                    <p class=\"item-heading\">{{ course.title }}</p>\n                    <p class=\"item-heading item-heading-secondary\" *ngIf=\"course.isDownloading\">\n                        {{ 'core.downloading' | translate }}\n                    </p>\n                    <ion-badge color=\"light\">\n                        {{ course.totalSize | coreBytesToSize }}\n                    </ion-badge>\n                </ion-label>\n                <ion-button slot=\"end\" (click)=\"deleteCourse($event, course)\" [disabled]=\"course.isDownloading\" color=\"danger\" fill=\"clear\">\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate:\n                            { name: course.title }\">\n                    </ion-icon>\n                </ion-button>\n            </ion-item>\n        </ion-card>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/storagemanager/pages/course-storage/course-storage.scss":
/*!****************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/course-storage/course-storage.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host {\n  --course-storage-max-activity-height: 120px;\n}\n:host ion-card ion-item.size {\n  --inner-padding-end: 0px;\n}\n:host ion-card.section ion-card-header {\n  padding: 0;\n}\n:host ion-card.section ion-card-content {\n  padding: 0;\n}\n:host ion-card.section ion-card-content .core-course-storage-activity ion-label h3 {\n  position: relative;\n  max-height: var(--course-storage-max-activity-height);\n  overflow: hidden;\n}\n:host ion-card.section ion-card-content .core-course-storage-activity ion-label h3 ::ng-deep * {\n  pointer-events: none !important;\n}\n:host ion-card.section ion-card-content .core-course-storage-activity ion-label h3:before {\n  content: \"\";\n  height: var(--course-storage-max-activity-height);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: linear-gradient(to bottom, rgba(var(--background-gradient-rgb), 0) calc(100% - 30px), rgba(var(--background-gradient-rgb), 1) calc(100% - 20px));\n  z-index: 6;\n  pointer-events: none;\n}\n:host ion-card.section .item-heading {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\nion-badge {\n  margin-top: 8px;\n}\nion-badge ion-icon {\n  margin-right: 8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-badge ion-icon {\n    margin-right: unset;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\nion-item core-mod-icon {\n  --size: 18px;\n  padding: 9px;\n  --margin-vertical: 8px;\n  --margin-end: 8px;\n}\n.storage-buttons {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL3N0b3JhZ2VtYW5hZ2VyL3BhZ2VzL2NvdXJzZS1zdG9yYWdlL2NvdXJzZS1zdG9yYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQ0VBOzs7O0VBQUE7QUFrR0E7O0VBQUE7QUNwR0E7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUErREE7Ozs7RUFBQTtBQzdEQTtFQUNJLDJDQUFBO0FBb0RKO0FBbERJO0VBQ0ksd0JBQUE7QUFvRFI7QUFoRFE7RUFDSSxVQUFBO0FBa0RaO0FBaERRO0VBQ0ksVUFBQTtBQWtEWjtBQS9DZ0I7RUFDSSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7QUFpRHBCO0FBaERvQjtFQUNJLCtCQUFBO0FBa0R4QjtBQS9Db0I7RUFDSSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFTCtTbEIsT0s5U2dEO0VMK1NoRCxRSy9TdUM7RUx3VTNDLE1LeFV3QztFQUNsQiw0SkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQW1EeEI7QUE5Q1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBZ0RaO0FBM0NBO0VBQ0ksZUFBQTtBQThDSjtBQTdDSTtFTDhNQSxpQks3TXFDO0FBK0N6QztBTGlLTTtFQUNFO0lBS0ksbUJBQUE7SUFLRix1QkszTitCO0lMNE4vQixzQks1TitCO0VBcUR2QztBQUNGO0FBbERBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBcURKO0FBbERBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBcURKIiwiZmlsZSI6InNyYy9hZGRvbnMvc3RvcmFnZW1hbmFnZXIvcGFnZXMvY291cnNlLXN0b3JhZ2UvY291cnNlLXN0b3JhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XG5cbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xuICovXG5cblxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xuXG4gIEBpZiAkaW5kZXgge1xuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcbiAgfVxuXG4gIEByZXR1cm4gJHN0cmluZztcbn1cblxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbkBmdW5jdGlvbiBzdHItc3BsaXQoJHN0cmluZywgJHNlcGFyYXRvcikge1xuICAvLyBlbXB0eSBhcnJheS9saXN0XG4gICRzcGxpdC1hcnI6ICgpO1xuICAvLyBmaXJzdCBpbmRleCBvZiBzZXBhcmF0b3IgaW4gc3RyaW5nXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXG4gIEB3aGlsZSAkaW5kZXggIT0gbnVsbCB7XG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xuICAgIC8vIHB1c2ggaXRlbSB0byBhcnJheVxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xuICAgICRzdHJpbmc6IHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyAxKTtcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcbiAgfVxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xuXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcbn1cblxuXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xuICAkc3RhcnQtaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc3RhcnQpO1xuXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xuICAgICRwb3N0OiBzdHItc2xpY2UoJHN0cmluZywgJHN0YXJ0LWluZGV4ICsgc3RyLWxlbmd0aCgkc3RhcnQpKTtcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xuXG4gICAgQGlmICRlbmQtaW5kZXgge1xuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIG51bGw7XG59XG5cblxuLy8gU3RyaW5nIENvbnRhaW5zIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWNvbnRhaW5zKCRzdHJpbmcsICRuZWVkbGUpIHtcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XG4gIH1cblxuICBAcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vIFVSTCBFbmNvZGUgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiB1cmwtZW5jb2RlKCR2YWwpIHtcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xuICBAcmV0dXJuICRlbmNvZGVkO1xufVxuXG5cbi8vIEFkZCBSb290IFNlbGVjdG9yXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRkcyBhIHJvb3Qgc2VsZWN0b3IgdXNpbmcgaG9zdC1jb250ZXh0IGJhc2VkIG9uIHRoZSBzZWxlY3RvciBwYXNzZWRcbi8vXG4vLyBFeGFtcGxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLmZpeGVkXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1oaWRlIDo6c2xvdHRlZChpb24tYmFkZ2UpXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXG4vLyAtLT4gW2Rpcj1ydGxdIC5zaGFkb3dcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xuXG4gICRsaXN0OiAoKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxuICAgIEBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0KFwiKSB7XG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XG5cbiAgICAgICRuZXctZWxlbWVudDogKCk7XG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcblxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogJGVsZW1lbnQ7XG5cbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIikpXCIsIFwiKVwiKTtcbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XG5cbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRzY29wZWQtZWxlbWVudCwgc3BhY2UpO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJG5ldy1lbGVtZW50LCBjb21tYSk7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxuICAgIH0gQGVsc2UgaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdFwiKSB7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIiwgY29tbWEpO1xuICAgIC8vIElmIHRoZSBzZWxlY3RvciBkb2VzIG5vdCBjb250YWluIGhvc3QgYXQgYWxsIGl0IGlzIGVpdGhlciBhIHNoYWRvd1xuICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxuICAgIH0gQGVsc2Uge1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCIjeyRhZGRIb3N0U2VsZWN0b3J9ICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuICRsaXN0O1xufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXG4gKi9cblxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xuICB9XG59XG5cbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxuLy8gaW9uLWNvbG9yKHNlY29uZGFyeSwgY29udHJhc3QpID0+IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSwgMC41KSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSwgMC41KVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBpb24tY29sb3IoJG5hbWUsICR2YXJpYXRpb24sICRhbHBoYTogbnVsbCwgJHJnYjogbnVsbCkge1xuICAkdmFsdWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRuYW1lKTtcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xuICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9LSN7JHZhcmlhdGlvbn07XG5cbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcbiAgICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9O1xuICB9XG5cbiAgQGlmICgkYWxwaGEpIHtcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xuICB9XG4gIEBpZiAoJHJnYikge1xuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcbiAgICAkdmFyaWFibGU6ICN7JHZhcmlhYmxlfS1yZ2I7XG4gIH1cblxuICBAcmV0dXJuIHZhcigjeyR2YXJpYWJsZX0sICR2YWx1ZSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcbn1cblxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcbiAqL1xuXG4vLyBSZXNwb25zaXZlIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICB3aWR0aDogJHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xuXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBJdGVtIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XG4gICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xuXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XG59XG4iLCJAdXNlIFwic2FzczptYXRoXCIgYXMgbWF0aDtcblxuLyoqXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIDYuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDQ4JSkge1xuICAgIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgJHBlcmNlbnQpO1xuICB9XG5cbiAgLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbiAgLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBAZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA4MCUpIHtcbiAgICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsICRwZXJjZW50KTtcbiAgfVxuXG4gIC8vIElvbmljIENvbG9yc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbiAgLy8gY29sb3JzIG1hcFxuXG4gIEBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycykge1xuICAgICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuICAgICAgJGxpZ2h0OiBtYXAtZ2V0KCRiYXNlLCAnbGlnaHQnKTtcblxuICAgICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRsaWdodCk7XG5cbiAgICAgIGJvZHkuZGFyayB7XG4gICAgICAgICAgJGRhcms6IG1hcC1nZXQoJGJhc2UsICdkYXJrJyk7XG4gICAgICAgICAgJGRhcms6IG1peCgkbGlnaHQsIHdoaXRlLCA4MCUpICFkZWZhdWx0O1xuICAgICAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkZGFyayk7XG4gICAgICB9XG4gIH1cblxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKSB7XG4gICAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XG4gICAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRiYXNlKTtcbiAgICAgICR0aW50OiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRiYXNlKTtcblxuICAgICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuXG4gICAgICAvLyBJbnRlcm5hbCBpb25pYyB1c2Ugb25seS5cbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9OiB2YXIoLS0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xuXG4gICAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcbiAgICAgIH1cbiAgfVxuXG5cbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcbiAgICB9XG4gfVxuXG4gQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xufVxuXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCRwcm9wZXJ0aWVzOiBhbGwsICRkdXJhdGlvbjogNTAwbXMsICR0aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0KSB7XG4gICAgJHRyYW5zaXRpb25zOiAoKTtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgJHRyYW5zaXRpb25zOiBhcHBlbmQoJHRyYW5zaXRpb25zLCAkcHJvcGVydHkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24sIGNvbW1hKTtcbiAgICB9XG5cbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG59XG5cbi8qKlxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXG4gKi9cbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRmaWxsOiA2MjYyNjIsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcblxuICAgIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgJGZsaXAtcnRsKTtcbn1cblxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XG59XG5cbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG5cbiAgICBAaWYgKCRlbmQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICB9XG4gICAgQGlmICgkc3RhcnQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1lbmQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XG59XG5cbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWl4aW4gZGFya21vZGUoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImJvZHkuZGFya1wiKX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBob3Jpem9udGFsX3Njcm9sbF9pdGVtKCR3aWR0aCwgJG1pbi13aWR0aCwgJG1heC13aWR0aCkge1xuICAgIGZsZXg6IDAgMCAkd2lkdGg7XG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcbiAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogMTBweDtcblxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENvbG9yIG1peGlucy5cbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcbn1cblxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XG5cbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAxLlxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXG4gICAgJGJsYWNrQ29udHJhc3Q6ICgwLjA1KSAvICgkbHVtaWFuY2UgKyAwLjA1KTtcblxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcbn1cblxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yX3lpcSgkY29sb3IsICRkYXJrOiBibGFjaywgJGxpZ2h0OiB3aGl0ZSkge1xuICAgICRyOiByZWQoJGNvbG9yKTtcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xuXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xuXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XG59XG5cbi8vIFdDQUcgY29udHJhc3QgYWxnb3J5dGhtXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gICAgJGZvcmVncm91bmRMdW1pYW5jZTogbHVtaW5hbmNlKCRmb3JlZ3JvdW5kKTtcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcblxuICAgIEBpZiAoJGJhY2tncm91bmRMdW1pbmFuY2UgPCAkZm9yZWdyb3VuZEx1bWlhbmNlKSB7XG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICBAcmV0dXJuICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSkgLyAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KTtcbiAgICB9XG59XG5cbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XG4gICAgJHI6IHJlZCgkY29sb3IpO1xuICAgICRnOiBncmVlbigkY29sb3IpO1xuICAgICRiOiBibHVlKCRjb2xvcik7XG5cbiAgICAkcjogY29tcG9uZW50LWx1bWluYW5jZSgkcik7XG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcblxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xufVxuXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcblxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfVxufVxuIiwiLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJHdoaXRlOiAgICAgICAjZmZmZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAgICAjZGVlMmU2ICFkZWZhdWx0OyAvLyBTdHJva2VcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xuJGdyYXktNjAwOiAgICAjNmE3MzdiICFkZWZhdWx0O1xuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAgICAjMWQyMTI1ICFkZWZhdWx0OyAvLyBDb3B5IHRleHRcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcblxuJGJsdWU6ICAgICAgICAjMGY2Y2JmICFkZWZhdWx0O1xuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcbiRyZWQ6ICAgICAgICAgI2NhMzEyMCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcblxuJGJyYW5kLWNvbG9yOiAjZmY3NTE4ICFkZWZhdWx0O1xuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAgICAgJGdyYXktOTAwICFkZWZhdWx0OyAvLyAjMWExYTFhXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrKSAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbWVkaXVtOiAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJGNvbG9yczogIChcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXG4gICAgc3VjY2VzczogKGxpZ2h0OiAkc3VjY2VzcyksXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcbiAgICBpbmZvOiAobGlnaHQ6ICRpbmZvKSxcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcbiAgICBkYXJrOiAobGlnaHQ6ICRkYXJrLCBkYXJrOiAkbGlnaHQpLFxuKSAhZGVmYXVsdDtcblxuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXG4gICAgeHM6IDAsXG4gICAgc206IDU3NnB4LFxuICAgIG1kOiA3NjhweCxcbiAgICBsZzogOTkycHgsXG4gICAgdGFibGV0OiA5OTJweCxcbiAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZDogIzgxZWNlYywgIzc0YjlmZiwgI2EyOWJmZSwgI2RmZTZlOSwgIzAwYjg5NCwgIzA5ODRlMywgI2IyYmVjMywgI2ZkY2I2ZSwgI2ZkNzlhOCwgIzZjNWNlNyAhZGVmYXVsdDtcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xuXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtYWx3YXlzLXNob3ctbWFpbi1tZW51OiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1oaWRlLWNvdXJzZWltYWdlLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS1oaWRlLXByb2dyZXNzLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3ItZGFyazogJHRleHQtY29sb3ItZGFyayAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHVzZXIgcGFnZS5cbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xuJGNvcmUtdXNlci1oaWRlLXNpdGVuYW1lOiAkY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWUgIWRlZmF1bHQ7XG4kY29yZS11c2VyLWhpZGUtc2l0ZXVybDogJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmwgIWRlZmF1bHQ7XG5cbi8vIEFjdGl2aXR5IGljb24gYmFja2dyb3VuZCBjb2xvcnMuXG4kYWN0aXZpdHktaWNvbi1jb2xvcnM6IChcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcbiAgICBhc3Nlc3NtZW50OiAjZWI2NmEyLFxuICAgIGNvbGxhYm9yYXRpb246ICNmNzYzNGQsXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcbiAgICBjb250ZW50OiAjMzk5YmUyLFxuICAgIGludGVyZmFjZTogI2EzNzhmZlxuKSAhZGVmYXVsdDtcblxuLy8gQ2FsZW5kYXIgZXZlbnQgY2F0ZWdvcnkgYmFja2dyb3VuZCBjb2xvcnMuXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXG4gICAgY2F0ZWdvcnk6ICM4ZTI0YWEsXG4gICAgY291cnNlOiAkcmVkLFxuICAgIGdyb3VwOiAkeWVsbG93LFxuICAgIHVzZXI6ICRibHVlLFxuICAgIHNpdGU6ICRncmVlblxuKSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xuXG46aG9zdCB7XG4gICAgLS1jb3Vyc2Utc3RvcmFnZS1tYXgtYWN0aXZpdHktaGVpZ2h0OiAxMjBweDtcblxuICAgIGlvbi1jYXJkIGlvbi1pdGVtLnNpemUge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQuc2VjdGlvbiB7XG4gICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgLmNvcmUtY291cnNlLXN0b3JhZ2UtYWN0aXZpdHkgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tY291cnNlLXN0b3JhZ2UtbWF4LWFjdGl2aXR5LWhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tY291cnNlLXN0b3JhZ2UtbWF4LWFjdGl2aXR5LWhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCBudWxsLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEodmFyKC0tYmFja2dyb3VuZC1ncmFkaWVudC1yZ2IpLCAwKSBjYWxjKDEwMCUgLSAzMHB4KSwgcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWdyYWRpZW50LXJnYiksIDEpIGNhbGMoMTAwJSAtIDIwcHgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1iYWRnZSB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwobnVsbCwgOHB4KTtcbiAgICB9XG59XG5cbmlvbi1pdGVtIGNvcmUtbW9kLWljb24ge1xuICAgIC0tc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgLS1tYXJnaW4tdmVydGljYWw6IDhweDtcbiAgICAtLW1hcmdpbi1lbmQ6IDhweDtcbn1cblxuLnN0b3JhZ2UtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/addons/storagemanager/pages/course-storage/course-storage.ts":
/*!**************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/course-storage/course-storage.ts ***!
  \**************************************************************************/
/*! exports provided: AddonStorageManagerCourseStoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerCourseStoragePage", function() { return AddonStorageManagerCourseStoragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
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














/**
 * Page that displays the amount of file storage used by each activity on the course, and allows
 * the user to prefecth and delete this data.
 */
let AddonStorageManagerCourseStoragePage = class AddonStorageManagerCourseStoragePage {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.title = '';
        this.loaded = false;
        this.sections = [];
        this.totalSize = 0;
        this.calculatingSize = true;
        this.downloadEnabled = false;
        this.downloadCourseEnabled = false;
        this.prefetchCourseData = {
            icon: _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING,
            statusTranslatable: 'core.course.downloadcourse',
            status: '',
            loading: true,
        };
        this.statusDownloaded = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADED;
        this.isDestroyed = false;
        this.isGuest = false;
        // Refresh the enabled flags if site is updated.
        this.siteUpdatedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].SITE_UPDATED, () => {
            this.downloadCourseEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadEnabled = !_services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getRequiredCurrentSite().isOfflineDisabled();
            this.initCoursePrefetch();
            this.initModulePrefetch();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteParam('courseId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
                return;
            }
            this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('title') || '';
            if (!this.title && this.courseId == _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteHomeId()) {
                this.title = _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.sitehome.sitehome');
            }
            this.isGuest = !!_services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteBooleanParam('isGuest');
            this.initialSectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('sectionId');
            this.downloadCourseEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadEnabled = !_services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getRequiredCurrentSite().isOfflineDisabled();
            const sections = (yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getSections(this.courseId, false, true))
                .filter((section) => !_features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].isSectionStealth(section));
            this.sections = (yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].addHandlerDataForModules(sections, this.courseId)).sections
                .map(section => (Object.assign(Object.assign({}, section), { totalSize: 0, calculatingSize: true, expanded: section.id === this.initialSectionId, modules: section.modules.map(module => (Object.assign(Object.assign({}, module), { calculatingSize: true }))) })));
            this.loaded = true;
            _singletons_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDom"].scrollToElement(this.elementRef.nativeElement, '.core-course-storage-section-expanded', { addYAxis: -10 });
            yield Promise.all([
                this.initSizes(),
                this.initCoursePrefetch(),
                this.initModulePrefetch(),
            ]);
        });
    }
    /**
     * Init course prefetch information.
     *
     * @return Promise resolved when done.
     */
    initCoursePrefetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.downloadCourseEnabled || this.courseStatusObserver) {
                return;
            }
            // Listen for changes in course status.
            this.courseStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].COURSE_STATUS_CHANGED, (data) => {
                if (data.courseId == this.courseId || data.courseId == _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourseProvider"].ALL_COURSES_CLEARED) {
                    this.updateCourseStatus(data.status);
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
            // Determine the course prefetch status.
            yield this.determineCoursePrefetchIcon();
            if (this.prefetchCourseData.icon != _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING) {
                return;
            }
            // Course is being downloaded. Get the download promise.
            const promise = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getCourseDownloadPromise(this.courseId);
            if (promise) {
                // There is a download promise. Show an error if it fails.
                promise.catch((error) => {
                    if (!this.isDestroyed) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                    }
                });
            }
            else {
                // No download, this probably means that the app was closed while downloading. Set previous status.
                const status = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].setCoursePreviousStatus(this.courseId);
                this.updateCourseStatus(status);
            }
        });
    }
    /**
     * Init module prefetch information.
     *
     * @return Promise resolved when done.
     */
    initModulePrefetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.downloadEnabled || this.sectionStatusObserver) {
                return;
            }
            // Listen for section status changes.
            this.sectionStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].SECTION_STATUS_CHANGED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.downloadEnabled || !this.sections.length || !data.sectionId || data.courseId != this.courseId) {
                    return;
                }
                // Check if the affected section is being downloaded.
                // If so, we don't update section status because it'll already be updated when the download finishes.
                const downloadId = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getSectionDownloadId({ id: data.sectionId });
                if (_features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].isBeingDownloaded(downloadId)) {
                    return;
                }
                // Get the affected section.
                const section = this.sections.find(section => section.id == data.sectionId);
                if (!section) {
                    return;
                }
                // Recalculate the status.
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionStatus(section, this.courseId, false);
                if (section.isDownloading && !_features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].isBeingDownloaded(downloadId)) {
                    // All the modules are now downloading, set a download all promise.
                    this.prefecthSection(section);
                }
            }), _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
            // The download status of a section might have been changed from within a module page.
            _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, false, false);
            this.sections.forEach((section) => {
                section.modules.forEach((module) => {
                    var _a;
                    if ((_a = module.handlerData) === null || _a === void 0 ? void 0 : _a.showDownloadButton) {
                        module.spinner = true;
                        // Listen for changes on this module status, even if download isn't enabled.
                        module.prefetchHandler = _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getPrefetchHandlerFor(module.modname);
                        this.calculateModuleStatus(module);
                    }
                });
            });
            this.moduleStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].PACKAGE_STATUS_CHANGED, (data) => {
                let module;
                this.sections.some((section) => {
                    module = section.modules.find((module) => { var _a; return module.id == data.componentId && module.prefetchHandler && data.component == ((_a = module.prefetchHandler) === null || _a === void 0 ? void 0 : _a.component); });
                    return !!module;
                });
                if (!module) {
                    return;
                }
                // Call determineModuleStatus to get the right status to display.
                const status = _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].determineModuleStatus(module, data.status);
                // Update the status.
                this.updateModuleStatus(module, status);
            }, _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId());
        });
    }
    /**
     * Init section, course and modules sizes.
     */
    initSizes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all(this.sections.map((section) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield Promise.all(section.modules.map((module) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // Note: This function only gets the size for modules which are downloadable.
                    // For other modules it always returns 0, even if they have downloaded some files.
                    // However there is no 100% reliable way to actually track the files in this case.
                    // You can maybe guess it based on the component and componentid.
                    // But these aren't necessarily consistent, for example mod_frog vs mmaModFrog.
                    // There is nothing enforcing correct values.
                    // Most modules which have large files are downloadable, so I think this is sufficient.
                    const size = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStoredSize(module, this.courseId);
                    // There are some cases where the return from this is not a valid number.
                    if (!isNaN(size)) {
                        module.totalSize = Number(size);
                        section.totalSize += size;
                        this.totalSize += size;
                    }
                    module.calculatingSize = false;
                })));
                section.calculatingSize = false;
            })));
            this.calculatingSize = false;
            // Mark course as not downloaded if course size is 0.
            if (this.totalSize == 0) {
                this.markCourseAsNotDownloaded();
            }
        });
    }
    /**
     * Update the sizes of some modules.
     *
     * @param modules Modules.
     * @param section Section the modules belong to.
     * @return Promise resolved when done.
     */
    updateModulesSizes(modules, section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.calculatingSize = true;
            yield Promise.all(modules.map((module) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                if (module.calculatingSize) {
                    return;
                }
                module.calculatingSize = true;
                if (!section) {
                    section = this.sections.find((section) => section.modules.some((mod) => mod.id === module.id));
                    if (section) {
                        section.calculatingSize = true;
                    }
                }
                try {
                    const size = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStoredSize(module, this.courseId);
                    const diff = (isNaN(size) ? 0 : size) - ((_a = module.totalSize) !== null && _a !== void 0 ? _a : 0);
                    module.totalSize = Number(size);
                    this.totalSize += diff;
                    if (section) {
                        section.totalSize += diff;
                    }
                }
                catch (_b) {
                    // Ignore errors, it shouldn't happen.
                }
                finally {
                    module.calculatingSize = false;
                }
            })));
            this.calculatingSize = false;
            if (section) {
                section.calculatingSize = false;
            }
        });
    }
    /**
     * The user has requested a delete for the whole course data.
     *
     * (This works by deleting data for each module on the course that has data.)
     */
    deleteForCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: this.title });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modules = [];
            this.sections.forEach((section) => {
                section.modules.forEach((module) => {
                    if (module.totalSize && module.totalSize > 0) {
                        modules.push(module);
                    }
                });
            });
            this.deleteModules(modules);
        });
    }
    /**
     * The user has requested a delete for a section's data.
     *
     * (This works by deleting data for each module in the section that has data.)
     *
     * @param section Section object with information about section and modules
     */
    deleteForSection(section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: section.name });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modules = [];
            section.modules.forEach((module) => {
                if (module.totalSize && module.totalSize > 0) {
                    modules.push(module);
                }
            });
            this.deleteModules(modules, section);
        });
    }
    /**
     * The user has requested a delete for a module's data
     *
     * @param module Module details
     * @param section Section the module belongs to.
     */
    deleteForModule(module, section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (module.totalSize === 0) {
                return;
            }
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: module.name });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            this.deleteModules([module], section);
        });
    }
    /**
     * Deletes the specified modules, showing the loading overlay while it happens.
     *
     * @param modules Modules to delete
     * @param section Section the modules belong to.
     * @return Promise<void> Once deleting has finished
     */
    deleteModules(modules, section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
            const promises = [];
            modules.forEach((module) => {
                // Remove the files.
                const promise = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].removeModuleStoredData(module, this.courseId).then(() => {
                    const moduleSize = module.totalSize || 0;
                    // When the files and cache are removed, update the size.
                    if (section) {
                        section.totalSize -= moduleSize;
                    }
                    this.totalSize -= moduleSize;
                    module.totalSize = 0;
                    return;
                });
                promises.push(promise);
            });
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.errordeletefile'));
            }
            finally {
                modal.dismiss();
                yield this.updateModulesSizes(modules, section);
                _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, false, false);
            }
        });
    }
    /**
     * Mark course as not downloaded.
     */
    markCourseAsNotDownloaded() {
        // @TODO This is a workaround that should be more specific solving MOBILE-3305.
        // Also should take into account all modules are not downloaded.
        // Check after MOBILE-3188 is integrated.
        _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].setCourseStatus(this.courseId, _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].NOT_DOWNLOADED);
    }
    /**
     * Calculate the status of sections.
     *
     * @param refresh If refresh or not.
     */
    calculateSectionsStatus(refresh) {
        if (!this.sections) {
            return;
        }
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, refresh));
    }
    /**
     * Confirm and prefetch a section. If the section is "all sections", prefetch all the sections.
     *
     * @param section Section to download.
     * @param refresh Refresh clicked (not used).
     */
    prefecthSection(section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            section.isCalculating = true;
            try {
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].confirmDownloadSizeSection(this.courseId, section, this.sections);
                try {
                    yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].prefetchSection(section, this.courseId, this.sections);
                }
                catch (error) {
                    if (!this.isDestroyed) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingsection', true);
                    }
                }
                finally {
                    yield this.updateModulesSizes(section.modules, section);
                }
            }
            catch (error) {
                // User cancelled or there was an error calculating the size.
                if (!this.isDestroyed && error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
                    return;
                }
            }
            finally {
                section.isCalculating = false;
            }
        });
    }
    /**
     * Download the module.
     *
     * @param module Module to prefetch.
     * @param refresh Whether it's refreshing.
     * @return Promise resolved when done.
     */
    prefetchModule(module, refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!module.prefetchHandler) {
                return;
            }
            // Show spinner since this operation might take a while.
            module.spinner = true;
            try {
                // Get download size to ask for confirm if it's high.
                const size = yield module.prefetchHandler.getDownloadSize(module, module.course, true);
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].prefetchModule(module.prefetchHandler, module, size, module.course, refresh);
                _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].calculateSectionsStatus(this.sections, this.courseId, false, false);
            }
            catch (error) {
                if (!this.isDestroyed) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.errordownloading', true);
                }
            }
            finally {
                module.spinner = false;
                yield this.updateModulesSizes([module]);
            }
        });
    }
    /**
     * Show download buttons according to module status.
     *
     * @param module Module to update.
     * @param status Module status.
     */
    updateModuleStatus(module, status) {
        var _a, _b;
        if (!status) {
            return;
        }
        module.spinner = false;
        module.downloadStatus = status;
        (_b = (_a = module.handlerData) === null || _a === void 0 ? void 0 : _a.updateStatus) === null || _b === void 0 ? void 0 : _b.call(_a, status);
    }
    /**
     * Calculate and show module status.
     *
     * @param module Module to update.
     * @return Promise resolved when done.
     */
    calculateModuleStatus(module) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!module) {
                return;
            }
            const status = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStatus(module, this.courseId);
            this.updateModuleStatus(module, status);
        });
    }
    /**
     * Determines the prefetch icon of the course.
     *
     * @return Promise resolved when done.
     */
    determineCoursePrefetchIcon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.prefetchCourseData = yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getCourseStatusIconAndTitle(this.courseId);
        });
    }
    /**
     * Update the course status icon and title.
     *
     * @param status Status to show.
     */
    updateCourseStatus(status) {
        const statusData = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].getCoursePrefetchStatusInfo(status);
        this.prefetchCourseData.status = statusData.status;
        this.prefetchCourseData.icon = statusData.icon;
        this.prefetchCourseData.statusTranslatable = statusData.statusTranslatable;
        this.prefetchCourseData.loading = statusData.loading;
    }
    /**
     * Prefetch the whole course.
     */
    prefetchCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const courses = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getUserCourses(true);
            let course = courses.find((course) => course.id == this.courseId);
            if (!course) {
                course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getCourse(this.courseId);
            }
            if (!course) {
                return;
            }
            try {
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].confirmAndPrefetchCourse(this.prefetchCourseData, course, {
                    sections: this.sections,
                    isGuest: this.isGuest,
                });
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
            }
        });
    }
    /**
     * Toggle expand status.
     *
     * @param event Event object.
     * @param section Section to expand / collapse.
     */
    toggleExpand(event, section) {
        section.expanded = !section.expanded;
        event.stopPropagation();
        event.preventDefault();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.courseStatusObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.sectionStatusObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.moduleStatusObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.siteUpdatedObserver) === null || _d === void 0 ? void 0 : _d.off();
        this.sections.forEach((section) => {
            section.modules.forEach((module) => {
                var _a, _b;
                (_b = (_a = module.handlerData) === null || _a === void 0 ? void 0 : _a.onDestroy) === null || _b === void 0 ? void 0 : _b.call(_a);
            });
        });
        this.isDestroyed = true;
    }
};
AddonStorageManagerCourseStoragePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
AddonStorageManagerCourseStoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-storagemanager-course-storage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./course-storage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/course-storage/course-storage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./course-storage.scss */ "./src/addons/storagemanager/pages/course-storage/course-storage.scss")).default]
    })
], AddonStorageManagerCourseStoragePage);



/***/ }),

/***/ "./src/addons/storagemanager/pages/courses-storage/courses-storage.scss":
/*!******************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/courses-storage/courses-storage.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item.courses .item-heading,\nion-item.total .item-heading {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvc3RvcmFnZW1hbmFnZXIvcGFnZXMvY291cnNlcy1zdG9yYWdlL2NvdXJzZXMtc3RvcmFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztFQUNJLGlCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9zdG9yYWdlbWFuYWdlci9wYWdlcy9jb3Vyc2VzLXN0b3JhZ2UvY291cnNlcy1zdG9yYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS5jb3Vyc2VzLFxuaW9uLWl0ZW0udG90YWwge1xuICAgIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/addons/storagemanager/pages/courses-storage/courses-storage.ts":
/*!****************************************************************************!*\
  !*** ./src/addons/storagemanager/pages/courses-storage/courses-storage.ts ***!
  \****************************************************************************/
/*! exports provided: AddonStorageManagerCoursesStoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerCoursesStoragePage", function() { return AddonStorageManagerCoursesStoragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/sitehome/services/sitehome */ "./src/core/features/sitehome/services/sitehome.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_array__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/array */ "./src/core/singletons/array.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
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















/**
 * Page that displays downloaded courses and allows the user to delete them.
 */
let AddonStorageManagerCoursesStoragePage = class AddonStorageManagerCoursesStoragePage {
    constructor() {
        this.userCourses = [];
        this.downloadedCourses = [];
        this.completelyDownloadedCourses = [];
        this.totalSize = 0;
        this.loaded = false;
        this.spaceUsage = {
            cacheEntries: 0,
            spaceUsage: 0,
        };
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId();
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userCourses = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].getUserCourses();
            this.courseStatusObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].COURSE_STATUS_CHANGED, ({ courseId, status }) => this.onCourseUpdated(courseId, status));
            const downloadedCourseIds = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getDownloadedCourseIds();
            const downloadedCourses = yield Promise.all(this.userCourses
                .filter((course) => downloadedCourseIds.indexOf(course.id) !== -1)
                .map((course) => this.getDownloadedCourse(course)));
            const siteHomeEnabled = yield _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_8__["CoreSiteHome"].isAvailable(this.siteId);
            if (siteHomeEnabled) {
                const siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteHomeId();
                const size = yield this.calculateDownloadedCourseSize(siteHomeId);
                if (size > 0) {
                    const status = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getCourseStatus(siteHomeId);
                    downloadedCourses.push({
                        id: siteHomeId,
                        title: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.sitehome.sitehome'),
                        totalSize: size,
                        isDownloading: status === _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADING,
                    });
                }
            }
            this.spaceUsage = yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].getSiteSpaceUsage(this.siteId);
            this.setDownloadedCourses(downloadedCourses);
            this.loaded = true;
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.courseStatusObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
    /**
     * Delete all courses that have been downloaded.
     *
     * @param event: Event Object.
     */
    deleteCompletelyDownloadedCourses(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletecourses');
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showModalLoading('core.deleting', true);
            const deletedCourseIds = this.completelyDownloadedCourses.map((course) => course.id);
            try {
                yield Promise.all(deletedCourseIds.map((courseId) => _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].deleteCourseFiles(courseId)));
                this.setDownloadedCourses(this.downloadedCourses.filter((course) => !_singletons_array__WEBPACK_IMPORTED_MODULE_13__["CoreArray"].contains(deletedCourseIds, course.id)));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errordeletefile'));
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Delete course.
     *
     * @param event: Event Object.
     * @param course Course to delete.
     */
    deleteCourse(event, course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showDeleteConfirm('addon.storagemanager.confirmdeletedatafrom', { name: course.title });
            }
            catch (error) {
                if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].isCanceledError(error)) {
                    throw error;
                }
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showModalLoading('core.deleting', true);
            try {
                yield _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_4__["CoreCourseHelper"].deleteCourseFiles(course.id);
                this.setDownloadedCourses(_singletons_array__WEBPACK_IMPORTED_MODULE_13__["CoreArray"].withoutItem(this.downloadedCourses, course));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errordeletefile'));
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Handle course updated event.
     *
     * @param courseId Updated course id.
     */
    onCourseUpdated(courseId, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (courseId == _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourseProvider"].ALL_COURSES_CLEARED) {
                this.setDownloadedCourses([]);
                return;
            }
            const course = this.downloadedCourses.find((course) => course.id === courseId);
            if (!course) {
                return;
            }
            course.isDownloading = status === _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADING;
            course.totalSize = yield this.calculateDownloadedCourseSize(course.id);
            this.setDownloadedCourses(this.downloadedCourses);
        });
    }
    /**
     * Set downloaded courses data.
     *
     * @param courses Courses info.
     */
    setDownloadedCourses(courses) {
        this.downloadedCourses = courses.sort((a, b) => b.totalSize - a.totalSize);
        this.completelyDownloadedCourses = courses.filter((course) => !course.isDownloading);
        this.totalSize = this.downloadedCourses.reduce((totalSize, course) => totalSize + course.totalSize, 0);
    }
    /**
     * Get downloaded course data.
     *
     * @param course Course.
     * @return Course info.
     */
    getDownloadedCourse(course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const totalSize = yield this.calculateDownloadedCourseSize(course.id);
            const status = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getCourseStatus(course.id);
            return {
                id: course.id,
                title: course.displayname || course.fullname,
                totalSize,
                isDownloading: status === _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADING,
            };
        });
    }
    /**
     * Calculate the size of a downloaded course.
     *
     * @param courseId Downloaded course id.
     * @return Promise to be resolved with the course size.
     */
    calculateDownloadedCourseSize(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sections = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getSections(courseId);
            const modules = _singletons_array__WEBPACK_IMPORTED_MODULE_13__["CoreArray"].flatten(sections.map((section) => section.modules));
            const promisedModuleSizes = modules.map((module) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const size = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseModulePrefetchDelegate"].getModuleStoredSize(module, courseId);
                return isNaN(size) ? 0 : size;
            }));
            const moduleSizes = yield Promise.all(promisedModuleSizes);
            return moduleSizes.reduce((totalSize, moduleSize) => totalSize + moduleSize, 0);
        });
    }
    /**
     * Open course storage.
     *
     * @param courseId Course Id.
     */
    openCourse(courseId, title) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].navigateToSitePath('/storage/' + courseId, { params: { title } });
    }
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param event: Event Object.
     */
    deleteSiteStorage(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            try {
                const siteName = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getRequiredCurrentSite().getSiteName();
                this.spaceUsage = yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].deleteSiteStorage(siteName, this.siteId);
            }
            catch (_a) {
                // Ignore cancelled confirmation modal.
            }
        });
    }
};
AddonStorageManagerCoursesStoragePage.ctorParameters = () => [];
AddonStorageManagerCoursesStoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-storagemanager-courses-storage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./courses-storage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/storagemanager/pages/courses-storage/courses-storage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./courses-storage.scss */ "./src/addons/storagemanager/pages/courses-storage/courses-storage.scss")).default]
    })
], AddonStorageManagerCoursesStoragePage);



/***/ }),

/***/ "./src/addons/storagemanager/storagemanager-lazy.module.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/storagemanager/storagemanager-lazy.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddonStorageManagerLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonStorageManagerLazyModule", function() { return AddonStorageManagerLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_courses_storage_courses_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/courses-storage/courses-storage */ "./src/addons/storagemanager/pages/courses-storage/courses-storage.ts");
/* harmony import */ var _pages_course_storage_course_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/course-storage/course-storage */ "./src/addons/storagemanager/pages/course-storage/course-storage.ts");
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
        path: 'storage',
        component: _pages_courses_storage_courses_storage__WEBPACK_IMPORTED_MODULE_4__["AddonStorageManagerCoursesStoragePage"],
    },
    {
        path: 'storage/:courseId',
        component: _pages_course_storage_course_storage__WEBPACK_IMPORTED_MODULE_5__["AddonStorageManagerCourseStoragePage"],
    },
];
let AddonStorageManagerLazyModule = class AddonStorageManagerLazyModule {
};
AddonStorageManagerLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [
            _pages_courses_storage_courses_storage__WEBPACK_IMPORTED_MODULE_4__["AddonStorageManagerCoursesStoragePage"],
            _pages_course_storage_course_storage__WEBPACK_IMPORTED_MODULE_5__["AddonStorageManagerCourseStoragePage"],
        ],
    })
], AddonStorageManagerLazyModule);



/***/ })

}]);
//# sourceMappingURL=addons-storagemanager-storagemanager-lazy-module.js.map