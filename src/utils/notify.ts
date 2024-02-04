import toast from "react-hot-toast";

export const successNotify = (message: string) => {
  toast.success(message);
};

export const errorNotify = (message: string) => {
  toast.error(message);
};

export const promiseNotify = (
  promise: Promise<any>,
  successMessage: string,
  errorMessage: string
) => {
  return promise
    .then(() => {
      successNotify(successMessage);
    })
    .catch((error) => {
      errorNotify(errorMessage);
      console.error(error);
    });
};
