var path = require('path'),
    PluginError = require('plugin-error');
	through = require('through2'),
	ssiparser = require('./lib/ssiparser');

var PLUGIN_NAME = 'gulp-ssi';

module.exports = function (options={}) {
	let freshRun = true;
	return through.obj(function (file, enc, cb) {
		const self = this
		const cfg = path.parse(path.relative(file.base, file.path));
		cfg.root = path.relative(file.cwd, file.base);
		cfg.realPath = path.join(cfg.root, cfg.dir)

		if (file.isStream()) {
			this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
			return cb();
		}

		if (file.isNull()) {
			return cb();
		}
		ssiparser(file.contents.toString(), cfg.realPath , options.root, freshRun, function (err, data) {
			if (err) {
				self.emit('error', new PluginError(PLUGIN_NAME, err, {fileName: file.path}));
				return cb();
			}

			if (data) {
				if (file.isBuffer()) {
					file.contents = Buffer.from(data);
				}
				self.push(file);
			}

			cb();
		});

		freshRun = false;
	});
};
