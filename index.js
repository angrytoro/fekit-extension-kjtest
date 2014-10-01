syspath = require('path');
spawn = require('child_process').spawn;
server = require('karma').server;

exports.usage = "基于karma和jasmine的测试命令";

exports.set_options = function(optimist) {

	optimist.alias('i', 'init');
	optimist.describe('i', '初始化配置文件karma.conf.js');
	return optimist;
};

/**
 * create karam.conf.js file
 * @return {[type]} [description]
 */
initConfig = function() {

};
exports.run = function(options) {

	if (options.init) {
		initConfig();
	} else {
		server.start({
			cmd: 'start',
			configFile: syspath.join(options.cwd, 'karma.conf.js')
			// configFile: syspath.resolve('./karma.conf.js')
		});
	}
};
