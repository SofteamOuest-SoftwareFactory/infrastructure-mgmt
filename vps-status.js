let vpsReinstall = (ovh, VPSs) => {

    VPSs.forEach(function (element) {
        //console.log(`/vps/${element}/reinstall`);

        ovh.request('GET', `/vps/${element}`, function (err, data) {
            console.log(err || 'VPS Status ' + JSON.stringify(data));
        });
    });
}

module.exports = vpsReinstall;
