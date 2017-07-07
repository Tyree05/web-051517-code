class ListOfGists{
  constructor(data){
    this.gists = []

    /*
    let gistCreator = function(gistJSON){
      let newGist = new Gist(gistJSON)
      this.gists.push(newGist)
    }

    let gistCreatorBound = gistCreator.bind(this)
    data.forEach(gistCreatorBound)
    */

    data.forEach(gistJSON => {
      let newGist = new Gist(gistJSON)
      this.gists.push(newGist)
    })
  }

  render() {
    let outputHTML = "<ul>"
    this.gists.forEach(gist =>{
      outputHTML += gist.render()
    })
    outputHTML += "</ul>"
    return outputHTML

  }
}
