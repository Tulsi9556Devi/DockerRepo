pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                bat 'docker build -t jenkins-node-app .'
            }
        }

        stage('Run') {
            steps {
                bat 'docker rm -f jenkins-container || exit 0'
                bat 'docker run -d -p 4000:3000 --name jenkins-container jenkins-node-app'
            }
        }
    }
}
