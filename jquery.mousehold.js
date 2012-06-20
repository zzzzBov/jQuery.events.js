/*!
 * jQuery.mousehold.js
 * 
 * Author: zzzzBov
 */
(function ($, name) {
    "use strict";
    $.event.special[name] = {
        setup: function () {
            var $this,
                holding,
                timeout,
                interval;
            function hold() {
                if (holding) {
                    $this.trigger('mousehold');
                }
            }
            function beginHold() {
                interval = setInterval(hold, 50);
            }
            $this = $(this);
            holding = false;
            $this.on({
                'mousedown.mousehold': function () {
                    function mouseup() {
                        $(document).off('mouseup.mousehold', mouseup);
                        holding = false;
                        clearTimeout(timeout);
                        clearInterval(interval);
                    }
                    holding = true;
                    $(document).on('mouseup.mousehold', mouseup);
                    timeout = setTimeout(beginHold, 200);
                },
                'mouseenter.mousehold': function () {
                    holding = true;
                },
                'mouseleave.mousehold': function () {
                    holding = false;
                }
            });
        },
        teardown: function () {
            $(this).off('.mousehold');
        }
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
}(jQuery, 'mousehold'));