import * as core from '@actions/core'
import * as github from '@actions/github'
import artifact from '@actions/artifact'

const artifactName = core.getInput('artifactName');
artifact.deleteArtifact(artifactName).then((obj) =>{
    core.log(JSON.stringify(obj, undefined, 2));
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
    
    core.setOutput("time", "test");
}).catch(error => {
  core.setFailed(error.message)
})

