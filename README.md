# sakiladb
demo of using many to many 


# debugging unit test in vs code 
add following to the debug configuration launch.json
 {
    // Name of configuration; appears in the launch configuration drop down menu.
    "name": "Run mocha",
    // Type of configuration. Possible values: "node", "mono".
    "type": "node",
    "request": "launch",
    // Workspace relative or absolute path to the program.
    "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
    // Automatically stop program after launch.
    "stopOnEntry": false,
    // Command line arguments passed to the program.
    "args": ["${workspaceRoot}/test/*.js"],
    // Workspace relative or absolute path to the working directory of the program being debugged. Default is the current workspace.
    "cwd": "${workspaceRoot}",
    // Workspace relative or absolute path to the runtime executable to be used. Default is the runtime executable on the PATH.
    "runtimeExecutable": null,
    // Environment variables passed to the program.
    "env": { "NODE_ENV": "development"}
}