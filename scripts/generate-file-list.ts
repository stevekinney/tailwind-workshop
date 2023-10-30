import { stat, readdir, writeFile } from 'fs/promises';
import path from 'path';

const directoryPath = './src/content';

try {
	const files = await readdir(directoryPath);
	const fileNames: string[] = [];

	for (const file of files) {
		if ((await stat(path.join(directoryPath, file))).isFile() && file.endsWith('.md')) {
			fileNames.push(file);
		}
	}

	// Extract file names without extensions
	const fileNamesWithoutExtensions = fileNames.map((fileName) => path.parse(fileName).name);

	// Create the TypeScript declaration file content
	const declarationContent = `type ContentFile = ${fileNamesWithoutExtensions
		.map((name) => `'${name}'`)
		.join(' | ')};`;

	// Write the declaration to a .d.ts file
	const declarationFilePath = path.join(directoryPath, 'content.d.ts');
	await writeFile(declarationFilePath, declarationContent);

	console.log(`TypeScript declaration file '${declarationFilePath}' has been created.`);
} catch (error) {
	console.error('Error generating TypeScript declaration:', error);
}
