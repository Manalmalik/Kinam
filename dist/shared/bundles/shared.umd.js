(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/cdk/drag-drop'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/material/dialog')) :
    typeof define === 'function' && define.amd ? define('shared', ['exports', '@angular/common', '@angular/cdk/drag-drop', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/form-field', '@angular/material/input', '@angular/material/button', '@angular/material/dialog'], factory) :
    (factory((global.shared = {}),global.ng.common,global.ng.cdk['drag-drop'],global.ng.core,global.ng.forms,global.ng.material.card,global.ng.material['form-field'],global.ng.material.input,global.ng.material.button,global.ng.material.dialog));
}(this, (function (exports,common,dragDrop,core,forms,card,formField,input,button,dialog) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Implementation for the icon logic.
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            card.MatCardModule,
                            input.MatInputModule,
                            formField.MatFormFieldModule,
                            button.MatButtonModule,
                            dialog.MatDialogModule,
                            dragDrop.DragDropModule
                        ],
                        exports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            card.MatCardModule,
                            input.MatInputModule,
                            formField.MatFormFieldModule,
                            button.MatButtonModule,
                            dialog.MatDialogModule,
                            dragDrop.DragDropModule
                        ]
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=shared.umd.js.map