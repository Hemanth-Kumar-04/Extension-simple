const vscode = require('vscode');

function activate(context) {
    console.log('Congratulations, your extension "activate-umg" is now active!');

    let disposable = vscode.commands.registerCommand('activate-umg.activateUMG', function () {
        const panel = vscode.window.createWebviewPanel(
            'umgPanel',
            'UMG Panel',
            vscode.ViewColumn.One,
            {}
        );

        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UMG Panel</title>
    </head>
    <body>
        <button onclick="submit()">Submit</button>
        <script>
            const vscode = acquireVsCodeApi();
            function submit() {
                vscode.postMessage({ command: 'submit' });
            }
        </script>
    </body>
    </html>`;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
