# Swift Prerequisites #

## Dependencies ##
Below tools should be installed on your Mac

### xcode-select ###
    xcode-select --install
    
### OCLint ###
    brew cask uninstall oclint
    brew tap oclint/formulae
    brew install oclint

### xcpretty ###
    sudo gem install xcpretty
    
### slather ###
    sudo gem install slather
    
### sonar-scanner ###
    brew install sonar-scanner

### swiftlint ###
    brew install swiftlint


# Swift Run Script #
1. Install all dependencies from above
2. Configure `sh Mac/SampleProject/sonar-project.properties` according to your project
3. Run server `sh Mac//SonarQubeBundle/Server/bin/macosx-universal-64/sonar.sh`
4. Run script `sh Mac/SampleProject/run-sonar-swift.sh`

You can replace SampleProject with your own project after understanding the flow

## Output ##
<p>
<img src="https://github.com/hissain/sonarqube-bundle/blob/master/Figures/summary.png" alt="SonarQube Summary" width="800"/>
    
<p>
<img src="https://github.com/hissain/sonarqube-bundle/blob/master/Figures/detail.png" alt="SonarQube Details" width="800"/>

