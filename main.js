var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

var additionalOptions = {
    start_at_end: false,
    height:1000,
    hash_bookmark: true,
    timenav_height: 100,
}


getJSON('langs/hy.json',
    function (err, data) {
        if (err !== null) {
            console.log(data);
            alert('Something went wrong: ' + err);
        } else {
            
            var timeline_json = data;
            timeline = new TL.Timeline('timeline-embed', timeline_json, additionalOptions);

        }
    });



