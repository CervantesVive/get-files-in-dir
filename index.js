/*globals module, require */
(function (module, require) {
    'use strict';

    var fs = require('fs');
    var path = require('path');

    var _ = require('underscore');

    /**
     * Gets all files that follow the indicated pattern
     *
     * @param {String} dir
     * @param {boolean=} includeSubdirs - should it recurse into subdirectories? defaults to false
     * @param {Function=} predicate - applies the predicate to the found files to check for inclusion
     * @param {String[]=} queue - if provided, add matching files to the queue
     *
     * @returns {String[]} - array with full path of matching files
     */
    function getFilesInDir(dir, includeSubdirs, predicate, queue){
        if(!_.isString(dir)){
            throw new Error("FileUtil.getFilesInDir: Need to supply a directory.");
        }

        if(_.isUndefined(includeSubdirs) || !_.isBoolean(includeSubdirs)){
            includeSubdirs = false;
        }

        predicate = predicate || _.constant(true);

        queue = queue || [];

        var files = fs.readdirSync(dir);
        files.forEach(function(file){
            var fullPath = path.resolve(dir, file);
            var stat = fs.statSync(fullPath);
            if(stat.isFile(fullPath) && predicate(fullPath)){
                queue.push(fullPath);
                return;
            }

            if(stat.isDirectory() && includeSubdirs){
                getFilesInDir(fullPath, true, predicate, queue);
            }
        });
        return queue;
    }

    module.exports = getFilesInDir;
})(module, require);
