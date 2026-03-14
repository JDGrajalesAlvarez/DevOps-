pipeline {
    agent any
    stages {
        stage ('Build'){

            steps{
                echo "Etapa build no Disponible"
            }
        }

        stage('Test'){
            steps{
                echo "Estapa Test no Disponible"
            }
        }
        stage('Deploy'){
            steps{
                sh "docker-compose down -v"
                sh "docker-compose up -d --build"
            }
        }
    }
}