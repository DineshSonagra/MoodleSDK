(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                </core-format-text>\n            </h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"displayMenu || mediaFile\" [attr.aria-label]=\"'addon.mod_lesson.lessonmenu' | translate\"\n                (click)=\"showMenu()\">\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <core-loading [hideUntil]=\"loaded\">\n        <!-- Info messages. Only show the first one. -->\n        <ion-card class=\"core-info-card\" *ngIf=\"lesson && messages?.length\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ messages[0].message }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <div *ngIf=\"lesson\" [ngClass]='{\"addon-mod_lesson-slideshow\": lesson.slideshow}'\n            [ngStyle]=\"{'width': lessonWidth, 'height': lessonHeight}\">\n\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\" [timeLeftClassThreshold]=\"-1\"\n                [timerText]=\"'addon.mod_lesson.timeremaining' | translate\">\n            </core-timer>\n\n            <!-- Retake and ongoing score. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"showRetake && !eolData && !processData\">\n                <ion-label>\n                    <p>{{ 'addon.mod_lesson.attempt' | translate:{$a: retake} }}</p>\n                </ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"pageData && pageData.ongoingscore && !eolData && !processData\"\n                class=\"addon-mod_lesson-ongoingscore ion-text-wrap\">\n                <ion-label>{{ pageData.ongoingscore }}</ion-label>\n            </ion-item>\n\n            <!-- Page content. -->\n            <ion-card *ngIf=\"!eolData && !processData\">\n                <!-- Content page. -->\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!question && pageContent\">\n                    <ion-label>\n                        <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\" [text]=\"pageContent\"\n                            contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\n                        </core-format-text>\n                    </ion-label>\n                </ion-item>\n\n                <!-- Question page. -->\n                <!-- We need to set ngIf loaded to make formGroup directive restart every time a page changes, see MOBILE-2540. -->\n                <form *ngIf=\"question && loaded\" [formGroup]=\"questionForm\" #questionFormEl (ngSubmit)=\"submitQuestion($event)\">\n\n                    <ion-item-divider class=\"ion-text-wrap\" *ngIf=\"pageContent\">\n                        <ion-label>\n                            <h2>\n                                <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"pageContent\"\n                                    contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\n                                </core-format-text>\n                            </h2>\n                        </ion-label>\n                    </ion-item-divider>\n\n                    <!-- Render a different input depending on the type of the question. -->\n                    <ng-container [ngSwitch]=\"question.template\">\n\n                        <!-- Short answer. -->\n                        <ion-item class=\"ion-text-wrap\" *ngSwitchCase=\"'shortanswer'\">\n                            <ion-label class=\"sr-only\" stacked></ion-label>\n                            <ion-input [type]=\"question.input!.type\" placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\n                                [id]=\"question.input!.id\" [formControlName]=\"question.input!.name\" autocorrect=\"off\"\n                                [maxlength]=\"question.input!.maxlength\">\n                            </ion-input>\n                        </ion-item>\n\n                        <!-- Essay. -->\n                        <ng-container *ngSwitchCase=\"'essay'\">\n                            <ion-item *ngIf=\"question.textarea\">\n                                <ion-label class=\"sr-only\">{{ 'core.content' | translate }}</ion-label>\n                                <core-rich-text-editor placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\n                                    [control]=\"question.control\" [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                    [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                    elementId=\"answer_editor\">\n                                </core-rich-text-editor>\n                            </ion-item>\n                            <ion-item class=\"ion-text-wrap\" *ngIf=\"!question.textarea && question.useranswer\">\n                                <ion-label>\n                                    <h3 class=\"item-heading\">{{ 'addon.mod_lesson.youranswer' | translate }}</h3>\n                                    <p>\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                            [text]=\"question.useranswer\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                            [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </p>\n                                </ion-label>\n                            </ion-item>\n                        </ng-container>\n\n                        <!-- Multichoice. -->\n                        <ng-container *ngSwitchCase=\"'multichoice'\">\n                            <!-- Single choice. -->\n                            <ion-radio-group *ngIf=\"!question.multi\" [formControlName]=\"question.controlName\">\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\n                                    <ion-label>\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\" [text]=\"option.text\"\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </ion-label>\n                                    <ion-radio slot=\"end\" [id]=\"option.id\" [value]=\"option.value\" [disabled]=\"option.disabled\">\n                                    </ion-radio>\n                                </ion-item>\n                            </ion-radio-group>\n\n                            <!-- Multiple choice. -->\n                            <ng-container *ngIf=\"question.multi\">\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\n                                    <ion-label>\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"option.text\"\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </ion-label>\n                                    <ion-checkbox [id]=\"option.id\" [formControlName]=\"option.name\" slot=\"end\"></ion-checkbox>\n                                </ion-item>\n                            </ng-container>\n                        </ng-container>\n\n                        <!-- Matching. -->\n                        <ng-container *ngSwitchCase=\"'matching'\">\n                            <ion-item class=\"ion-text-wrap\" *ngFor=\"let row of question.rows\">\n                                <ion-label>\n                                    <p>\n                                        <core-format-text id=\"addon-mod_lesson-matching-{{row.id}}\" [component]=\"component\"\n                                            [componentId]=\"lesson?.coursemodule\" [text]=\"row.text\" contextLevel=\"module\"\n                                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </p>\n                                </ion-label>\n                                <ion-select [id]=\"row.id\" [formControlName]=\"row.name\" interface=\"action-sheet\"\n                                    [attr.aria-labelledby]=\"'addon-mod_lesson-matching-' + row.id\">\n                                    <ion-select-option *ngFor=\"let option of row.options\" [value]=\"option.value\">\n                                        {{option.label}}\n                                    </ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                        </ng-container>\n                    </ng-container>\n\n                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-text-wrap ion-margin button-no-uppercase\">\n                        {{ question.submitLabel }}\n                    </ion-button>\n                    <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\n                    <input type=\"submit\" class=\"core-submit-hidden-enter\" />\n                </form>\n            </ion-card>\n\n            <!-- Page buttons and progress. -->\n            <ion-list *ngIf=\"!eolData && !processData\">\n                <ion-grid *ngIf=\"pageButtons?.length\" class=\"ion-text-wrap addon-mod_lesson-pagebuttons\">\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col *ngFor=\"let button of pageButtons\" size=\"12\" size-md=\"6\" size-lg=\"3\" col-xl>\n                            <ion-button expand=\"block\" fill=\"outline\" [id]=\"button.id\" (click)=\"buttonClicked(button.data)\"\n                                class=\"ion-text-wrap button-no-uppercase\">\n                                {{ button.content }}\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson?.progressbar && !canManage && pageData\">\n                    <ion-label>\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress\">\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: pageData.progress} }}\n                        </span>\n                        <core-progress-bar [progress]=\"pageData.progress\" ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress\">\n                        </core-progress-bar>\n                    </ion-label>\n                </ion-item>\n                <ion-card class=\"core-info-card\" *ngIf=\"lesson?.progressbar && canManage\">\n                    <ion-item class=\"ion-text-wrap\">\n                        <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                        <ion-label>{{ 'addon.mod_lesson.progressbarteacherwarning2' | translate }}</ion-label>\n                    </ion-item>\n                </ion-card>\n            </ion-list>\n\n            <!-- End of lesson reached. -->\n            <ion-card class=\"core-warning-card\" *ngIf=\"eolData && !processData && eolData.offline?.value\">\n                <ion-item>\n                    <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>{{ 'addon.mod_lesson.finishretakeoffline' | translate }}</ion-label>\n                </ion-item>\n            </ion-card>\n\n            <ion-card *ngIf=\"eolData && !processData\">\n\n                <ion-card-header class=\"ion-text-wrap\" *ngIf=\"eolData.gradelesson\">\n                    <ion-card-title>{{ 'addon.mod_lesson.congratulations' | translate }}</ion-card-title>\n                </ion-card-header>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.notenoughtimespent\">\n                    <ion-label>{{ eolData.notenoughtimespent.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofpagesviewed\">\n                    <ion-label>{{ eolData.numberofpagesviewed.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.youshouldview\">\n                    <ion-label>{{ eolData.youshouldview.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofcorrectanswers\">\n                    <ion-label>{{ eolData.numberofcorrectanswers.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayscorewithessays\">\n                    <ion-label [innerHTML]=\"eolData.displayscorewithessays.message\"></ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!eolData.displayscorewithessays && eolData.displayscorewithoutessays\">\n                    <ion-label>{{ eolData.displayscorewithoutessays.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.yourcurrentgradeisoutof\">\n                    <ion-label>{{ eolData.yourcurrentgradeisoutof.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.eolstudentoutoftimenoanswers\">\n                    <ion-label>{{ eolData.eolstudentoutoftimenoanswers.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.welldone\">\n                    <ion-label>{{ eolData.welldone.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson.progressbar && eolData.progresscompleted\">\n                    <ion-label>\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress-end\">\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: eolData.progresscompleted.value} }}\n                        </span>\n                        <core-progress-bar [progress]=\"eolData.progresscompleted.value\"\n                            ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress-end\">\n                        </core-progress-bar>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayofgrade\">\n                    <ion-label>{{ eolData.displayofgrade.message }}</ion-label>\n                </ion-item>\n                <ion-button *ngIf=\"eolData.reviewlesson\" expand=\"block\" class=\"ion-text-wrap ion-margin button-no-uppercase\"\n                    (click)=\"reviewLesson(reviewPageId!)\">\n                    {{ 'addon.mod_lesson.reviewlesson' | translate }}\n                </ion-button>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.modattemptsnoteacher\">\n                    <ion-label>{{ eolData.modattemptsnoteacher.message }}</ion-label>\n                </ion-item>\n                <!-- If activity link was successfully formatted, render the button. -->\n                <ion-button *ngIf=\"activityLink && activityLink.formatted\" expand=\"block\" fill=\"outline\" [href]=\"activityLink.href\"\n                    core-link [capture]=\"true\" class=\"ion-text-wrap ion-margin button-no-uppercase\">\n                    <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                        [courseId]=\"courseId\">\n                    </core-format-text>\n                </ion-button>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"activityLink && !activityLink.formatted\">\n                    <!-- Activity link wasn't formatted, render the original link. -->\n                    <ion-label>\n                        <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                            [courseId]=\"courseId\">\n                        </core-format-text>\n                    </ion-label>\n                </ion-item>\n            </ion-card>\n\n            <!-- Feedback returned when processing an action. -->\n            <ion-list *ngIf=\"processData\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"processData.ongoingscore && !processData.reviewmode\">\n                    <ion-label>{{ processData.ongoingscore }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!processData.reviewmode || review\">\n                    <ion-label>\n                        <div *ngIf=\"!processData.reviewmode\">\n                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"processData.feedback\"\n                                contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                            </core-format-text>\n                        </div>\n                        <div *ngIf=\"review\">\n                            <p>{{ 'addon.mod_lesson.gotoendoflesson' | translate }}</p>\n                            <p>{{ 'addon.mod_lesson.or' | translate }}</p>\n                            <p>{{ 'addon.mod_lesson.continuetonextpage' | translate }}</p>\n                        </div>\n                    </ion-label>\n                </ion-item>\n\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" *ngIf=\"review\" (click)=\"changePage(LESSON_EOL)\">\n                    {{ 'addon.mod_lesson.finish' | translate }}\n                </ion-button>\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" fill=\"outline\" *ngFor=\"let button of processDataButtons\"\n                    (click)=\"changePage(button.pageId, true)\">\n                    {{ button.label | translate }}\n                </ion-button>\n            </ion-list>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <core-format-text *ngIf=\"quiz\" [text]=\"quiz.name\" contextLevel=\"module\" [contextInstanceId]=\"quiz.coursemodule\"\n                    [courseId]=\"courseId\">\n                </core-format-text>\n            </h1>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" id=\"addon-mod_quiz-connection-error-button\" [hidden]=\"!autoSaveError\"\n                (click)=\"showConnectionError($event)\" [attr.aria-label]=\"'addon.mod_quiz.connectionerror' | translate\"\n                aria-haspopup=\"dialog\">\n                <ion-icon name=\"fas-exclamation-circle\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"navigation.length\" [attr.aria-label]=\"'addon.mod_quiz.opentoc' | translate\" (click)=\"openNavigation()\">\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <!-- Navigation arrows and time left. -->\n    <ion-toolbar *ngIf=\"loaded && endTime && questions.length && !quizAborted && !showSummary\" color=\"light\">\n        <ion-title>\n            <core-timer [endTime]=\"endTime\" (finished)=\"timeUp()\" [timerText]=\"'addon.mod_quiz.timeleft' | translate\" [align]=\"'center'\">\n            </core-timer>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <core-loading [hideUntil]=\"loaded\" class=\"has-spacer\">\n        <!-- Button to start attempting. -->\n        <ion-button *ngIf=\"!attempt\" expand=\"block\" class=\"ion-margin\" (click)=\"start()\">\n            {{ 'addon.mod_quiz.startattempt' | translate }}\n        </ion-button>\n\n        <!-- Questions -->\n        <form name=\"addon-mod_quiz-player-form\" *ngIf=\"questions.length && !quizAborted && !showSummary\" #quizForm>\n            <div *ngFor=\"let question of questions\">\n                <ion-card id=\"addon-mod_quiz-question-{{question.slot}}\">\n                    <!-- \"Header\" of the question. -->\n                    <ion-item-divider>\n                        <ion-label>\n                            <h2 *ngIf=\"question.number\" class=\"inline\">\n                                {{ 'core.question.questionno' | translate:{$a: question.number} }}\n                            </h2>\n                            <h2 *ngIf=\"!question.number\" class=\"inline\">{{ 'core.question.information' | translate }}</h2>\n                        </ion-label>\n                        <div *ngIf=\"question.status || question.readableMark\" slot=\"end\"\n                            class=\"ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note\">\n                            <p *ngIf=\"question.status\" class=\"block\">{{question.status}}</p>\n                            <p *ngIf=\"question.readableMark\">{{ question.readableMark }}</p>\n                        </div>\n                    </ion-item-divider>\n\n                    <!-- Body of the question. -->\n                    <core-question class=\"ion-text-wrap\" [question]=\"question\" [component]=\"component\" [componentId]=\"cmId\"\n                        [attemptId]=\"attempt!.id\" [usageId]=\"attempt!.uniqueid\" [offlineEnabled]=\"offline\" contextLevel=\"module\"\n                        [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [preferredBehaviour]=\"quiz!.preferredbehaviour\" [review]=\"false\"\n                        (onAbort)=\"abortQuiz()\" (buttonClicked)=\"behaviourButtonClicked($event)\">\n                    </core-question>\n                </ion-card>\n            </div>\n        </form>\n\n        <!-- Go to next or previous page. -->\n        <ion-row *ngIf=\"questions.length && !quizAborted && !showSummary\" class=\"spacer-top\">\n            <ion-col *ngIf=\"previousPage >= 0\">\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"changePage(previousPage)\" class=\"ion-text-wrap\">\n                    <ion-icon name=\"fas-chevron-left\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    {{ 'core.previous' | translate }}\n                </ion-button>\n            </ion-col>\n            <ion-col *ngIf=\"nextPage >= -1\">\n                <ion-button expand=\"block\" (click)=\"changePage(nextPage)\" class=\"ion-text-wrap\" *ngIf=\"nextPage > 0\">\n                    {{ 'core.next' | translate }}\n                    <ion-icon name=\"fas-chevron-right\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n                <ion-button expand=\"block\" (click)=\"changePage(nextPage)\" class=\"ion-text-wrap\" *ngIf=\"nextPage == -1\">\n                    {{ 'core.submit' | translate }}\n                </ion-button>\n            </ion-col>\n        </ion-row>\n\n        <!-- Summary -->\n        <ion-card *ngIf=\"!quizAborted && showSummary && summaryQuestions.length\" class=\"addon-mod_quiz-table\">\n            <ion-card-header class=\"ion-text-wrap\">\n                <ion-card-title>{{ 'addon.mod_quiz.summaryofattempt' | translate }}</ion-card-title>\n            </ion-card-header>\n\n            <!-- \"Header\" of the summary table. -->\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-down\">\n                            <strong>{{ 'addon.mod_quiz.question' | translate }}</strong>\n                        </ion-col>\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-up\"><strong>#</strong></ion-col>\n                        <ion-col size=\"9\" class=\"ion-text-center\">\n                            <strong>{{ 'addon.mod_quiz.status' | translate }}</strong>\n                        </ion-col>\n                    </ion-row>\n                </ion-label>\n            </ion-item>\n\n            <!-- List of questions of the summary table. -->\n            <ng-container *ngFor=\"let question of summaryQuestions\">\n                <ion-item *ngIf=\"question.number\" (click)=\"changePage(question.page, false, question.slot)\"\n                    [attr.aria-label]=\"'core.question.questionno' | translate:{$a: question.number}\" [detail]=\"!isSequential && canReturn\"\n                    [button]=\"!isSequential && canReturn\">\n                    <ion-label>\n                        <ion-row class=\"ion-align-items-center\">\n                            <ion-col size=\"3\" class=\"ion-text-center\">{{ question.number }}</ion-col>\n                            <ion-col size=\"9\" class=\"ion-text-center ion-text-wrap\">{{ question.status }}</ion-col>\n                        </ion-row>\n                    </ion-label>\n                </ion-item>\n            </ng-container>\n\n            <!-- Due date warning. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"dueDateWarning\">\n                <ion-label>{{ dueDateWarning }}</ion-label>\n            </ion-item>\n\n            <!-- Time left (if quiz is timed). -->\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\" [timerText]=\"'addon.mod_quiz.timeleft' | translate\">\n            </core-timer>\n\n            <!-- List of messages explaining why the quiz cannot be submitted. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"preventSubmitMessages.length\">\n                <ion-label>\n                    <h3 class=\"item-heading\">{{ 'addon.mod_quiz.cannotsubmitquizdueto' | translate }}</h3>\n                    <p *ngFor=\"let message of preventSubmitMessages\">{{message}}</p>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n\n        <!-- Quiz aborted -->\n        <ion-card *ngIf=\"attempt && ((!questions.length && !showSummary) || quizAborted)\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>{{ 'addon.mod_quiz.errorparsequestions' | translate }}</ion-label>\n            </ion-item>\n            <ion-button *ngIf=\"canReturn\" expand=\"block\" class=\"ion-margin ion-text-wrap\" fill=\"outline\"\n                (click)=\"changePage(attempt!.currentpage!)\">\n                {{ 'addon.mod_quiz.returnattempt' | translate }}\n            </ion-button>\n        </ion-card>\n\n        <div collapsible-footer appearOnBottom *ngIf=\"!quizAborted && showSummary && summaryQuestions.length && loaded\" slot=\"fixed\"\n            class=\"list-item-limited-width\">\n            <ion-button *ngIf=\"preventSubmitMessages.length\" expand=\"block\" class=\"ion-margin ion-text-wrap\" [href]=\"moduleUrl\" core-link\n                [showBrowserWarning]=\"false\">\n                {{ 'core.openinbrowser' | translate }}\n                <ion-icon name=\"fas-external-link-alt\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n\n            <!-- Button to submit the quiz. -->\n            <ion-button *ngIf=\"!attempt!.finishedOffline && !preventSubmitMessages.length\" expand=\"block\" class=\"ion-margin ion-text-wrap\"\n                (click)=\"finishAttempt(true)\">\n                {{ 'addon.mod_quiz.submitallandfinish' | translate }}\n            </ion-button>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonModLessonPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPageModule", function() { return AddonModLessonPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.page */ "./src/addons/mod/lesson/pages/player/player.page.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
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
        component: _player_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_6__["CanLeaveGuard"]],
    },
];
let AddonModLessonPlayerPageModule = class AddonModLessonPlayerPageModule {
};
AddonModLessonPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _player_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonPlayerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModLessonPlayerPageModule);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.page.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.page.ts ***!
  \***********************************************************/
