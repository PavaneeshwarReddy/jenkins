def pm = Jenkins.instance.pluginManager
def uc = Jenkins.instance.updateCenter

// Check update server status
pm.doCheckUpdatesServer()

// Plugins to install
def pluginsToInstall = ['git', 'workflow-aggregator', 'node']

// Install plugins if not already installed
pluginsToInstall.each { plugin ->
    if (!pm.getPlugin(plugin)) {
        try {
            def deployment = uc.getPlugin(plugin).deploy(true)
            deployment.get()
            println "Plugin '$plugin' installed successfully."
        } catch (Exception e) {
            println "Failed to install plugin '$plugin': ${e.message}"
        }
    } else {
        println "Plugin '$plugin' is already installed."
    }
}

// Restart Jenkins
try {
    Jenkins.instance.restart()
    println "Jenkins restarted."
} catch (Exception e) {
    println "Failed to restart Jenkins: ${e.message}"
}
