/**
 * jQuery-event.tmpl.js
 * 
 * Author: zzzzBov
 */
(function ($, name) {
    "use strict";
    $.event.special[name] = {
        setup: function (data, namespaces, eventHandle) {},
        teardown: function (namespaces) {},
        add: function (handleObj) {},
        remove: function (handleObj) {},
        _default: function (event) {}
    };
    $.fn[name] = function (data, fn) {
        if (fn == null) {
            fn = data;
            data = null;
        }
        return arguments.length > 0 ?
                this.on(name, null, data, fn) :
                this.trigger(name);
    };
}(jQuery, 'event'));