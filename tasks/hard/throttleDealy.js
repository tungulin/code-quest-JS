/*
 * Задача:
 * Требуется написать функцию,которая будет вызывать fn не чаще, чем раз в delay миллисекунд.
 * В качестве контекста исполнения используется ctx.
 * Первый вызов fn всегда должен быть синхронным.
 * Если игнорируемый вызов оказался последним, то он должен выполниться.
 */

/*
 * пример для delay === 100
 * . - вызовы throttledFn
 * ! - вызовы fn
 *
 * ....................!............!............
 * 0ms            100ms         200ms
 *
 * .     .     .     .     .     .     .     .
 * 0ms  20ms  40ms  60ms  80ms 100ms 120ms 140ms ...
 */

function throttle(fn, delay, ctx) {
  let lastCallArgs = null;
  let blocked = false;
  let fnWithCtx = fn.bind(ctx);

  function setTimer() {
    setTimeout(() => {
      blocked = false;
      if (lastCallArgs) {
        fnWithCtx(...lastCallArgs);
        lastCallArgs = null;
        blocked = true;
        setTimer();
      }
    }, delay);
  }

  return function (...args) {
    if (blocked) {
      lastCallArgs = args;
    } else {
      fnWithCtx(...args);
      blocked = true;
      setTimer();
    }
  };
}

// -----------------------------
function test() {
  const start = Date.now();

  function log(text) {
    const msPassed = Date.now() - start;
    console.log(`${msPassed}: ${this.name} logged ${text}`);
  }

  const throttled = throttle(log, 100, { name: "me" });

  setTimeout(() => throttled("m"), 0);
  setTimeout(() => throttled("mo"), 22);
  setTimeout(() => throttled("mos"), 33);
  setTimeout(() => throttled("mosc"), 150);
  setTimeout(() => throttled("moscow"), 400);

  // 0ms:    me logged m
  // 100ms:  me logged mos
  // 200ms:  me logged mosc
  // 400ms:  me logged moscow
}

console.clear();
test();
