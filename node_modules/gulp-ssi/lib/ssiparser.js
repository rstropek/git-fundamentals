var fs = require('fs'),
    path = require('path'),
    filter = require('lodash.filter'),
    fileCache = []

// Helper which gets a file content
function getFile (filepath) {
    var fileObj = {
        path: filepath,
        content: null
    }
    try {
        fs.accessSync(filepath, fs.F_OK)
    } catch (e) {
        console.log(e.message)
        return fileObj
    }
    fileObj.content = fs.readFileSync(filepath, 'utf-8').trim()
    return fileObj
}

function getCacheIndex (filepath) {
    var i, len
    for (i = 0, len = fileCache.length; i < len; i += 1) {
        if (fileCache[i].path === filepath) {
            return i
        }
    }
    return -1
}

function setFileCache (filepath) {
    var file = getFile(filepath),
        index = fileCache.length

    fileCache.push(file)
    return index
}
function getAbsoluteLink(root, target){
    var parts = root.split('/')
    if (root.startsWith('.'))
        return path.join(`${parts[0]}/${parts[1]}/`, target)

    return path.join(root, target)
}
function getFilePath (prefix, customRoot, target) {
    var realPrefix  = customRoot?customRoot:prefix;
    if (target.startsWith('/')) {
        var parts = realPrefix.split('/')
        if (realPrefix.startsWith('.'))
            return path.join(`${parts[0]}/${parts[1]}/`, target)
        return path.join(realPrefix, target)
    }
    if (target.startsWith('.')){
        if(!customRoot)
            return path.resolve(realPrefix, target)
        else
            return path.join(realPrefix, trimRelativePaths(target))
    }
    return path.join(realPrefix, target)
}

function sync (text, fileBase, customRoot, clearCache) {
    var list, index, file, filepath, parsedPath,
        includeRE = /<!--#\s*include((?:\s+\w+="[^"]*")+)\s*-->/gi
        pathRE = /(?:virtual|file)="([^"]*)"/i

    if (clearCache) {
        fileCache = []
    }

    while ((list = includeRE.exec(text)) !== null) {
        if (list.index === includeRE.lastIndex) {
            includeRE.lastIndex += 1
        }
        parsedPath = pathRE.exec(list[1])
        if (parsedPath[1]) {
            filepath = getFilePath(fileBase, customRoot, parsedPath[1])
            index = getCacheIndex(filepath)

            if (index < 0) {
                index = setFileCache(filepath)
            }
            file = fileCache[index]
            if (typeof file.content === 'string') {
                text = text.replace(new RegExp(list[0], 'gi'), file.content)
            }
        }
    }
    return text
}

module.exports = function (text, fileBase, customRoot, clearCache) {
    var lastArgument = arguments[arguments.length - 1],
        cb = typeof lastArgument === 'function' ? lastArgument : null,
        data = sync(text, fileBase, customRoot, clearCache)

    if (cb) {
        if (data instanceof Error) {
            cb(data)
        } else {
            cb(null, data)
        }
    }
}

function trimRelativePaths(path) {
    return filter(path.split('/'), function(each) {
        return each.indexOf('.') !==0;
    }).join('/')
}

module.exports.sync = sync

