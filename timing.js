let counter = 0;
getData = () => {
    console.log("Fetching Data " + this.type + ++counter)
}

debouncePolyfills = (fn, delay = 300) => {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        type = "decounce";
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

throttlePolyfills = (fn, delay = 300) => {
    let timer;
    let flag = true;
    return function () {
        let context = this;
        args = arguments;
        type = "throttle";
        if (flag) {
            clearTimeout(timer);
            fn.apply(context, args);
            flag = false;
            timer = setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

auditTimePolyfills = (fn, delay = 300) => {
    let flag=false;
    return function () {
        let context = this;
        args = arguments;
        type = "audit";
        if (!flag){
            timer = setTimeout(() => {
                flag = false;
                fn.apply(context, args);
                clearTimeout(timer)
            }, delay);
            flag=true;
        }
    }
}

const callData = debouncePolyfills(getData);
const callAuditData = auditTimePolyfills(getData, 1000);
const callThrottleData = throttlePolyfills(getData, 1000);
