const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entre un premier nombre ', (nb1) => {
  console.log(`Votre premier nombre est : ${nb1}`);

  rl.question('Entre un second nombre ', (nb2) => {
    console.log(`Votre second nombre est : ${nb2}`);

nb1 = parseInt(nb1);
nb2 = parseInt(nb2);

    console.log('nb1 + nb2 = ', nb1+nb2);
    console.log('nb1 - nb2 = ', nb1-nb2);
    console.log('nb1 * nb2 = ', nb1*nb2);
    console.log('nb1 / nb2 = ', nb1/nb2);
    console.log('nb1 % nb2 = ', nb1%nb2);

  
    rl.close();
  });
});