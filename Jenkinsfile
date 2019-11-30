pipeline {
    agent any
    stages {
        stage("Install dependencies") {
            steps {
                sh "npm install"
            }
        }
        stage("Build") {
            steps {
                sh "npm run lint"
                sh "npm run build"
            }
        }
        stage("Test") {
            steps {
                sh "npm run test"
            }
        }
        stage("Deploy") {
            steps {
                sh "node ./dist/main.js"
            }
        }

    }
}