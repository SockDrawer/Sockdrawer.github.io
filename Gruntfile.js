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
      gitadd: {
		task: {
		  options: {
			all: true,
			cwd:"./site"
		  }
		}
	  },
	  gitcommit: {
		your_target: {
		  options: {
			cwd: "./site",
			message: "Automatic commit of built site.",
			allowEmpty: true
		  }
		}
	  }
  });

  grunt.loadNpmTasks('grunt-mkdocs');
  
  grunt.loadNpmTasks('grunt-git');

  // Default task(s).
  grunt.registerTask('build', ['mkdocs', 'gitadd']);

};