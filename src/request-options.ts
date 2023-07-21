let myHeaders = new Headers();
myHeaders.append("Authorization", `apikey ${import.meta.env.MAILCHIMP_API_KEY}`);

export const requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