/*! exports provided: AddonModLessonPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPage", function() { return AddonModLessonPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/menu-modal/menu-modal */ "./src/addons/mod/lesson/components/menu-modal/menu-modal.ts");
/* harmony import */ var _services_lesson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/lesson */ "./src/addons/mod/lesson/services/lesson.ts");
/* harmony import */ var _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/lesson-helper */ "./src/addons/mod/lesson/services/lesson-helper.ts");
/* harmony import */ var _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/lesson-offline */ "./src/addons/mod/lesson/services/lesson-offline.ts");
/* harmony import */ var _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/lesson-sync */ "./src/addons/mod/lesson/services/lesson-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page that allows attempting and reviewing a lesson.
 */
let AddonModLessonPlayerPage = class AddonModLessonPlayerPage {
    constructor(changeDetector, formBuilder) {
        this.changeDetector = changeDetector;
        this.formBuilder = formBuilder;
        this.component = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].COMPONENT;
        this.LESSON_EOL = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
        this.messages = []; // Messages to display to the user.
        this.processDataButtons = []; // Buttons to display after processing a page.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.menuShown = false; // Whether menu is shown.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.password = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('password');
                this.review = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('review');
                this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('pageId');
                this.retakeToReview = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('retake');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            try {
                // Fetch the Lesson data.
                const success = yield this.fetchLessonData();
                if (success) {
                    // Review data loaded or new retake started, remove any retake being finished in sync.
                    _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        if (this.lesson) {
            // Unblock the lesson so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].unblockOperation(this.component, this.lesson.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || !this.questionForm) {
                return true;
            }
            if (this.question && !this.eolData && !this.processData && this.originalData) {
                // Question shown. Check if there is any change.
                if (!_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].basicLeftCompare(this.questionForm.getRawValue(), this.originalData, 3)) {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.confirmcanceledit'));
                }
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        if (this.menuShown) {
            _singletons__WEBPACK_IMPORTED_MODULE_12__["ModalController"].dismiss();
        }
    }
    /**
     * A button was clicked.
     *
     * @param data Button data.
     */
    buttonClicked(data) {
        this.processPage(data);
    }
    /**
     * Call a function and go offline if allowed and the call fails.
     *
     * @param func Function to call.
     * @param options Options passed to the function.
     * @return Promise resolved in success, rejected otherwise.
     */
    callFunction(func, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield func();
            }
            catch (error) {
                if (this.offline || this.review || !_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson)) {
                    // Already offline or not allowed.
                    throw error;
                }
                if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // WebService returned an error, cannot perform the action.
                    throw error;
                }
                // Go offline and retry.
                this.offline = true;
                // Get the possible jumps now.
                this.jumps = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 1 /* PREFER_CACHE */,
                });
                // Call the function again with offline mode and the new jumps.
                options.readingStrategy = 1 /* PREFER_CACHE */;
                options.jumps = this.jumps;
                options.offline = true;
                return func();
            }
        });
    }
    /**
     * Change the page from menu or when continuing from a feedback page.
     *
     * @param pageId Page to load.
     * @param ignoreCurrent If true, allow loading current page.
     * @return Promise resolved when done.
     */
    changePage(pageId, ignoreCurrent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!ignoreCurrent && !this.eolData && this.currentPage == pageId) {
                // Page already loaded, stop.
                return;
            }
            this.loaded = true;
            this.messages = [];
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get the lesson data and load the page.
     *
     * @return Promise resolved with true if success, resolved with false otherwise.
     */
    fetchLessonData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.lesson = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLesson(this.courseId, this.cmId);
                this.title = this.lesson.name; // Temporary title.
                // Block the lesson so it cannot be synced.
                _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].blockOperation(this.component, this.lesson.id);
                // Wait for any ongoing sync to finish. We won't sync a lesson while it's being played.
                yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].waitForSync(this.lesson.id);
                // If lesson has offline data already, use offline mode.
                this.offline = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasOfflineData(this.lesson.id);
                if (!this.offline && !_services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].isOnline() && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson) && !this.review) {
                    // Lesson doesn't have offline data, but it allows offline and the device is offline. Use offline mode.
                    this.offline = true;
                }
                const options = {
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                this.accessInfo = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson.id, options), options);
                const promises = [];
                this.canManage = this.accessInfo.canmanage;
                this.retake = this.accessInfo.attemptscount;
                this.showRetake = !this.currentPage && this.retake > 0; // Only show it in first page if it isn't the first retake.
                if (this.accessInfo.preventaccessreasons.length) {
                    // If it's a password protected lesson and we have the password, allow playing it.
                    const preventReason = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPreventAccessReason(this.accessInfo, !!this.password, this.review);
                    if (preventReason) {
                        // Lesson cannot be played, show message and go back.
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](preventReason.message);
                    }
                }
                if (this.review && this.retakeToReview != this.accessInfo.attemptscount - 1) {
                    // Reviewing a retake that isn't the last one. Error.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_lesson.errorreviewretakenotlast'));
                }
                if (this.password) {
                    // Lesson uses password, get the whole lesson object.
                    const options = {
                        password: this.password,
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    };
                    promises.push(this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLessonWithPassword.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson.id, options), options).then((lesson) => {
                        this.lesson = lesson;
                        return;
                    }));
                }
                if (this.offline) {
                    // Offline mode, get the list of possible jumps to allow navigation.
                    promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                        cmId: this.cmId,
                        readingStrategy: 1 /* PREFER_CACHE */,
                    }).then((jumpList) => {
                        this.jumps = jumpList;
                        return;
                    }));
                }
                yield Promise.all(promises);
                this.mediaFile = (_a = this.lesson.mediafiles) === null || _a === void 0 ? void 0 : _a[0];
                this.lessonWidth = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediawidth) : '';
                this.lessonHeight = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediaheight) : '';
                yield this.launchRetake(this.currentPage);
                return true;
            }
            catch (error) {
                if (this.review && this.retakeToReview && _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // The user cannot review the retake. Unmark the retake as being finished in sync.
                    yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return false;
            }
        });
    }
    /**
     * Finish the retake.
     *
     * @param outOfTime Whether the retake is finished because the user ran out of time.
     * @return Promise resolved when done.
     */
    finishRetake(outOfTime) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.messages = [];
            if (this.offline && _services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].isOnline()) {
                // Offline mode but the app is online. Try to sync the data.
                const result = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(_services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].syncLesson(this.lesson.id, true, true));
                if ((_a = result === null || result === void 0 ? void 0 : result.warnings) === null || _a === void 0 ? void 0 : _a.length) {
                    // Some data was deleted. Check if the retake has changed.
                    const info = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation(this.lesson.id, {
                        cmId: this.cmId,
                    });
                    if (info.attemptscount != this.accessInfo.attemptscount) {
                        // The retake has changed. Leave the view and show the error.
                        this.forceLeave = true;
                        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](result.warnings[0]);
                    }
                    // Retake hasn't changed, show the warning and finish the retake in offline.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                this.offline = false;
            }
            // Now finish the retake.
            const options = {
                password: this.password,
                outOfTime,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
            };
            const data = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].finishRetake.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson, this.courseId, options), options);
            this.title = this.lesson.name;
            this.eolData = data.data;
            this.messages = this.messages.concat(data.messages);
            this.processData = undefined;
            _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'lesson' });
            // Format activity link if present.
            if (this.eolData.activitylink) {
                this.activityLink = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].formatActivityLink(this.eolData.activitylink.value);
            }
            else {
                this.activityLink = undefined;
            }
            // Format review lesson if present.
            if (this.eolData.reviewlesson) {
                const params = _services_utils_url__WEBPACK_IMPORTED_MODULE_10__["CoreUrlUtils"].extractUrlParams(this.eolData.reviewlesson.value);
                if (!params || !params.pageid) {
                    // No pageid in the URL, the user cannot review (probably didn't answer any question).
                    delete this.eolData.reviewlesson;
                }
                else {
                    this.reviewPageId = Number(params.pageid);
                }
            }
        });
    }
    /**
     * Jump to a certain page after performing an action.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    jumpToPage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId === 0) {
                // Not a valid page, return to entry view.
                // This happens, for example, when the user clicks to go to previous page and there is no previous page.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            else if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            // Load new page.
            this.messages = [];
            return this.loadPage(pageId);
        });
    }
    /**
     * Start or continue a retake.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    launchRetake(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data;
            if (this.review) {
                // Review mode, no need to launch the retake.
            }
            else if (!this.offline) {
                // Not in offline mode, launch the retake.
                data = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].launchRetake(this.lesson.id, this.password, pageId);
            }
            else {
                // Check if there is a finished offline retake.
                const finished = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasFinishedRetake(this.lesson.id);
                if (finished) {
                    // Always show EOL page.
                    pageId = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
                }
            }
            this.currentPage = pageId || this.accessInfo.firstpageid;
            this.messages = (data === null || data === void 0 ? void 0 : data.messages) || [];
            if (this.lesson.timelimit && !this.accessInfo.canmanage) {
                // Get the last lesson timer.
                const timers = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getTimers(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 2 /* ONLY_NETWORK */,
                });
                this.endTime = timers[timers.length - 1].starttime + this.lesson.timelimit;
            }
            return this.loadPage(this.currentPage);
        });
    }
    /**
     * Load the lesson menu.
     *
     * @return Promise resolved when done.
     */
    loadMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loadingMenu) {
                // Already loading.
                return;
            }
            try {
                this.loadingMenu = true;
                const options = {
                    password: this.password,
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                const pages = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPages.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson.id, options), options);
                this.lessonPages = pages.map((entry) => entry.page);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading menu.');
            }
            finally {
                this.loadingMenu = false;
            }
        });
    }
    /**
     * Load a certain page.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    loadPage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            const options = {
                password: this.password,
                review: this.review,
                includeContents: true,
                cmId: this.cmId,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
                includeOfflineData: true,
            };
            const data = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPageData.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson, pageId, options), options);
            if (data.newpageid == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            this.pageData = data;
            this.title = data.page.title;
            this.pageContent = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageContentsFromPageData(data);
            this.loaded = true;
            this.currentPage = pageId;
            this.messages = this.messages.concat(data.messages);
            // Page loaded, hide EOL and feedback data if shown.
            this.eolData = this.processData = undefined;
            if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(data.page.type)) {
                // Create an empty FormGroup without controls, they will be added in getQuestionFromPageData.
                this.questionForm = this.formBuilder.group({});
                this.pageButtons = [];
                this.question = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getQuestionFromPageData(this.questionForm, data);
                this.originalData = this.questionForm.getRawValue(); // Use getRawValue to include disabled values.
            }
            else {
                this.pageButtons = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageButtonsFromHtml(data.pagecontent || '');
                this.question = undefined;
                this.originalData = undefined;
            }
            // Don't display the navigation menu in review mode, using them displays errors.
            if (data.displaymenu && !this.displayMenu && !this.review) {
                // Load the menu.
                this.loadMenu();
            }
            this.displayMenu = !this.review && !!data.displaymenu;
            if (!this.firstPageLoaded) {
                this.firstPageLoaded = true;
            }
            else {
                this.showRetake = false;
            }
        });
    }
    /**
     * Process a page, sending some data.
     *
     * @param data The data to send.
     * @param formSubmitted Whether a form was submitted.
     * @return Promise resolved when done.
     */
    processPage(data, formSubmitted) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            const options = {
                password: this.password,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
            };
            try {
                const result = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].processPage.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson, this.courseId, this.pageData, data, options), options);
                if (formSubmitted) {
                    _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormSubmittedEvent(this.formElement, result.sent, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
                }
                if (!this.offline && !this.review && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson)) {
                    // Lesson allows offline and the user changed some data in server. Update cached data.
                    const retake = this.accessInfo.attemptscount;
                    const options = {
                        cmId: this.cmId,
                        readingStrategy: 2 /* ONLY_NETWORK */,
                    };
                    // Update in background the list of content pages viewed or question attempts.
                    if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(((_b = (_a = this.pageData) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.type) || -1)) {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getQuestionsAttemptsOnline(this.lesson.id, retake, options);
                    }
                    else {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getContentPagesViewedOnline(this.lesson.id, retake, options);
                    }
                }
                if (result.nodefaultresponse || result.inmediatejump) {
                    // Don't display feedback or force a redirect to a new page. Load the new page.
                    return yield this.jumpToPage(result.newpageid);
                }
                // Not inmediate jump, show the feedback.
                result.feedback = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].removeQuestionFromFeedback(result.feedback);
                this.messages = result.messages;
                this.processData = result;
                this.processDataButtons = [];
                if (this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached && !result.reviewmode) {
                    // User can try again, show button to do so.
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.reviewquestionback',
                        pageId: this.currentPage,
                    });
                }
                // Button to continue.
                if (this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached) {
                    /* If both the "Yes, I'd like to try again" and "No, I just want to go on to the next question" point to the
                        same page then don't show the "No, I just want to go on to the next question" button. It's confusing. */
                    if (this.pageData.page.id != result.newpageid) {
                        // Button to continue the lesson (the page to go is configured by the teacher).
                        this.processDataButtons.push({
                            label: 'addon.mod_lesson.reviewquestioncontinue',
                            pageId: result.newpageid,
                        });
                    }
                }
                else {
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.continue',
                        pageId: result.newpageid,
                    });
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error processing page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Review the lesson.
     *
     * @param pageId Page to load.
     */
    reviewLesson(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            this.review = true;
            this.offline = false; // Don't allow offline mode in review.
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Submit a question.
     *
     * @param e Event.
     */
    submitQuestion(e) {
        e.preventDefault();
        e.stopPropagation();
        this.loaded = false;
        // Use getRawValue to include disabled values.
        const data = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].prepareQuestionData(this.question, this.questionForm.getRawValue());
        this.processPage(data, true).finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Time up.
     */
    timeUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Time up called, hide the timer.
            this.endTime = undefined;
            this.loaded = false;
            try {
                yield this.finishRetake(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error finishing attempt');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Show the navigation modal.
     *
     * @return Promise resolved when done.
     */
    showMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuShown = true;
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                component: _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__["AddonModLessonMenuModalPage"],
                componentProps: {
                    pageInstance: this,
                },
            });
            this.menuShown = false;
        });
    }
};
AddonModLessonPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonModLessonPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['questionFormEl',] }]
};
AddonModLessonPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-lesson-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/lesson/pages/player/player.scss")).default]
    })
], AddonModLessonPlayerPage);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.scss":
/*!********************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --background-odd: var(--light);\n}\n\n:host-context(body.dark) {\n  --background-odd: var(--medium);\n}\n\n:host ::ng-deep .addon-mod_lesson-slideshow {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n\n:host ::ng-deep .studentanswer {\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n}\n\n:host ::ng-deep table {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n\n:host ::ng-deep table tr:nth-child(odd) {\n  background-color: var(--background-odd);\n}\n\n:host ::ng-deep table tr:last-child td {\n  border-bottom: 0;\n}\n\n:host ::ng-deep table td {\n  padding: 5px;\n  line-height: 1.5;\n  border-bottom: 1px solid var(--stroke);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyw4QkFBQTtBQUNIOztBQUVBO0VBQ0csK0JBQUE7QUFDSDs7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFHSTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7QUFEUjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUlRO0VBQ0ksdUNBQUE7QUFGWjs7QUFLUTtFQUNJLGdCQUFBO0FBSFo7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQUpaIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAtLWJhY2tncm91bmQtb2RkOiB2YXIoLS1saWdodCk7XG59XG5cbjpob3N0LWNvbnRleHQoYm9keS5kYXJrKSB7XG4gICAtLWJhY2tncm91bmQtb2RkOiB2YXIoLS1tZWRpdW0pO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC5hZGRvbi1tb2RfbGVzc29uLXNsaWRlc2hvdyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLnN0dWRlbnRhbnN3ZXIge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcblxuICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW9kZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN0cm9rZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/quiz/classes/auto-save.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/quiz/classes/auto-save.ts ***!
  \**************************************************/
