module.exports = function(grunt) {

  var srcFiles = ["lab1.js"];
  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        globalstrict: true,
        quotmark: false,
        smarttabs: true,
        trailing: true,
        undef: true,
        unused: true,
        // indent: 2,
        node: true
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        preset: "airbnb",
        requireMultipleVarDecl: null,
        validateQuoteMarks: true,
        disallowMultipleVarDecl: true
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.registerTask("default", [ "jshint", "jscs"]);

};
