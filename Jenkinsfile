pipeline {
    agent any
    stages {
        stage("Install dependencies") {
            step {
                sh "npm install"
            }
        }
        stage("Build") {
            step {
                sh "npm run lint"
                sh "npm run build"
            }
        }
        stage("Test") {
            step {
                sh "npm run test"
            }
        }
        stage("Deploy") {
            step {
                sh "node ./dist/main.js"
            }
        }

    }
}