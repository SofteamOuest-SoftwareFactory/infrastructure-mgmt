var ovh = require('ovh')({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    consumerKey: process.env.CONSUMER_KEY
});

let params = {
    doNotSendPassword: true,
    sshKey: ["mehdi"],
    templateId: 143431
};

let vpss = ["vps242130.ovh.net", "vps242131.ovh.net",
    "vps242564.ovh.net", "vps242565.ovh.net",
    "vps267690.ovh.net", "vps267694.ovh.net", "vps257315.ovh.net"];

ovh.request('GET', "/me", params, function (err, data) {
    console.log(err || 'Me ' + JSON.stringify(data));
});

ovh.request('GET', "/status/task", params, function (err, data) {
    console.log(err || 'Task Status ' + JSON.stringify(data));
});

vpss.forEach(function (element) {
    //console.log(`/vps/${element}/reinstall`);

    /* ovh.request('GET', `/vps/${element}`, function (err, data) {
        console.log(err || 'VPS Status ' + JSON.stringify(data));
    }); */

    ovh.request('POST', `/vps/${element}/reinstall`, params, function (err, data) {
        console.log(err || 'Reinstall ' + JSON.stringify(data));
    });
});