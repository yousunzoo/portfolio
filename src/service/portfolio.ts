import { readFile } from 'fs/promises';
import path from 'path';

export const getPortfolioData = async (fileName: string) => {
	const filePath = path.join(process.cwd(), 'data/projects', `${fileName}.md`);
	const content = await readFile(filePath, 'utf-8');

	return content;
};
