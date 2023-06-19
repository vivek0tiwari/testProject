async function  request<TResponse>(
  url: string,
  config: RequestInit = {} 
): Promise<TResponse> {
  try {
    const response = await fetch(url, config);
    return await response.json();
  }
  catch (error) {
    console.error(error)
    throw(error)
  }
}
export const APIModule = {
  get: <TResponse>(url: string) => request<TResponse>(url),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
};
