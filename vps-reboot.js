let vpsReboot = (ovh, VPSs) => {

    VPSs.forEach(function (element) {
        //console.log(`/vps/${element}/reinstall`);

        ovh.request('POST', `/vps/${element}/reboot`, function (err, data) {
            console.log(err || 'VPS Status ' + JSON.stringify(data));
        });
    });
}

module.exports = vpsReboot;
