function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {
        if (typeof arguments.callee.activeXString != 'string') {
            var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];
            for (var i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error('no XHR object available');
    }
};



function $http(url) {
    var core = {
        ajax: function(method, url, args) {
            var promise = new Promise(function(resolve, reject) {
                var xhr = createXHR();
                xhr.open(method, url);
                xhr.send();
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if ((this.status >= 200 && this.status < 300) || this.status == 304) {
                            resolve(this.response);
                        } else {
                            reject(this.statusText);
                        }
                    }
                };
                xhr.onerror = function() {
                    reject(this.statusText);
                };
            });
            return promise;
        }
    };
    return {
        'get': function(args) {
            return core.ajax('GET', url, args);
        },
        'post': function(args) {
            return core.ajax('POST', url, args);
        },
        'put': function(args) {
            return core.ajax('PUT', url, args);
        },
        'delete': function(args) {
            return core.ajax('DELETE', url, args);
        }
    }
}