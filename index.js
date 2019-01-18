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

let VPSs = ["vps242130.ovh.net", 
    "vps242131.ovh.net",
    "vps242564.ovh.net", 
    "vps242565.ovh.net",
    "vps267690.ovh.net", 
    "vps267694.ovh.net", 
    "vps257315.ovh.net"];

let IPs = ["149.202.62.219", 
    "149.202.62.97", 
    "51.254.143.249", 
    "51.254.143.43",
    "92.222.81.117", 
    "51.255.200.197", 
    "51.255.42.138"];

let partitions = ["WWWELASTIC"];

if (false) ovh.request('GET', "/me", function (err, data) {
    console.log(err || 'Me ' + JSON.stringify(data));
});

program
    .version('0.1.0')
    .description('OVH Infrastructure Management')
    .option('-ts, --ts', 'Task Status')
    .option('-vs, --vs', 'VPS Status')
    .option('-vr, --vr', 'VPS Reinstall')
    .option('-vb, --vb', 'VPS Reboot')
    .option('-pc, --pc', 'Partition Create')
    .option('-pa, --pa', 'Partition Add Access')
    .parse(process.argv);

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

