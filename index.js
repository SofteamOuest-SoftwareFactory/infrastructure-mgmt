var ovh = require('ovh')({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    consumerKey: process.env.CONSUMER_KEY
});

var vpsStatus = require('./vps-status');
var vpsReinstall = require('./vps-reinstall');
var partitionCreate = require('./partition-create');
var partitionAddAccess = require('./partition-add-access');
var taskStatus = require('./task-status');

let VPSs = ["vps242130.ovh.net", "vps242131.ovh.net",
    "vps242564.ovh.net", "vps242565.ovh.net",
    "vps267690.ovh.net", "vps267694.ovh.net", "vps257315.ovh.net"];

let IPs = ["149.202.62.219", "149.202.62.97", "51.254.143.249", "51.254.143.43",
    "92.222.81.117", "51.255.200.197", "51.255.42.138"];

let partitions = ["WWWELASTIC"];

ovh.request('GET', "/me" , function (err, data) {
    console.log(err || 'Me ' + JSON.stringify(data));
});

taskStatus(ovh);
vpsStatus(ovh, VPSs);
//vpsReinstall(ovh, VPSs);
//partitionAddAccess(ovh, partitions, IPs);
//partitionCreate(ovh, partitions);


