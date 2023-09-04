module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Compilar main.less --> main.css e comprimir main.less --> main.min.css
        less: {
            development: {
                files: {
                    './dev/styles/main.css': './source/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    './dist/styles/main.min.css': './source/styles/main.less'
                }
            }
        },
        //Comprimir e obfuscar main.js
        uglify: {
            target: {
                files: {
                    './prebuild/scripts/main.min.js': './source/scripts/main.js'
                }
            }
        },
        obfuscator: {
            task1: {
                files: {
                    './dist/scripts/main.min.js': [
                        './prebuild/scripts/main.min.js'
                    ]
                }
            }
        },
        //Clean prebuild
        clean: ['prebuild']
    })


    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-obfuscator')
    grunt.loadNpmTasks('grunt-contrib-clean')

    grunt.registerTask('default', ['less', 'uglify', 'obfuscator', 'clean'])
}