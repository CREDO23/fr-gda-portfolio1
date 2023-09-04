export const getTokenFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('accessToken') as string) ;
}