/*! exports provided: AddonModQuizAutoSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAutoSave", function() { return AddonModQuizAutoSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/connection-error/connection-error */ "./src/addons/mod/quiz/components/connection-error/connection-error.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
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
 * Class to support auto-save in quiz. Every certain seconds, it will check if there are changes in the current page answers
 * and, if so, it will save them automatically.
 */
class AddonModQuizAutoSave {
    /**
     * Constructor.
     *
     * @param formName Name of the form where the answers are stored.
     * @param buttonSelector Selector to find the button to show the connection error.
     */
    constructor(formName, buttonSelector) {
        this.formName = formName;
        this.buttonSelector = buttonSelector;
        this.CHECK_CHANGES_INTERVAL = 5000;
        this.popoverShown = false; // Whether the popover is shown.
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_3__["CoreLogger"].getInstance('AddonModQuizAutoSave');
        // Create the observable to notify if an error happened.
        this.errorObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     * Cancel a pending auto save.
     */
    cancelAutoSave() {
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = undefined;
    }
    /**
     * Check if the answers have changed in a page.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    checkChanges(quiz, attempt, preflightData, offline) {
        if (this.autoSaveTimeout) {
            // We already have an auto save pending, no need to check changes.
            return;
        }
        const answers = this.getAnswers();
        if (!this.previousAnswers) {
            // Previous answers isn't set, set it now.
            this.previousAnswers = answers;
            return;
        }
        // Check if answers have changed.
        let equal = true;
        for (const name in answers) {
            if (this.previousAnswers[name] != answers[name]) {
                equal = false;
                break;
            }
        }
        if (!equal) {
            this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
        }
        this.previousAnswers = answers;
    }
    /**
     * Get answers from a form.
     *
     * @return Answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].getAnswersFromForm(document.forms[this.formName]);
    }
    /**
     * Hide the auto save error.
     */
    hideAutoSaveError() {
        var _a;
        this.errorObservable.next(false);
        (_a = this.popover) === null || _a === void 0 ? void 0 : _a.dismiss();
    }
    /**
     * Returns an observable that will notify when an error happens or stops.
     * It will send true when there's an error, and false when the error has been ammended.
     *
     * @return Observable.
     */
    onError() {
        return this.errorObservable;
    }
    /**
     * Schedule an auto save process if it's not scheduled already.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    setAutoSaveTimer(quiz, attempt, preflightData, offline) {
        // Don't schedule if already shceduled or quiz is almost closed.
        if (!quiz.autosaveperiod || this.autoSaveTimeout || _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].isAttemptTimeNearlyOver(quiz, attempt)) {
            return;
        }
        // Schedule save.
        this.autoSaveTimeout = window.setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const answers = this.getAnswers();
            this.cancelAutoSave();
            this.previousAnswers = answers; // Update previous answers to match what we're sending to the server.
            try {
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].saveAttempt(quiz, attempt, answers, preflightData, offline);
                // Save successful, we can hide the connection error if it was shown.
                this.hideAutoSaveError();
            }
            catch (error) {
                // Error auto-saving. Show error and set timer again.
                this.logger.warn('Error auto-saving data.', error);
                // If there was no error already, show the error message.
                if (!this.errorObservable.getValue()) {
                    this.errorObservable.next(true);
                    this.showAutoSaveError();
                }
                // Try again.
                this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
            }
        }), quiz.autosaveperiod * 1000);
    }
    /**
     * Show an error popover due to an auto save error.
     */
    showAutoSaveError(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't show popover if it was already shown.
            if (this.popoverShown) {
                return;
            }
            const event = ev || {
                // Cannot use new Event() because event's target property is readonly
                target: document.querySelector(this.buttonSelector),
                stopPropagation: () => { },
                preventDefault: () => { },
            };
            this.popoverShown = true;
            this.popover = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].openPopover({
                component: _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizConnectionErrorComponent"],
                event: event,
            });
            this.popoverShown = false;
        });
    }
    /**
     * Start a process to periodically check changes in answers.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    startCheckChangesProcess(quiz, attempt, preflightData, offline) {
        if (this.checkChangesInterval || !quiz.autosaveperiod) {
            // We already have the interval in place or the quiz has autosave disabled.
            return;
        }
        this.previousAnswers = undefined;
        // Load initial answers in 2.5 seconds so the first check interval finds them already loaded.
        this.loadPreviousAnswersTimeout = window.setTimeout(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, 2500);
        // Check changes every certain time.
        this.checkChangesInterval = window.setInterval(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, this.CHECK_CHANGES_INTERVAL);
    }
    /**
     * Stops the periodical check for changes.
     */
    stopCheckChangesProcess() {
        clearTimeout(this.loadPreviousAnswersTimeout);
        clearInterval(this.checkChangesInterval);
        this.loadPreviousAnswersTimeout = undefined;
        this.checkChangesInterval = undefined;
    }
}


