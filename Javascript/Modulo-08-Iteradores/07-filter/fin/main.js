const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const smallNumbers = randomNumbers.filter(number => { return number < 250; })

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})