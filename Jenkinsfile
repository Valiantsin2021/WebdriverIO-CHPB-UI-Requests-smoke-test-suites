pipeline {
    agent any

    stages {
        stage('Git download') {
            steps {
                git 'https://github.com/Valiantsin2021/WebdriverIO_CHBP_webapp.git'
            }
        }
        stage('Install') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'npm install'
            }
        }
        stage('Run UI/Functional positive/negative test suites with Chrome browser') {
            steps {
                bat encoding: 'ASCII', returnStatus: true, script: 'npm run run:github'
            }
        }
        stage('Generate allure report') {
            steps {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
        stage('Publish HTML report') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'allure-report', reportFiles: 'index.html', reportName: 'Allure Report', reportTitles: ''])
            }
        }
    }
}
