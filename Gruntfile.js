module.exports = function(grunt) {

//  watch it here: https://www.youtube.com/watch?v=TMKj0BxzVgw
//  to check if the grunt is working, uncomment the codes below

//  grunt.registerTask('speak', function () {
//      console.log("I'm speaking");
//  });
//
//  grunt.registerTask('yell', function () {
//      console.log("I'm yelling");
//  });
//
//  grunt.registerTask('default', ['speak', 'yell']);

  grunt.initConfig({ // grunt config holds all configurations to all of our tasks
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
    watch: {
      js: {
        files: ['js/**/*.js'], // means that any file that ends in .js within the ANY subfile directory of js will do the task below..
        tasks: ['concat'], // doing the concat task will make sure that in every file changes concat will be done for all js files.
      },
      css: {
        files: ['css/**/*.css'], // means that any file that ends in .js within the ANY subfile directory of js will do the task below..
        tasks: ['concat'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat'); // grunt predefined task, the grunt-contrib-concat will look into the concat defintion/configuration to what to do
  grunt.loadNpmTasks('grunt-contrib-watch'); // with this plugin, it will going to watch the file system changes.
  grunt.registerTask('default', ['concat', 'watch']);

}; //end of module exports