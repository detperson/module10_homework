let random0_100 = Math.random() * 100;

if (random0_100 >= 10){
  let randomString10_100 = String(random0_100);
  console.log(randomString10_100.slice(0 , 2));
} else {
  let randomString0_10 = String(random0_100);
  console.log(randomString0_10.slice(0 , 1));
}