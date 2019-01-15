var ovh = require('ovh')({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    consumerKey: process.env.CONSUMER_KEY
});

let VPSs = ["vps242130.ovh.net", "vps242131.ovh.net",
    "vps242564.ovh.net", "vps242565.ovh.net",
    "vps267690.ovh.net", "vps267694.ovh.net", "vps257315.ovh.net"];

let IPs = ["149.202.62.219", "149.202.62.97", "51.254.143.249", "51.254.143.43",
    "92.222.81.117", "51.255.200.197", "51.255.42.138"];

let partitions = ["WWWELASTIC"];

ovh.request('GET', "/me" , function (err, data) {
    console.log(err || 'Me ' + JSON.stringify(data));
});

ovh.request('GET', "/status/task" , function (err, data) {
    console.log(err || 'Task Status ' + JSON.stringify(data));
});

VPSs.forEach(function (element) {
    //console.log(`/vps/${element}/reinstall`);

    let params = {
        doNotSendPassword: true,
        sshKey: ["mehdi"],
        templateId: 143431
    };

    if (false) ovh.request('GET', `/vps/${element}`, function (err, data) {
        console.log(err || 'VPS Status ' + JSON.stringify(data));
    });

    if (false) ovh.request('POST', `/vps/${element}/reinstall`, params, function (err, data) {
        console.log(err || 'Reinstall ' + JSON.stringify(data));
    });
});

ovh.request('GET', '/dedicated/nasha', function (err, data) {
    console.log((err) || 'Storage List ' + JSON.stringify(data));
});

ovh.request('GET', '/dedicated/nasha/zpool-126262', function (err, data) {
    console.log((err) || 'Storage zpool-126262 ' + JSON.stringify(data));
});

partitions.forEach(function (element) {

    let partition = {
        "partitionName": "",
        "protocol": "NFS",
        "size": 10
    };

    partition.partitionName = element;

    //console.log(partition);

    if (false) ovh.request('POST', '/dedicated/nasha/zpool-126262/partition', partition, function (err, data) {
        console.log((err + element) || 'Create Partition ' + JSON.stringify(data));
    });

    IPs.forEach(function (ipelement) {

        let ip = {
            "ip": "",
            "type": "readwrite"
        };

        ip.ip = ipelement;

        console.log(`/dedicated/nasha/zpool-126262/partition/${element}/access?ip=${ipelement}&type=readwrite`);

        console.log(Object.assign({}, ip));

        ovh.request('POST', `/dedicated/nasha/zpool-126262/partition/${element}/access`, Object.assign({}, ip), function (err, data) {
            console.log(("Err Add Access To Partition " + err + " " + ipelement) || 'Add Access To Partition ' + JSON.stringify(data));
        });
    });
});