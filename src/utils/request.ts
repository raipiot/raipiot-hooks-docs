export const request = async (url: string, options?: RequestInit) => {
  try {
    const resp = await fetch(
      url,
      Object.assign(
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        options
      )
    );
    if (resp.status !== 200) {
      return Promise.reject(await resp.text());
    }
    return resp.json();
  } catch (error) {
    console.error("Error fetching data", error);
    return Promise.reject(error);
  }
};
