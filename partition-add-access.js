let partitionAddAccess = (ovh, partitions, IPs) => {

    partitions.forEach(function (element) {

        let partition = {
            "partitionName": "",
            "protocol": "NFS",
            "size": 10
        };

        partition.partitionName = element;

        IPs.forEach(function (ipelement) {

            let ip = {
                "ip": "",
                "type": "readwrite"
            };

            ip.ip = ipelement;

            console.log(`/dedicated/nasha/zpool-126262/partition/${element}/access?ip=${ipelement}&type=readwrite`);            

            ovh.request('POST', `/dedicated/nasha/zpool-126262/partition/${element}/access`, Object.assign({}, ip), function (err, data) {
                console.log(("Err Add Access To Partition " + err + " " + ipelement) || 'Add Access To Partition ' + JSON.stringify(data));
            });
        });
    });
}

module.exports = partitionAddAccess;