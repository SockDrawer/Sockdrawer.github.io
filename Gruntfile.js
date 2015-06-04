module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      mkdocs: {
        dist: {
          src: '.',
          options: {
            clean: true
          }
        }
      },
      'gh-pages': {
    		options: {
    			// The default commit message for the gh-pages branch
    			base: 'site',
    			message: 'push documentation automatically',
    			repo: 'https://' + process.env.GH_TOKEN + '@github.com/SockDrawer/SockDrawer.github.io',
    			branch: 'master'
    		},
    		src: "**"
    	}
  });

  grunt.loadNpmTasks('grunt-mkdocs');
  
  grunt.loadNpmTasks('grunt-git');

  // Default task(s).
  grunt.registerTask('build', ['mkdocs', 'gitadd', 'gitcommit']);

};