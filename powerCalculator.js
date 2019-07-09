const powerCalculator = (b, e) => {
  console.log(`this is b,${b},this is e, ${e}`);
  if (e === 0) {
    return 1;
  }
  console.log("calling myself...");
  return b * powerCalculator(b, e - 1);
};

console.log(powerCalculator(2, 5));
