const countfunc2 = (nb_min, nb_max, step) => {

  let startingNum = nb_min
  let array = []

  for (let i = nb_min; i < nb_max; i++) {

    if (startingNum < nb_max) {
      startingNum += step;
      array.push(startingNum)
    }
  }

  return array
}

console.log(countfunc2(2, 10, 2))