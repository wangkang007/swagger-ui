// import StandaloneLayout from "./layout"
import ParentLayout from "./parentLayout"
import TopbarPlugin from "plugins/topbar"
import ConfigsPlugin from "plugins/configs"

// the Standalone preset

let preset = [
  TopbarPlugin,
  ConfigsPlugin,
  () => {
    return {
      components: { ParentLayout }
    }
  }
]

module.exports = preset
