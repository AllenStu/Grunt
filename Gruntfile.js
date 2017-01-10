module.exports = function(grunt) {

//  watch it here: https://www.youtube.com/watch?v=TMKj0BxzVgw
//  to check if the grunt is working, uncomment the codes below

  /* starts here */

  grunt.initConfig({ // grunt config holds all configurations to all of our tasks
    pkg:grunt.file.readJSON('package.json'),

    uglify : {
      build: {
        src: 'build/js/scripts.js',
        dest: 'build/js/scripts.min.js'
      }
    },

    beautifycode : {
      options: {
        beautify: true,
        mangle: false,
        compress: false,
        preserveComments: 'all'
      },
      src: 'build/js/scripts.min.js',
      dest: 'build/js/scripts.min.js'
    },

    concat: {
      js: {
        src:['js/1.js','js/2.js'],
        dest: 'build/js/scripts.js'
      },
      css: {
        src: ['css/main.css','css/theme.css'],
        dest: 'build/css/style.css'
      },
    },

    sass : {
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'build/css/style2.css' : 'scss/button.scss'
        }
      }
    },

    watch: {
      js: {
        files: ['js/**/*.js'], // means that any file that ends in .js within the ANY subfile directory of js will do the task below..
        tasks: ['concat'], // doing the concat task will make sure that in every file changes concat will be done for all js files.
      },
      css: {
        files: ['css/**/*.css'], // means that any file that ends in .js within the ANY subfile directory of js will do the task below..
        tasks: ['concat'],
      },
      scss : {
        files: ['workspace/scss/**/*.scss'],
        tasks: ['sass:dev'],
      },
    },


  });

  grunt.loadNpmTasks('grunt-contrib-concat'); // grunt predefined task, the grunt-contrib-concat will look into the concat defintion/configuration to what to do
  grunt.loadNpmTasks('grunt-contrib-watch'); // with this plugin, it will going to watch the file system changes.
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Loads uglify plugins
  grunt.loadNpmTasks('grunt-sass');  // loads sass plugins

//  grunt.registerTask('default', ['concat', 'uglify:build', 'sass:dev', 'watch']);
  grunt.registerTask('default', ['concat', 'uglify:build', 'sass:dev', 'watch']);
  //grunt.registerTask('default', ['concat', 'uglify:beautify-code', 'watch']); // beautifies the codes

}; //end of module exports