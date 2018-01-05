const str = 'Hello\nWorld';

// False value
console.info(`Without 's' flag:`, /Hello.World/.test(str));

// True value
console.info(`With 's' flag:`, /Hello.World/s.test(str));