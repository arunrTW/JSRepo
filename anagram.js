const formatString = (str) => {
    return str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
};

const anagram = (str1, str2) => formatString(str1) === formatString(str2);

module.exports = anagram;