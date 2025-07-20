import Auth from "../models/authmodule.js";

export const getAllAdmin = (req, res) => {
    res.send('Get All the Admin')
};

export const createNewAdmin = async (req, res) => {
  try {
    const { fname, phone } = req.body;

    const image = req.files.image?.[0]?.path;
    const document = req.files.document?.[0]?.path;

    const newAdmin = new Auth({
      fname,
      phone,
      image,
      document
    });

    await newAdmin.save();

    res.status(201).json({
      error: false,
      message: "Admin created successfully",
      data: newAdmin,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error creating admin",
      error: error.message,
    });
  }
};

export const updateAdmin = (req,res)=>{
    res.send("update new Admin")
}