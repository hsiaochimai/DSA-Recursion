const countingSheep = function(num) {
  if (num === 0) {
    console.log(`All sheep jumped over the fence, ${num}`);
    return;
  }
  if (num > 0) {
    console.log(`another sheep jumps over the fence ${num}`);
  }
  countingSheep(num - 1);
  
};
let input = 3;
countingSheep(3);

