API = {
    apps: [],
    links: [],
    extensionWithOptions: [],
    other: [],

    load: function(callback) {
        chrome.management.getAll(function(list) {
            console.log(list);
            for (var i in list) {
                var app = list[i];
                if (app.icons) app.icon = app.icons[app.icons.length - 1].url; //.replace('chrome://','');
                else app.icon = '';
                if (app.type == 'packaged_app') API.apps.push(app);
                else if (app.type == 'hosted_app') API.links.push(app);
                else if (app.optionsUrl) API.extensionWithOptions.push(app);
                else API.other.push(app);
            }
            API.apps.sort(API.sortByName);
            API.links.sort(API.sortByName);
            API.extensionWithOptions.sort(API.sortByName);
            if (callback) callback();
        });
    },


    sortByName: function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    }
}



// else if (app.type == 'legacy_packaged_app') links.push(app);
// else if (app.type == 'hosted_app') links.push(app); //$scope.links.push(app);


// app.icon2 = "<img src='"+app.icon+"'/>";
// console.log(app.appLaunchUrl);
// if(app.offlineEnabled) $scope.offline.push(app); //  && app.type=='packaged_app'