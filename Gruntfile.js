module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    minifyJS: true,
                    minifyCSS: true
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
                options: {
                    keepSpecialComments: 0,
                    check: 'gzip'
                },
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
        uglify: {
            options: {
                mangle: false,
                preserveComments: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.js'],
                    dest: 'dist'
                }]
            }
        },
        imagemin: {
            options: {
                progressive: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.{png,jpg,gif,jpeg}'],
                    dest: 'dist'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.svg'],
                    dest: 'dist'
                }]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-imagemin')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify-es')
    grunt.loadNpmTasks('grunt-svgmin')

    grunt.registerTask('default', ['copy', 'imagemin', 'svgmin', 'htmlmin', 'cssmin', 'uglify'])
}
