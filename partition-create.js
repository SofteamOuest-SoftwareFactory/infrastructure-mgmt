let partitionCreate = (ovh, partitions) => {

    partitions.forEach(function (element) {

        let partition = {
            "partitionName": "",
            "protocol": "NFS",
            "size": 10
        };

        partition.partitionName = element;

        //console.log(partition);

        ovh.request('POST', '/dedicated/nasha/zpool-126262/partition', partition, function (err, data) {
            console.log((err + element) || 'Create Partition ' + JSON.stringify(data));
        });
    });
}

module.exports = partitionCreate;