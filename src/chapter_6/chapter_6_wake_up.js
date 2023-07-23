"use strict";
exports.__esModule = true;
exports.wakeUp = void 0;
var __1 = require("../..");
var console_1 = require("../ui/console");
var extra_1 = require("../extra/extra");
function wakeUp() {
    var _a, _b, _c;
    (0, console_1.clear)(true);
    (0, console_1.print)('Wait... was this all a dream?');
    var awoken = tryToWakeUp();
    // optional parameters can be accessed safely with the ?. operator
    // this will only return if every parameter in the whole chain is properly set...
    if (((_c = (_b = (_a = awoken.wake) === null || _a === void 0 ? void 0 : _a.wake) === null || _b === void 0 ? void 0 : _b.wake) === null || _c === void 0 ? void 0 : _c.canWake) === 'Yes') {
        (0, console_1.print)('You have awoken in your bed 🛏 What a lovely dream.');
        (0, console_1.print)('Although...❓❓❓');
        /*
        print('What are these tarts doing here?! 🥧🥧🥧🥧🥧🥧 🤔');

        print(
            '✅ CONGRATULATIONS! You successfully made it through Wonderland! 🥳'
        );
        */
        (0, extra_1.extra)();
        return (0, console_1.askQuestion)('Press ENTER to re-enter Wonderland! ', __1.haveAdventures);
    }
    else {
        (0, console_1.print)('You are unable to wake up! 😱');
        return (0, __1.endAdventure)();
    }
}
exports.wakeUp = wakeUp;
function tryToWakeUp() {
    // 👉 FIXME ❌
    return {
        wake: {
            wake: {
                wake: {
                    canWake: "Yes"
                }
            }
        }
    };
}
