module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			project: {
				expand: true,
				cwd:'src',
				src:['**', '!public/style/*.scss'],
				dest: 'dist'
			}
		},
		clean: {
			dist: {
				src: 'dist'
			}
		},
		sass: {
    		dist: {
    			options : { style : 'compressed' },
      			files: [{
        			expand: true,
        			cwd: 'src/public/style',
        			src: ['*.scss'],
        			dest: 'dist/public/style',
        			ext: '.css'
      			}]
    		}
		},
		connect: {
    		server: {
      			options: {
        			port: 8000,
        			base: 'dist',
        			index: 'public/index.html'

      			}
    		}	
  		}
	});

	grunt.registerTask('default',['clean', 'copy', 'sass', 'connect']);
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
};