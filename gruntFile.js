module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: "dist/ng-emoticon.map"
            },
            target: {
                src: "ng-emoticon.js",
                dest: "dist/ng-emoticon.min.js"
            }
        },
        cssmin:{
        	minify:{
        		expand:true,
        		src:["ng-emoticons.css"],
        		dest:"dist/",
        		ext:".min.css"
        	}
        },
         jshint: {
            options: {
                eqeqeq: false,
                curly: true,
                undef: false,
                unused: true
            },
            target: {
                src: "ng-emoticon.js"

            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.registerTask('default', ["jshint","uglify","cssmin"]);
};
