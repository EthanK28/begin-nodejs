setTimeout(function () {
  console.log('5 seconds passed. Exiting');
}, 5000);
console.log('Started. Willl exit in 5 second ');

process.on('SIGINT', function () {
  console.log('Got SIGNT. Ignoring');
});
