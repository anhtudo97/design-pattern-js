function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === 'a' ? resolve('resolve') : reject('reject');
    }, 2000);
  });
}

async function getData() {
  // Level 1
  //   try {
  //     let ret1 = await request('a');
  //   } catch (error) {}
  //   try {
  //     let ret2 = await request('b');
  //   } catch (error) {}
  //   try {
  //     let ret3 = await request('c');
  //   } catch (error) {}

  // Level 2
  //   let ret1 = await request('a')
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(`Error ret1::`, err));
  //   let ret2 = await request('b')
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(`Error ret2::`, err));
  //   let ret3 = await request('c')
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(`Error ret3::`, err));

  //Level 3
  //   let err, result;
  const [err1, result1] = await handlerRequest(request('a'));
  if (err1) console.log(`Error ret1::`, err1);
  const [err2, result2] = await handlerRequest(request('b'));
  if (err2) console.log(`Error ret2::`, err2);
  const [err3, result3] = await handlerRequest(request('c'));
  if (err3) console.log(`Error ret3::`, err3);
}

const handlerRequest = (promise) => {
  return promise
    .then((data) => [undefined, data])
    .catch((err) => [err, undefined]);
};

getData()
