export const getUser = (req, res) => {
  res.json({ messsage: "Show all Users" });
};

export const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  res.status(200).json({ message: "show user by id", id: id });
};

export const createUser = async (req, res) => {
  const data = req.body;
  res.json({ message: "User create Successfull", data });
};

export const deleteUserByid = async (req, res) => {
  const id = Number(req.params.id);
  res.status(200).json({ message: "Delete user by id", id: id });
};
