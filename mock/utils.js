export const loadScript = (url, cb) => {
    const head = document.querySelector("head");
    const script = document.createElement('script');
    script.type = 'text/javascript';
    const readyState = script.readyState;
    if(script.readyState) {
        script.onreadystatechange = function() {
            if(readyState === "complete" || readyState === "loaded") {
                script.onreadystatechange = null;
                cb && cb();
            }
        }
    } else {
        script.onload = function() {
            cb && cb();
        }
    }
    script.src = url;
    head.appendChild(script);
}