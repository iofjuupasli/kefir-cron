(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['kefir', 'cron'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('kefir'), require('cron'));
    } else {
        root.KefirCron = factory(root.Kefir, root.Cron);
    }
}(this, function (Kefir, Cron) {
    return function (cronTime) {
        return Kefir.stream(function (emitter) {
            var job = new Cron.CronJob(cronTime, function () {
                emitter.emit();
            }, null, true, 'UTC');
            return function () {
                job.stop();
            };
        });
    };
}));
