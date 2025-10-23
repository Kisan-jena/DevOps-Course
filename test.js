function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTest() {
  console.log('test starr');
  console.log('test will complete after  3 sec.......');
  await delay(3000); // waits 3 seconds
  console.log('test done');
}

function noEffect() {
  console.log("ghantaaaaa!!!!!!!!!! nhi farak padta mujhe")
}

runTest();
noEffect();