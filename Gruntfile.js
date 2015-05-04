module.exports = function(grunt) {

  var srcFiles = ["lab1.js"];
  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true,
        esnext: true
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        esnext: true,
        // preset: "jquery",
        requireDotNotation: null,
        disallowMultipleVarDecl: null,
        requireMultipleVarDecl: null
      }
    },
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                "lab1t.js": "lab1.js"
            }
        }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks("grunt-babel");

  grunt.registerTask("default", [ "jshint", "jscs", "babel" ]);
  grunt.registerTask("transpile", [ "babel" ]);

};
