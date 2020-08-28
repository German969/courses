"use strict";
var Logging;
(function (Logging) {
    function logMessage() {
        console.log('Other');
    }
    Logging.logMessage = logMessage;
})(Logging || (Logging = {}));
//# sourceMappingURL=logMessage.js.map