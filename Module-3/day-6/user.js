class User {
  constructor(dataFromGithub) {
    this.login = dataFromGithub.login
    this.name = dataFromGithub.name
  }

  greeting() {
    return `Bonjour, my name is ${this.login}`
  }
}
