import * as path from "path"
import mkdirp from "mkdirp"
import BuildStage from "./../buildStage"

import metadata from "./../metadata"
import createDistDirectory from "./../createDistDirectory"

class CreateBundleContentDirectoryBuildStage extends BuildStage {
  constructor() {
    super(`macos/createBundleContentDirectory`, [metadata, createDistDirectory], false)
  }

  performStart() {
    mkdirp(path.join(`dist`, `macos`, `${metadata.json.applicationName}.app`, `Contents`), error => this.handle(error, () => this.done()))
  }
}

export default new CreateBundleContentDirectoryBuildStage()