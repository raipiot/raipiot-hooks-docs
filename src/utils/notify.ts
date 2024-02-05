import toast from "react-hot-toast";

export const successNotify = (message: string) => {
  toast.success(message);
};

export const errorNotify = (message: string) => {
  toast.error(message);
};

export const promiseNotify = async <T>(
  promise: Promise<any>,
  successMessage?: string,
  errorMessage?: string
): Promise<T> => {
  toast.loading("Waiting...");
  try {
    const result = await promise;
    toast.dismiss();
    toast.success(result.message ?? successMessage);
    return result;
  } catch (error) {
    toast.dismiss();
    toast.error(errorMessage ?? error);
    throw error;
  }
};