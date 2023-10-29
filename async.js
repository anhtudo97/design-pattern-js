function slowAddition(n1, n2) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(n1 + n2), 3000);
    setTimeout(() => {
      reject(new Error('Error!!! get newSalary'));
    }, 3000);
  });
}

async function increaseSalary(base, increase) {
  //   const newSalary = await slowAddition(base, increase);
  let newSalary;
  try {
    newSalary = await slowAddition(base, increase);
  } catch (error) {
    console.log(` Error get newSalary ${error.message}`);
    newSalary *= 2
  }
 
  console.log(newSalary);

  return newSalary;
}

increaseSalary(1000, 100)
  .then((newSalary) => console.log(newSalary))
  .catch((error) => console.log(error));
