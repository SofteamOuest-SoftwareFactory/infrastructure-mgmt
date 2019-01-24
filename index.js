#!/usr/bin/env node
'use strict';
var program = require('commander');

var ovh = require('ovh')({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    consumerKey: process.env.CONSUMER_KEY
});

var vpsStatus = require('./vps-status');
var vpsReinstall = require('./vps-reinstall');
var vpsReboot = require('./vps-reboot');
var partitionCreate = require('./partition-create');
var partitionAddAccess = require('./partition-add-access');
var taskStatus = require('./task-status');


let VPSs = [
    "vps242131.ovh.net",
    "vps242130.ovh.net",
    "vps257315.ovh.net",
    "vps568063.ovh.net",
    "vps568065.ovh.net"];

let IPs = ["149.202.62.97",
    "149.202.62.219",
    "51.255.42.138",
    "51.38.238.172",
    "51.38.238.181"];

let partitions = ["WWWELASTIC",
    "WWWLOGSTASH",
    "WWWSONARQUBE",
    "WWWJENKINS",
    "WWWNEXUS"];

program
    .version('0.1.0')
    .description('OVH Infrastructure Management')
    .option('-gs, --gs', 'Get Me Status')
    .option('-ts, --ts', 'Task Status')
    .option('-vs, --vs', 'VPS Status')
    .option('-vr, --vr', 'VPS Reinstall')
    .option('-vb, --vb', 'VPS Reboot')
    .option('-pc, --pc', 'Partition Create')
    .option('-pa, --pa', 'Partition Add Access')
    .parse(process.argv);

if (program.gs) {
    ovh.request('GET', "/me", function (err, data) {
        console.log(err || JSON.stringify(data));
    });
}

if (program.ts) {
    taskStatus(ovh);
}

if (program.vs) {
    vpsStatus(ovh, VPSs)
}

if (program.vr) {
    vpsReinstall(ovh, VPSs)
}

if (program.vb) {
    vpsReboot(ovh, VPSs)
}

if (program.pc) {
    partitionCreate(ovh, partitions)
}

if (program.pa) {
    partitionAddAccess(ovh, partitions, IPs)
}

