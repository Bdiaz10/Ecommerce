import User from "../models/User";

// GET functions ----------------------------------
export const getAllUsers = (req: any, res: any) => {
 
  res.send("got all the users")
  // db and business logic
  console.log("all users route");
}

export const getUserById = (req: any, res: any) => {
  res.send("got user by id")
  // db and business logic
  console.log("user by id");
}

// POST functions ----------------------------------
export const createUser = (req: any, res: any) => {
  const name = req.body.name;
  console.log(req.body)
  res.send("user added " + name);
}

// DELETE functions ----------------------------------
export const deleteUser = (req: any, res: any) => {
  const userId = req.body.id;
  res.send("user deleted " + userId);
}