pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-docker-registry'
        FRONTEND_IMAGE = 'frontend'
        BACKEND_IMAGE = 'backend'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t ${DOCKER_REGISTRY}/${FRONTEND_IMAGE}:${BUILD_NUMBER} .'
                }
            }
        }
        
        stage('Build Backend') {
            steps {
                dir('backand-api') {
                    sh './mvnw clean package -DskipTests'
                    sh 'docker build -t ${DOCKER_REGISTRY}/${BACKEND_IMAGE}:${BUILD_NUMBER} .'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker push ${DOCKER_REGISTRY}/${FRONTEND_IMAGE}:${BUILD_NUMBER}'
                sh 'docker push ${DOCKER_REGISTRY}/${BACKEND_IMAGE}:${BUILD_NUMBER}'
                
                // EC2에서 실행할 명령어
                sshagent(['ec2-key']) {
                    sh '''
                        ssh ec2-user@your-ec2-host "docker pull ${DOCKER_REGISTRY}/${FRONTEND_IMAGE}:${BUILD_NUMBER}"
                        ssh ec2-user@your-ec2-host "docker pull ${DOCKER_REGISTRY}/${BACKEND_IMAGE}:${BUILD_NUMBER}"
                        ssh ec2-user@your-ec2-host "docker-compose up -d"
                    '''
                }
            }
        }
    }
} 