((function () {

    var callbacks = [],

        timeLimit = 50,

        open = false;

    setInterval(loop, 1);

    return {

        addListener: function (fn) {

            callbacks.push(fn);

        },

        cancleListenr: function (fn) {

            callbacks = callbacks.filter(function (v) {

                return v !== fn;

            });

        }

    }

    function loop() {

        var startTime = new Date();

        debugger;

        if (new Date() - startTime > timeLimit) {

            if (!open) {

                callbacks.forEach(function (fn) {

                    fn.call(null);

                });

            }

            open = true;

            window.stop();

            alert('哒咩哒咩!居然想扒人家裤子(拽紧)');

            document.body.innerHTML = "";

        } else {

            open = false;

        }

    }

})()).addListener(function () {

    window.location.reload();

});


document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && (e.keyCode == 123)) {
      e.keyCode = 0;
      e.returnValue = false;
      btf.snackbarShow('哒咩哒咩!居然想扒人家裤子(拽紧)');
      return (false);
    }
}