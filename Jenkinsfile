pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo "Iniciando etapa Build..."
                sh 'echo "Compilación del proyecto simulada"'
            }
        }

        stage('Test') {
            steps {
                echo "Iniciando etapa Test..."
                sh 'echo "Ejecución de pruebas simuladas"'
            }
        }

        stage('Docker Build') {
            steps {
                echo "Construyendo imagen Docker..."
                sh 'docker build -t devops-app .'
            }
        }

        stage('Validar Imagen') {
            steps {
                echo "Validando imagen creada..."
                sh 'docker images | grep devops-app'
            }
        }

    }
}