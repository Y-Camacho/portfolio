const d = document,
      $projectsContainer = d.querySelector(".projects-container"),
      $template = d.querySelector(".template").content,
      $fragment = d.createDocumentFragment();

const GITHUB_TOKEN = 'PRIVATE_TOKEN';

class Project {
    banner;
    repositoryName;
    description;
    tegnologies;
    repositoryUrl;
}

const projects = (async() => {
    try {
        let headers = {
            headers: {
            authorization: `token ${GITHUB_TOKEN}`,
            }
        }
        let respGithub = await fetch("https://api.github.com/user/repos", headers)
        let jsonProyects = await respGithub.json();

        console.log(jsonProyects)
    } catch (error) {
        console.log(error)
    }
})()

