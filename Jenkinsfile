pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t jenkins-node-app .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker rm -f jenkins-container || true'
                sh 'docker run -d -p 4000:3000 --name jenkins-container jenkins-node-app'
            }
        }
    }
}
