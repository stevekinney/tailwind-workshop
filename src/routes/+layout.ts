import type { LayoutLoad } from './$types';
import contents from './contents.yaml';

export const load: LayoutLoad = () => {
	return { contents };
};
