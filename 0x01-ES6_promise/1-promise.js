export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: { success: true }
      });
    } else {
      reject('The fake API is not working currently');
    }
  });
}
