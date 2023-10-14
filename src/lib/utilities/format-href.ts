const formatHref = (str: string): string => {
	return str.replace(/\.md$/, '');
};

export default formatHref;
