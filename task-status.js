let taskStatus = (ovh) => {

    ovh.request('GET', "/status/task", function (err, data) {
        console.log(err || 'Task Status ' + JSON.stringify(data));
    });
}

module.exports = taskStatus;