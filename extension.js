'use strict';

const vscode = require('vscode');

exports.activate = context => {
    context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(doc => {
      if (doc) vscode.commands.executeCommand("editor.foldAllMarkerRegions");
    })
  );
}
