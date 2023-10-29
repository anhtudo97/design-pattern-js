const promise = function asyncOperation(name) {
  return new Promise((resolve, reject) => {
    resolve(name);
  });
};

promise('tuanh').then((name) => console.log(name));
