function generateRandomNumericID() {
    const digits = '0123456789';
    const idLength = 6; 
    let randomID = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      randomID += digits.charAt(randomIndex);
    }
  
    return randomID;
  }

module.exports = generateRandomNumericID
