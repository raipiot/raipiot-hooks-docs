export const request = (url: string, options: RequestInit) => {
  return fetch(url, Object.assign({ method: "GET" }, options))
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
