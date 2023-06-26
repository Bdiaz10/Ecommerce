
export const login = (req: any, res: any) => {
  res.send("Logging in !!!")
  // make sure user is in mongo
  // log them in with token, etc
}
export const logout = (req:any, res: any) => {
  // log out from session
  // return to sign in screen
  res.send("Loggin out!!")
}
export const register = (req:any, res:any) => {
  // add to mongo db
  // log in
  res.send("Registering a new user!")
}