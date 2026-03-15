pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo "Iniciando etapa Build..."
                bat 'echo "Compilación del proyecto simulada"'
            }
        }

        stage('Test') {
            steps {
                echo "Iniciando etapa Test..."
                bat 'echo "Ejecución de pruebas simuladas"'
            }
        }

        stage('Docker Build') {
            steps {
                echo "Construyendo imagen Docker..."
                bat 'docker build -t devops-app .'
            }
        }

        stage('Validar Imagen') {
            steps {
                echo "Validando imagen  creada..."
                bat 'docker images' 
            }
        }
    }
}