/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonModQuizPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPageModule", function() { return AddonModQuizPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/components/components.module */ "./src/core/features/question/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.page */ "./src/addons/mod/quiz/pages/player/player.page.ts");
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
        component: _player_page__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    },
];
let AddonModQuizPlayerPageModule = class AddonModQuizPlayerPageModule {
};
AddonModQuizPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionComponentsModule"],
        ],
        declarations: [
            _player_page__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizPlayerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AddonModQuizPlayerPageModule);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonModQuizPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPage", function() { return AddonModQuizPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/question/components/question/question */ "./src/core/features/question/components/question/question.ts");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_auto_save__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../classes/auto-save */ "./src/addons/mod/quiz/classes/auto-save.ts");
/* harmony import */ var _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/navigation-modal/navigation-modal */ "./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
/* harmony import */ var _services_quiz_sync__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/quiz-sync */ "./src/addons/mod/quiz/services/quiz-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
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
 * Page that allows attempting a quiz.
 */
let AddonModQuizPlayerPage = class AddonModQuizPlayerPage {
    constructor(changeDetector, elementRef) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.loaded = false; // Whether data has been loaded.
        this.quizAborted = false; // Whether the quiz was aborted due to an error.
        this.offline = false; // Whether the quiz is being attempted in offline mode.
        this.navigation = []; // List of questions to navigate them.
        this.questions = []; // Questions of the current page.
        this.nextPage = -2; // Next page.
        this.previousPage = -1; // Previous page.
        this.showSummary = false; // Whether the attempt summary should be displayed.
        this.summaryQuestions = []; // The questions to display in the summary.
        this.canReturn = false; // Whether the user can return to a page after seeing the summary.
        this.preventSubmitMessages = []; // List of messages explaining why the quiz cannot be submitted.
        this.autoSaveError = false; // Whether there's been an error in auto-save.
        this.isSequential = false; // Whether quiz navigation is sequential.
        this.preflightData = {}; // Preflight data to attempt the quiz.
        this.newAttempt = false; // Whether the user is starting a new attempt.
        this.quizDataLoaded = false; // Whether the quiz data has been loaded.
        this.timeUpCalled = false; // Whether the time up function has been called.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.reloadNavigation = false; // Whether navigation needs to be reloaded because some data was sent to server.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.moduleUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('moduleUrl');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            return;
        }
        // Create the auto save instance.
        this.autoSave = new _classes_auto_save__WEBPACK_IMPORTED_MODULE_12__["AddonModQuizAutoSave"]('addon-mod_quiz-player-form', '#addon-mod_quiz-connection-error-button');
        // Start the player when the page is loaded.
        this.start();
        // Listen for errors on auto-save.
        this.autoSaveErrorSubscription = this.autoSave.onError().subscribe((error) => {
            this.autoSaveError = error;
            this.changeDetector.detectChanges();
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a;
        // Stop auto save.
        this.autoSave.cancelAutoSave();
        this.autoSave.stopCheckChangesProcess();
        (_a = this.autoSaveErrorSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        if (this.quiz) {
            // Unblock the quiz so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || this.quizAborted || !this.questions.length || this.showSummary) {
                return true;
            }
            // Save answers.
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield this.processAttempt(false, false);
            }
            catch (error) {
                // Save attempt failed. Show confirmation.
                modal.dismiss();
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.confirmleavequizonerror'));
                _singletons_form__WEBPACK_IMPORTED_MODULE_17__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            finally {
                modal.dismiss();
            }
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Close any modal if present.
            const modal = yield _singletons__WEBPACK_IMPORTED_MODULE_10__["ModalController"].getTop();
            modal === null || modal === void 0 ? void 0 : modal.dismiss();
        });
    }
    /**
     * Abort the quiz.
     */
    abortQuiz() {
        this.quizAborted = true;
    }
    /**
     * A behaviour button in a question was clicked (Check, Redo, ...).
     *
     * @param button Clicked button.
     */
    behaviourButtonClicked(button) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            try {
                // Confirm that the user really wants to do it.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.areyousure'));
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                // Get the answers.
                const answers = yield this.prepareAnswers();
                // Add the clicked button data.
                answers[button.name] = button.value;
                // Behaviour checks are always in online.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData);
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
                // Reload the current page.
                const scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
                const scrollTop = (scrollElement === null || scrollElement === void 0 ? void 0 : scrollElement.scrollTop) || -1;
                this.loaded = false;
                (_b = this.content) === null || _b === void 0 ? void 0 : _b.scrollToTop(); // Scroll top so the spinner is seen.
                try {
                    yield this.loadPage(this.attempt.currentpage);
                }
                finally {
                    this.loaded = true;
                    if (scrollTop != -1) {
                        // Wait for content to be rendered.
                        setTimeout(() => {
                            var _a;
                            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToPoint(0, scrollTop);
                        }, 50);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error performing action.');
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param page Page to load. -1 means summary.
     * @param fromModal Whether the page was selected using the navigation modal.
     * @param slot Slot of the question to scroll to.
     * @return Promise resolved when done.
     */
    changePage(page, fromModal, slot) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            if (page != -1 && (this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_OVERDUE || this.attempt.finishedOffline)) {
                // We can't load a page if overdue or the local attempt is finished.
                return;
            }
            else if (page == this.attempt.currentpage && !this.showSummary && slot !== undefined) {
                // Navigating to a question in the current page.
                this.scrollToQuestion(slot);
                return;
            }
            else if ((page == this.attempt.currentpage && !this.showSummary) || (fromModal && this.isSequential && page != -1)) {
                // If the user is navigating to the current page we do nothing.
                // Also, in sequential quizzes we don't allow navigating using the modal except for finishing the quiz (summary).
                return;
            }
            else if (page === -1 && this.showSummary) {
                // Summary already shown.
                return;
            }
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            // First try to save the attempt data. We only save it if we're not seeing the summary.
            if (!this.showSummary) {
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                try {
                    yield this.processAttempt(false, false);
                    modal.dismiss();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
                    modal.dismiss();
                    return;
                }
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
            }
            this.loaded = false;
            try {
                // Attempt data successfully saved, load the page or summary.
                // Stop checking for changes during page change.
                this.autoSave.stopCheckChangesProcess();
                if (page === -1) {
                    yield this.loadSummary();
                }
                else {
                    yield this.loadPage(page);
                }
            }
            catch (error) {
                // If the user isn't seeing the summary, start the check again.
                if (!this.showSummary) {
                    this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
            finally {
                this.loaded = true;
                if (slot !== undefined) {
                    // Scroll to the question.
                    this.scrollToQuestion(slot);
                }
            }
        });
    }
    /**
     * Convenience function to get the quiz data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
                // Block the quiz so it cannot be synced.
                _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
                // Wait for any ongoing sync to finish. We won't sync a quiz while it's being played.
                yield _services_quiz_sync__WEBPACK_IMPORTED_MODULE_16__["AddonModQuizSync"].waitForSync(this.quiz.id);
                this.isSequential = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isNavigationSequential(this.quiz);
                if (_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isQuizOffline(this.quiz)) {
                    // Quiz supports offline.
                    this.offline = true;
                }
                else {
                    // Quiz doesn't support offline right now, but maybe it did and then the setting was changed.
                    // If we have an unfinished offline attempt then we'll use offline mode.
                    this.offline = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isLastAttemptOfflineUnfinished(this.quiz);
                }
                if (this.quiz.timelimit && this.quiz.timelimit > 0) {
                    this.readableTimeLimit = _singletons_time__WEBPACK_IMPORTED_MODULE_19__["CoreTime"].formatTime(this.quiz.timelimit);
                }
                // Get access information for the quiz.
                this.quizAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getQuizAccessInformation(this.quiz.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                // Get user attempts to determine last attempt.
                const attempts = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getUserAttempts(this.quiz.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                if (!attempts.length) {
                    // There are no attempts, start a new one.
                    this.newAttempt = true;
                    return;
                }
                // Get the last attempt. If it's finished, start a new one.
                this.lastAttempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].setAttemptCalculatedData(this.quiz, attempts[attempts.length - 1], false, undefined, true);
                this.newAttempt = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isAttemptFinished(this.lastAttempt.state);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
            }
        });
    }
    /**
     * Finish an attempt, either by timeup or because the user clicked to finish it.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @return Promise resolved when done.
     */
    finishAttempt(userFinish, timeUp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            try {
                // Show confirm if the user clicked the finish button and the quiz is in progress.
                if (!timeUp && this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS) {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.confirmclose'));
                }
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                yield this.processAttempt(userFinish, timeUp);
                // Trigger an event to notify the attempt was finished.
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_FINISHED_EVENT, {
                    quizId: this.quiz.id,
                    attemptId: this.attempt.id,
                    synced: !this.offline,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'quiz' });
                // Leave the player.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Fix sequence checks of current page.
     *
     * @return Promise resolved when done.
     */
    fixSequenceChecks() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get current page data again to get the latest sequencechecks.
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptData(this.attempt.id, this.attempt.currentpage, this.preflightData, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            const newSequenceChecks = {};
            data.questions.forEach((question) => {
                const sequenceCheck = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionSequenceCheckFromHtml(question.html);
                if (sequenceCheck) {
                    newSequenceChecks[question.slot] = sequenceCheck;
                }
            });
            // Notify the new sequence checks to the components.
            (_a = this.questionComponents) === null || _a === void 0 ? void 0 : _a.forEach((component) => {
                component.updateSequenceCheck(newSequenceChecks);
            });
        });
    }
    /**
     * Get the input answers.
     *
     * @return Object with the answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getAnswersFromForm(document.forms['addon-mod_quiz-player-form']);
    }
    /**
     * Initializes the timer if enabled.
     */
    initTimer() {
        var _a;
        if (!((_a = this.attemptAccessInfo) === null || _a === void 0 ? void 0 : _a.endtime) || this.attemptAccessInfo.endtime < 0) {
            return;
        }
        // Quiz has an end time. Check if time left should be shown.
        const shouldShowTime = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].shouldShowTimeLeft(this.quizAccessInfo.activerulenames, this.attempt, this.attemptAccessInfo.endtime);
        if (shouldShowTime) {
            this.endTime = this.attemptAccessInfo.endtime;
        }
        else {
            delete this.endTime;
        }
    }
    /**
     * Load a page questions.
     *
     * @param page The page to load.
     * @return Promise resolved when done.
     */
    loadPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptData(this.attempt.id, page, this.preflightData, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            // Update attempt, status could change during the execution.
            this.attempt = data.attempt;
            this.attempt.currentpage = page;
            this.questions = data.questions;
            this.nextPage = data.nextpage;
            this.previousPage = this.isSequential ? -1 : page - 1;
            this.showSummary = false;
            this.questions.forEach((question) => {
                // Get the readable mark for each question.
                question.readableMark = _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].extractQuestionInfoBox(question, '.info');
                // Check if the question is blocked. If it is, treat it as a description question.
                if (_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isQuestionBlocked(question)) {
                    question.type = 'description';
                }
            });
            // Mark the page as viewed.
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].logViewAttempt(this.attempt.id, page, this.preflightData, this.offline, this.quiz));
            // Start looking for changes.
            this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
        });
    }
    /**
     * Load attempt summary.
     *
     * @return Promise resolved when done.
     */
    loadSummary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.summaryQuestions = [];
            this.summaryQuestions = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: this.quiz.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.showSummary = true;
            this.canReturn = this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS && !this.attempt.finishedOffline;
            this.preventSubmitMessages = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getPreventSubmitMessages(this.summaryQuestions);
            this.dueDateWarning = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptDueDateWarning(this.quiz, this.attempt);
            // Log summary as viewed.
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].logViewAttemptSummary(this.attempt.id, this.preflightData, this.quiz.id, this.quiz.name));
        });
    }
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @return Promise resolved when done.
     */
    loadNavigation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // We use the attempt summary to build the navigation because it contains all the questions.
            this.navigation = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: this.quiz.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.navigation.forEach((question) => {
                question.stateClass = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionStateClass(question.state || '');
            });
        });
    }
    /**
     * Open the navigation modal.
     *
     * @return Promise resolved when done.
     */
    openNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.reloadNavigation) {
                // Some data has changed, reload the navigation.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.loadNavigation());
                modal.dismiss();
                this.reloadNavigation = false;
            }
            // Create the navigation modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_13__["AddonModQuizNavigationModalComponent"],
                componentProps: {
                    navigation: this.navigation,
                    summaryShown: this.showSummary,
                    currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                    isReview: false,
                },
            });
            if (!modalData) {
                return;
            }
            this.changePage(modalData.page, true, modalData.slot);
        });
    }
    /**
     * Prepare the answers to be sent for the attempt.
     *
     * @return Promise resolved with the answers.
     */
    prepareAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].prepareAnswers(this.questions, this.getAnswers(), this.offline, this.component, this.quiz.coursemodule);
    }
    /**
     * Process attempt.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @param retrying Whether we're retrying the change.
     * @return Promise resolved when done.
     */
    processAttempt(userFinish, timeUp, retrying) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the answers to send.
            let answers = {};
            if (!this.showSummary) {
                answers = yield this.prepareAnswers();
            }
            try {
                // Send the answers.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData, userFinish, timeUp, this.offline);
            }
            catch (error) {
                if (!error || error.errorcode != 'submissionoutofsequencefriendlymessage') {
                    throw error;
                }
                try {
                    // There was an error with the sequence check. Try to ammend it.
                    yield this.fixSequenceChecks();
                }
                catch (_a) {
                    throw error;
                }
                if (retrying) {
                    // We're already retrying, don't send the data again because it could cause an infinite loop.
                    throw error;
                }
                // Sequence checks updated, try to send the data again.
                return this.processAttempt(userFinish, timeUp, true);
            }
            // Answers saved, cancel auto save.
            this.autoSave.cancelAutoSave();
            this.autoSave.hideAutoSaveError();
            if (this.formElement) {
                _singletons_form__WEBPACK_IMPORTED_MODULE_17__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !this.offline, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].clearTmpData(this.questions, this.component, this.quiz.coursemodule);
        });
    }
    /**
     * Scroll to a certain question.
     *
     * @param slot Slot of the question to scroll to.
     */
    scrollToQuestion(slot) {
        _singletons_dom__WEBPACK_IMPORTED_MODULE_18__["CoreDom"].scrollToElement(this.elementRef.nativeElement, '#addon-mod_quiz-question-' + slot);
    }
    /**
     * Show connection error.
     *
     * @param ev Click event.
     */
    showConnectionError(ev) {
        this.autoSave.showAutoSaveError(ev);
    }
    /**
     * Convenience function to start the player.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loaded = false;
                if (!this.quizDataLoaded) {
                    // Fetch data.
                    yield this.fetchData();
                    this.quizDataLoaded = true;
                }
                // Quiz data has been loaded, try to start or continue.
                yield this.startOrContinueAttempt();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Start or continue an attempt.
     *
     * @return Promise resolved when done.
     */
    startOrContinueAttempt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let attempt = this.newAttempt ? undefined : this.lastAttempt;
                // Get the preflight data and start attempt if needed.
                attempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].getAndCheckPreflightData(this.quiz, this.quizAccessInfo, this.preflightData, attempt, this.offline, false, 'addon.mod_quiz.startattempt');
                // Re-fetch attempt access information with the right attempt (might have changed because a new attempt was created).
                this.attemptAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptAccessInformation(this.quiz.id, attempt.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                this.attempt = attempt;
                yield this.loadNavigation();
                if (this.attempt.state != _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_OVERDUE && !this.attempt.finishedOffline) {
                    // Attempt not overdue and not finished in offline, load page.
                    yield this.loadPage(this.attempt.currentpage);
                    this.initTimer();
                }
                else {
                    // Attempt is overdue or finished in offline, we can only load the summary.
                    yield this.loadSummary();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
        });
    }
    /**
     * Quiz time has finished.
     */
    timeUp() {
        if (this.timeUpCalled) {
            return;
        }
        this.timeUpCalled = true;
        this.finishAttempt(false, true);
    }
};
AddonModQuizPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonModQuizPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    questionComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__["CoreQuestionComponent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['quizForm',] }]
};
AddonModQuizPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/quiz/pages/player/player.scss")).default]
    })
], AddonModQuizPlayerPage);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-mod_quiz-question-note p {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n:host ion-content ion-toolbar {\n  border-bottom: 1px solid var(--stroke);\n}\n:host core-timer .core-timer.core-timer-timeleft-0 {\n  background-color: #ca3120 !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-0 label, :host core-timer .core-timer.core-timer-timeleft-0 span, :host core-timer .core-timer.core-timer-timeleft-0 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-1 {\n  background-color: rgba(202, 49, 32, 0.9333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-1 label, :host core-timer .core-timer.core-timer-timeleft-1 span, :host core-timer .core-timer.core-timer-timeleft-1 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-2 {\n  background-color: rgba(202, 49, 32, 0.8666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-2 label, :host core-timer .core-timer.core-timer-timeleft-2 span, :host core-timer .core-timer.core-timer-timeleft-2 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-3 {\n  background-color: rgba(202, 49, 32, 0.8) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-3 label, :host core-timer .core-timer.core-timer-timeleft-3 span, :host core-timer .core-timer.core-timer-timeleft-3 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-4 {\n  background-color: rgba(202, 49, 32, 0.7333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-4 label, :host core-timer .core-timer.core-timer-timeleft-4 span, :host core-timer .core-timer.core-timer-timeleft-4 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-5 {\n  background-color: rgba(202, 49, 32, 0.6666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-5 label, :host core-timer .core-timer.core-timer-timeleft-5 span, :host core-timer .core-timer.core-timer-timeleft-5 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-6 {\n  background-color: rgba(202, 49, 32, 0.6) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-6 label, :host core-timer .core-timer.core-timer-timeleft-6 span, :host core-timer .core-timer.core-timer-timeleft-6 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-7 {\n  background-color: rgba(202, 49, 32, 0.5333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-7 label, :host core-timer .core-timer.core-timer-timeleft-7 span, :host core-timer .core-timer.core-timer-timeleft-7 ion-icon {\n  color: var(--white);\n}\n:host core-timer .core-timer.core-timer-timeleft-8 {\n  background-color: rgba(202, 49, 32, 0.4666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-9 {\n  background-color: rgba(202, 49, 32, 0.4) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-10 {\n  background-color: rgba(202, 49, 32, 0.3333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-11 {\n  background-color: rgba(202, 49, 32, 0.2666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-12 {\n  background-color: rgba(202, 49, 32, 0.2) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-13 {\n  background-color: rgba(202, 49, 32, 0.1333333333) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-14 {\n  background-color: rgba(202, 49, 32, 0.0666666667) !important;\n}\n:host core-timer .core-timer.core-timer-timeleft-15 {\n  background-color: rgba(202, 49, 32, 0) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL21vZC9xdWl6L3BhZ2VzL3BsYXllci9wbGF5ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQWtHQTs7RUFBQTtBQ3BHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDekRJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBZ0RSO0FBN0NJO0VBQ0ksc0NBQUE7QUErQ1I7QUF6Q1k7RUFDSSxvQ0FBQTtBQTJDaEI7QUF4Q29CO0VBQ0ksbUJBQUE7QUEwQ3hCO0FBL0NZO0VBQ0ksNERBQUE7QUFpRGhCO0FBOUNvQjtFQUNJLG1CQUFBO0FBZ0R4QjtBQXJEWTtFQUNJLDREQUFBO0FBdURoQjtBQXBEb0I7RUFDSSxtQkFBQTtBQXNEeEI7QUEzRFk7RUFDSSxtREFBQTtBQTZEaEI7QUExRG9CO0VBQ0ksbUJBQUE7QUE0RHhCO0FBakVZO0VBQ0ksNERBQUE7QUFtRWhCO0FBaEVvQjtFQUNJLG1CQUFBO0FBa0V4QjtBQXZFWTtFQUNJLDREQUFBO0FBeUVoQjtBQXRFb0I7RUFDSSxtQkFBQTtBQXdFeEI7QUE3RVk7RUFDSSxtREFBQTtBQStFaEI7QUE1RW9CO0VBQ0ksbUJBQUE7QUE4RXhCO0FBbkZZO0VBQ0ksNERBQUE7QUFxRmhCO0FBbEZvQjtFQUNJLG1CQUFBO0FBb0Z4QjtBQXpGWTtFQUNJLDREQUFBO0FBMkZoQjtBQTVGWTtFQUNJLG1EQUFBO0FBOEZoQjtBQS9GWTtFQUNJLDREQUFBO0FBaUdoQjtBQWxHWTtFQUNJLDREQUFBO0FBb0doQjtBQXJHWTtFQUNJLG1EQUFBO0FBdUdoQjtBQXhHWTtFQUNJLDREQUFBO0FBMEdoQjtBQTNHWTtFQUNJLDREQUFBO0FBNkdoQjtBQTlHWTtFQUNJLGlEQUFBO0FBZ0hoQiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9xdWl6L3BhZ2VzL3BsYXllci9wbGF5ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XG5cbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xuICovXG5cblxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xuXG4gIEBpZiAkaW5kZXgge1xuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcbiAgfVxuXG4gIEByZXR1cm4gJHN0cmluZztcbn1cblxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbkBmdW5jdGlvbiBzdHItc3BsaXQoJHN0cmluZywgJHNlcGFyYXRvcikge1xuICAvLyBlbXB0eSBhcnJheS9saXN0XG4gICRzcGxpdC1hcnI6ICgpO1xuICAvLyBmaXJzdCBpbmRleCBvZiBzZXBhcmF0b3IgaW4gc3RyaW5nXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXG4gIEB3aGlsZSAkaW5kZXggIT0gbnVsbCB7XG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xuICAgIC8vIHB1c2ggaXRlbSB0byBhcnJheVxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xuICAgICRzdHJpbmc6IHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyAxKTtcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcbiAgfVxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xuXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcbn1cblxuXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xuICAkc3RhcnQtaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc3RhcnQpO1xuXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xuICAgICRwb3N0OiBzdHItc2xpY2UoJHN0cmluZywgJHN0YXJ0LWluZGV4ICsgc3RyLWxlbmd0aCgkc3RhcnQpKTtcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xuXG4gICAgQGlmICRlbmQtaW5kZXgge1xuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIG51bGw7XG59XG5cblxuLy8gU3RyaW5nIENvbnRhaW5zIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWNvbnRhaW5zKCRzdHJpbmcsICRuZWVkbGUpIHtcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XG4gIH1cblxuICBAcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vIFVSTCBFbmNvZGUgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiB1cmwtZW5jb2RlKCR2YWwpIHtcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xuICBAcmV0dXJuICRlbmNvZGVkO1xufVxuXG5cbi8vIEFkZCBSb290IFNlbGVjdG9yXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRkcyBhIHJvb3Qgc2VsZWN0b3IgdXNpbmcgaG9zdC1jb250ZXh0IGJhc2VkIG9uIHRoZSBzZWxlY3RvciBwYXNzZWRcbi8vXG4vLyBFeGFtcGxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLmZpeGVkXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1oaWRlIDo6c2xvdHRlZChpb24tYmFkZ2UpXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXG4vLyAtLT4gW2Rpcj1ydGxdIC5zaGFkb3dcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xuXG4gICRsaXN0OiAoKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxuICAgIEBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0KFwiKSB7XG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XG5cbiAgICAgICRuZXctZWxlbWVudDogKCk7XG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcblxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogJGVsZW1lbnQ7XG5cbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIikpXCIsIFwiKVwiKTtcbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XG5cbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRzY29wZWQtZWxlbWVudCwgc3BhY2UpO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJG5ldy1lbGVtZW50LCBjb21tYSk7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxuICAgIH0gQGVsc2UgaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdFwiKSB7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIiwgY29tbWEpO1xuICAgIC8vIElmIHRoZSBzZWxlY3RvciBkb2VzIG5vdCBjb250YWluIGhvc3QgYXQgYWxsIGl0IGlzIGVpdGhlciBhIHNoYWRvd1xuICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxuICAgIH0gQGVsc2Uge1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCIjeyRhZGRIb3N0U2VsZWN0b3J9ICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuICRsaXN0O1xufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXG4gKi9cblxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xuICB9XG59XG5cbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxuLy8gaW9uLWNvbG9yKHNlY29uZGFyeSwgY29udHJhc3QpID0+IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSwgMC41KSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSwgMC41KVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBpb24tY29sb3IoJG5hbWUsICR2YXJpYXRpb24sICRhbHBoYTogbnVsbCwgJHJnYjogbnVsbCkge1xuICAkdmFsdWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRuYW1lKTtcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xuICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9LSN7JHZhcmlhdGlvbn07XG5cbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcbiAgICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9O1xuICB9XG5cbiAgQGlmICgkYWxwaGEpIHtcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xuICB9XG4gIEBpZiAoJHJnYikge1xuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcbiAgICAkdmFyaWFibGU6ICN7JHZhcmlhYmxlfS1yZ2I7XG4gIH1cblxuICBAcmV0dXJuIHZhcigjeyR2YXJpYWJsZX0sICR2YWx1ZSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcbn1cblxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcbiAqL1xuXG4vLyBSZXNwb25zaXZlIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICB3aWR0aDogJHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xuXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBJdGVtIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XG4gICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xuXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XG59XG4iLCJAdXNlIFwic2FzczptYXRoXCIgYXMgbWF0aDtcblxuLyoqXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIDYuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDQ4JSkge1xuICAgIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgJHBlcmNlbnQpO1xuICB9XG5cbiAgLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbiAgLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBAZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA4MCUpIHtcbiAgICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsICRwZXJjZW50KTtcbiAgfVxuXG4gIC8vIElvbmljIENvbG9yc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbiAgLy8gY29sb3JzIG1hcFxuXG4gIEBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycykge1xuICAgICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuICAgICAgJGxpZ2h0OiBtYXAtZ2V0KCRiYXNlLCAnbGlnaHQnKTtcblxuICAgICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRsaWdodCk7XG5cbiAgICAgIGJvZHkuZGFyayB7XG4gICAgICAgICAgJGRhcms6IG1hcC1nZXQoJGJhc2UsICdkYXJrJyk7XG4gICAgICAgICAgJGRhcms6IG1peCgkbGlnaHQsIHdoaXRlLCA4MCUpICFkZWZhdWx0O1xuICAgICAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkZGFyayk7XG4gICAgICB9XG4gIH1cblxuICBAbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKSB7XG4gICAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XG4gICAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRiYXNlKTtcbiAgICAgICR0aW50OiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRiYXNlKTtcblxuICAgICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xuICAgICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuXG4gICAgICAvLyBJbnRlcm5hbCBpb25pYyB1c2Ugb25seS5cbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9OiB2YXIoLS0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX07XG4gICAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xuICAgICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcbiAgICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xuXG4gICAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XG4gICAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcbiAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xuICAgICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcbiAgICAgIH1cbiAgfVxuXG5cbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcbiAgICB9XG4gfVxuXG4gQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xufVxuXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCRwcm9wZXJ0aWVzOiBhbGwsICRkdXJhdGlvbjogNTAwbXMsICR0aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0KSB7XG4gICAgJHRyYW5zaXRpb25zOiAoKTtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgJHRyYW5zaXRpb25zOiBhcHBlbmQoJHRyYW5zaXRpb25zLCAkcHJvcGVydHkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24sIGNvbW1hKTtcbiAgICB9XG5cbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG59XG5cbi8qKlxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXG4gKi9cbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRmaWxsOiA2MjYyNjIsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcblxuICAgIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgJGZsaXAtcnRsKTtcbn1cblxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XG59XG5cbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG5cbiAgICBAaWYgKCRlbmQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICB9XG4gICAgQGlmICgkc3RhcnQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1lbmQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XG59XG5cbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWl4aW4gZGFya21vZGUoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImJvZHkuZGFya1wiKX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBob3Jpem9udGFsX3Njcm9sbF9pdGVtKCR3aWR0aCwgJG1pbi13aWR0aCwgJG1heC13aWR0aCkge1xuICAgIGZsZXg6IDAgMCAkd2lkdGg7XG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcbiAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogMTBweDtcblxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENvbG9yIG1peGlucy5cbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcbn1cblxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XG5cbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAxLlxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXG4gICAgJGJsYWNrQ29udHJhc3Q6ICgwLjA1KSAvICgkbHVtaWFuY2UgKyAwLjA1KTtcblxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcbn1cblxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yX3lpcSgkY29sb3IsICRkYXJrOiBibGFjaywgJGxpZ2h0OiB3aGl0ZSkge1xuICAgICRyOiByZWQoJGNvbG9yKTtcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xuXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xuXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XG59XG5cbi8vIFdDQUcgY29udHJhc3QgYWxnb3J5dGhtXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gICAgJGZvcmVncm91bmRMdW1pYW5jZTogbHVtaW5hbmNlKCRmb3JlZ3JvdW5kKTtcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcblxuICAgIEBpZiAoJGJhY2tncm91bmRMdW1pbmFuY2UgPCAkZm9yZWdyb3VuZEx1bWlhbmNlKSB7XG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICBAcmV0dXJuICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSkgLyAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KTtcbiAgICB9XG59XG5cbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XG4gICAgJHI6IHJlZCgkY29sb3IpO1xuICAgICRnOiBncmVlbigkY29sb3IpO1xuICAgICRiOiBibHVlKCRjb2xvcik7XG5cbiAgICAkcjogY29tcG9uZW50LWx1bWluYW5jZSgkcik7XG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcblxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xufVxuXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcblxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfVxufVxuIiwiLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJHdoaXRlOiAgICAgICAjZmZmZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAgICAjZGVlMmU2ICFkZWZhdWx0OyAvLyBTdHJva2VcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xuJGdyYXktNjAwOiAgICAjNmE3MzdiICFkZWZhdWx0O1xuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAgICAjMWQyMTI1ICFkZWZhdWx0OyAvLyBDb3B5IHRleHRcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcblxuJGJsdWU6ICAgICAgICAjMGY2Y2JmICFkZWZhdWx0O1xuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcbiRyZWQ6ICAgICAgICAgI2NhMzEyMCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcblxuJGJyYW5kLWNvbG9yOiAjZmY3NTE4ICFkZWZhdWx0O1xuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAgICAgJGdyYXktOTAwICFkZWZhdWx0OyAvLyAjMWExYTFhXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrKSAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbWVkaXVtOiAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJGNvbG9yczogIChcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXG4gICAgc3VjY2VzczogKGxpZ2h0OiAkc3VjY2VzcyksXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcbiAgICBpbmZvOiAobGlnaHQ6ICRpbmZvKSxcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcbiAgICBkYXJrOiAobGlnaHQ6ICRkYXJrLCBkYXJrOiAkbGlnaHQpLFxuKSAhZGVmYXVsdDtcblxuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXG4gICAgeHM6IDAsXG4gICAgc206IDU3NnB4LFxuICAgIG1kOiA3NjhweCxcbiAgICBsZzogOTkycHgsXG4gICAgdGFibGV0OiA5OTJweCxcbiAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZDogIzgxZWNlYywgIzc0YjlmZiwgI2EyOWJmZSwgI2RmZTZlOSwgIzAwYjg5NCwgIzA5ODRlMywgI2IyYmVjMywgI2ZkY2I2ZSwgI2ZkNzlhOCwgIzZjNWNlNyAhZGVmYXVsdDtcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xuXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtYWx3YXlzLXNob3ctbWFpbi1tZW51OiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1oaWRlLWNvdXJzZWltYWdlLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS1oaWRlLXByb2dyZXNzLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3ItZGFyazogJHRleHQtY29sb3ItZGFyayAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHVzZXIgcGFnZS5cbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xuJGNvcmUtdXNlci1oaWRlLXNpdGVuYW1lOiAkY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWUgIWRlZmF1bHQ7XG4kY29yZS11c2VyLWhpZGUtc2l0ZXVybDogJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmwgIWRlZmF1bHQ7XG5cbi8vIEFjdGl2aXR5IGljb24gYmFja2dyb3VuZCBjb2xvcnMuXG4kYWN0aXZpdHktaWNvbi1jb2xvcnM6IChcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcbiAgICBhc3Nlc3NtZW50OiAjZWI2NmEyLFxuICAgIGNvbGxhYm9yYXRpb246ICNmNzYzNGQsXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcbiAgICBjb250ZW50OiAjMzk5YmUyLFxuICAgIGludGVyZmFjZTogI2EzNzhmZlxuKSAhZGVmYXVsdDtcblxuLy8gQ2FsZW5kYXIgZXZlbnQgY2F0ZWdvcnkgYmFja2dyb3VuZCBjb2xvcnMuXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXG4gICAgY2F0ZWdvcnk6ICM4ZTI0YWEsXG4gICAgY291cnNlOiAkcmVkLFxuICAgIGdyb3VwOiAkeWVsbG93LFxuICAgIHVzZXI6ICRibHVlLFxuICAgIHNpdGU6ICRncmVlblxuKSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xuXG4kcXVpei10aW1lci13YXJuLWNvbG9yOiAkcmVkICFkZWZhdWx0O1xuJHF1aXotdGltZXItaXRlcmF0aW9uczogMTUgIWRlZmF1bHQ7XG5cbjpob3N0IHtcbiAgICAuYWRkb24tbW9kX3F1aXotcXVlc3Rpb24tbm90ZSBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuXG4gICAgaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlKTtcbiAgICB9XG5cbiAgICBjb3JlLXRpbWVyIC5jb3JlLXRpbWVyIHtcbiAgICAgICAgLy8gTWFrZSB0aGUgdGltZXIgZ28gcmVkIHdoZW4gaXQncyByZWFjaGluZyAwLlxuICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRxdWl6LXRpbWVyLWl0ZXJhdGlvbnMge1xuICAgICAgICAgICAgJi5jb3JlLXRpbWVyLXRpbWVsZWZ0LSN7JGl9IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRxdWl6LXRpbWVyLXdhcm4tY29sb3IsIDEgLSAoJGkgLyAkcXVpei10aW1lci1pdGVyYXRpb25zKSkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIEBpZiAkaSA8PSAkcXVpei10aW1lci1pdGVyYXRpb25zIC8gMiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLCBzcGFuLCBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-player-player-module.js.map