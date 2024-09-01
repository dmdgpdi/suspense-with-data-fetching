const getCatDateUrl = 'https://api.thecatapi.com/v1/images/search';
const getCatInfoUrl = (id: number) =>
  `https://meowfacts.herokuapp.com/?id=${id}&lang=kor-ko`;

export { getCatInfoUrl, getCatDateUrl };
