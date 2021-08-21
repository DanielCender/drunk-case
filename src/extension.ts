// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {
	TextDocument,
	Range
} from 'vscode';

function fullDocumentRange(document: TextDocument): Range {
    const lastLineId = document.lineCount - 1;
    return new Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
  }
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.workspace.onDidChangeTextDocument(e => {
		const docText = e.document.getText();
		e.document.fileName
		
		const result = Array.from(docText).map(e => e.toLocaleUpperCase() === e ? e.toLocaleLowerCase() : e.toLocaleUpperCase()).join('');
		vscode.TextEdit.replace(fullDocumentRange(e.document), result);
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
