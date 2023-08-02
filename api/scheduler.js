import cron from "node-cron";

let pattern = '*/3 * * * * *'

cron.schedule(pattern, () => {
    console.log('running a task every minute');
});