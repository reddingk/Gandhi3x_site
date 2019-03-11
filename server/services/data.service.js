var path = require('path');
var util = require('util');

var database = require('../config/database');
var mongoClient = require('mongodb').MongoClient;

var data = {
    getAlbums:function(req,res){ 
        var response = {"errorMessage":null, "results":null};
        try {
            getAlbumsByDate(function(res){
                res.status(200).json(res);
            });
        }        
        catch(ex){
            response.errorMessage = "[Error]: Error getting albums: "+ex;
            console.log(response.errorMessage);
            res.status(200).json(response);
        }
    },
    getSongs:function(req,res){ 
        var response = {"errorMessage":null, "results":null};
        try {
            getSongsByDate(function(res){
                res.status(200).json(res);
            });
        }        
        catch(ex){
            response.errorMessage = "[Error]: Error getting songs: "+ex;
            console.log(response.errorMessage);
            res.status(200).json(response);
        }
    },
    getMixtapes:function(req,res){ 
        var response = {"errorMessage":null, "results":null};
        try {
            getMixtapesByDate(function(res){
                res.status(200).json(res);
            });
        }        
        catch(ex){
            response.errorMessage = "[Error]: Error getting mixtapes: "+ex;
            console.log(response.errorMessage);
            res.status(200).json(response);
        }
    },
    getVideos:function(req,res){ 
        var response = {"errorMessage":null, "results":null};
        try {
            getVideosByDate(function(res){
                res.status(200).json(res);
            });
        }        
        catch(ex){
            response.errorMessage = "[Error]: Error getting videos: "+ex;
            console.log(response.errorMessage);
            res.status(200).json(response);
        }
    },
    getEvents:function(req,res){ 
        var response = {"errorMessage":null, "results":null};
        try {
            getEventsByDate(function(res){
                res.status(200).json(res);
            });
        }        
        catch(ex){
            response.errorMessage = "[Error]: Error getting events: "+ex;
            console.log(response.errorMessage);
            res.status(200).json(response);
        }
    },
    getLatest:function(req,res){ 
        var response = {"errorMessage":null, "results":null};
        var itemList = [];
        try {
            // Events-Songs-Albums-Videos
            getEventsByDate(function(res){
                if(res.results){
                    var tmpList = res.results.map(function(item){ return { class:'event', content: item }});
                    itemList = itemList.concat(tmpList);
                }
                getSongsByDate(function(res){
                    if(res.results){
                        var tmpList = res.results.map(function(item){ return { class:'song', content: item }});
                        itemList = itemList.concat(tmpList);
                    }
                    getAlbumsByDate(function(res){
                        if(res.results){
                            var tmpList = res.results.map(function(item){ return { class:'album', content: item }});
                            itemList = itemList.concat(tmpList);
                        }
                        getVideosByDate(function(res){
                            if(res.results){
                                var tmpList = res.results.map(function(item){ return { class:'video', content: item }});
                                itemList = itemList.concat(tmpList);
                            }

                            response.results = itemList.slice(0,7);
                            res.status(200).json(response);
                        });
                    });
                });
            });
        }        
        catch(ex){
            response.errorMessage = "[Error]: Error getting latest: "+ex;
            console.log(response.errorMessage);
            res.status(200).json(response);
        }
    }
};

module.exports = data;

/* Private Methods */
/* Get Albums by Date */
function getAlbumsByDate(callback){
    var response = {"errorMessage":null, "results":null};
    try {
        mongoClient.connect(database.remoteUrl, database.mongoOptions, function(err, client){
            if(err) {
                response.errorMessage = err;
                callback(response);
            }
            else {  
                const db = client.db(database.dbName).collection('albums');

                db.find().sort({date: -1}).toArray(function(err, res){
                    if(res == null || res == undefined) { response.errorMessage = "Unable get list";}
                    else { response.results = res;}

                    callback(response);
                });
            }
        });
    }
    catch(ex){
        response.errorMessage = "Error getting album list: " + ex;
        callback(response);
    }
}

/* Get Song by Date */
function getSongsByDate(callback){
    var response = {"errorMessage":null, "results":null};
    try {
        mongoClient.connect(database.remoteUrl, database.mongoOptions, function(err, client){
            if(err) {
                response.errorMessage = err;
                callback(response);
            }
            else {  
                const db = client.db(database.dbName).collection('songs');

                db.find().sort({date: -1}).toArray(function(err, res){
                    if(res == null || res == undefined) { response.errorMessage = "Unable get list";}
                    else { response.results = res;}

                    callback(response);
                });
            }
        });
    }
    catch(ex){
        response.errorMessage = "Error getting song list: " + ex;
        callback(response);
    }
}

/* Get Mixtapes by Date */
function getMixtapesByDate(callback){
    var response = {"errorMessage":null, "results":null};
    try {
        mongoClient.connect(database.remoteUrl, database.mongoOptions, function(err, client){
            if(err) {
                response.errorMessage = err;
                callback(response);
            }
            else {  
                const db = client.db(database.dbName).collection('mixtapes');

                db.find().sort({date: -1}).toArray(function(err, res){
                    if(res == null || res == undefined) { response.errorMessage = "Unable get list";}
                    else { response.results = res;}

                    callback(response);
                });
            }
        });
    }
    catch(ex){
        response.errorMessage = "Error getting mixtapes list: " + ex;
        callback(response);
    }
}

/* Get Events by Date */
function getEventsByDate(callback){
    var response = {"errorMessage":null, "results":null};
    try {
        mongoClient.connect(database.remoteUrl, database.mongoOptions, function(err, client){
            if(err) {
                response.errorMessage = err;
                callback(response);
            }
            else {  
                const db = client.db(database.dbName).collection('events');

                db.find().sort({date: -1}).toArray(function(err, res){
                    if(res == null || res == undefined) { response.errorMessage = "Unable get list";}
                    else { response.results = res;}

                    callback(response);
                });
            }
        });
    }
    catch(ex){
        response.errorMessage = "Error getting events list: " + ex;
        callback(response);
    }
}

/* Get Events by Date */
function getVideosByDate(callback){
    var response = {"errorMessage":null, "results":null};
    try {
        mongoClient.connect(database.remoteUrl, database.mongoOptions, function(err, client){
            if(err) {
                response.errorMessage = err;
                callback(response);
            }
            else {  
                const db = client.db(database.dbName).collection('videos');

                db.find().sort({date: -1}).toArray(function(err, res){
                    if(res == null || res == undefined) { response.errorMessage = "Unable get list";}
                    else { response.results = res;}

                    callback(response);
                });
            }
        });
    }
    catch(ex){
        response.errorMessage = "Error getting video list: " + ex;
        callback(response);
    }
}
