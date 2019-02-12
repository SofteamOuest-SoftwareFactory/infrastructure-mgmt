let vpsReinstall = (ovh, VPSs) => {

    VPSs.forEach(function (element) {
        //console.log(`/vps/${element}/reinstall`);

        let params = {
            doNotSendPassword: true,
            sshKey: ["mehdi"],
            templateId: 143431
        };       

        ovh.request('POST', `/vps/${element}/reinstall`, params, function (err, data) {
            console.log(err || 'Reinstall ' + JSON.stringify(data));
        });
    });
}

module.exports = vpsReinstall;
