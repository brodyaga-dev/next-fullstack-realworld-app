const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

const basicOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchWrapper = async <T>(
  url: string,
  method: string = "GET",
  body?: any,
  options?: RequestInit
) => {
  const resp = await fetch(`${BASE_URL}${url}`, {
    ...basicOptions,
    method,
    ...options,
    body: body && JSON.stringify(body),
  });
  const data = await resp.json();
  if (resp.ok) {
    return data as T;
  } else {
    throw data.errors;
  }
};
