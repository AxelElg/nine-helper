import data from '../data/data.json';

const wordFinder = arr => {
	return data
		.filter(word => {
			const arrCopy = [...arr.join('')];
			return [...word].every(letter => {
				if (arrCopy.includes(letter)) {
					arrCopy.splice(arrCopy.indexOf(letter), 1);
					return true;
				}
			});
		})
		.sort((a, b) => b.length - a.length);
};

export default wordFinder;
