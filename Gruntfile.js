module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.html'],
                    dest: 'dist'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.css'],
                    dest: 'dist'
                }]
            }
        },
        copy: {
            dist: {
                expand: true,
                cwd: 'public',
                src: ['**'],
                dest: 'dist'
            }
        },
//        uglify: {
//            options: {
//                mangle: false
//            },
//            dist: {
//                files: [{
//                    expand: true,
//                    cwd: 'public',
//                    src: ['**/*.js'],
//                    dest: 'dist'
//                }]
//            }
//        }
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-imagemin')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    // grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['copy', 'imagemin', 'htmlmin', 'cssmin'/*, 'uglify'*/])
}
