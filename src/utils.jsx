// Check if user is login or not
export const isLoggedIn = () => !!localStorage.getItem('isLoggedIn'); 

//  Retrieve the Last visited Page from localStorage 
export const getLastPage = () => localStorage.getItem("lastPage") || "/page/1";