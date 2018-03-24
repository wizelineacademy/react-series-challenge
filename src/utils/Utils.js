import ReactDOM from 'react-dom';

const Utils = {
    numberWithCommas: function (tgNum) {
        return tgNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    debounce: function (func, wait, immediate) {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    smoothScrollTo: function (element) {
        let headerHeight = document.getElementById('headerFixed').offsetHeight;
        let rect = ReactDOM.findDOMNode(element).getBoundingClientRect();
        let i = 10;
        let initialScroll = window.pageYOffset || document.documentElement.scrollTop;
        //console.log(initialScroll, ' | ', rect.top)
        let int = setInterval(function () {
            window.scrollTo(0, initialScroll + i);
            i += 20;
            if (i >= (rect.top - headerHeight)) {
                clearInterval(int)
            };
        }, 20);
    },
    jsonToURL: function (srcjson) {
        if (typeof srcjson !== "object") {
            if (typeof console !== "undefined") {
                console.log("\"srcjson\" is not a JSON object");
                return null;
            }
        }
        let u = encodeURIComponent;
        var urljson = "";
        var keys = Object.keys(srcjson);
        for (var i = 0; i < keys.length; i++) {
            if(typeof srcjson[keys[i]] === 'object' || typeof srcjson[keys[i]] === 'array') {
                srcjson[keys[i]] = JSON.stringify(srcjson[keys[i]]);
            }
            urljson += u(keys[i]) + "=" + u(srcjson[keys[i]]);
            if (i < (keys.length - 1)) {
                urljson += "&"
            };
        }
        return urljson;
    },
    slugfiy: function (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
        let to = 'aaaaeeeeiiiioooouuuunc------';
        for (let i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    },
}

export default Utils;