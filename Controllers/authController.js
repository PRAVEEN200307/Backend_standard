import Auth from "../models/authmodule.js";

export const getAllAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    // console.log(re);

    if (id) {
      // Fetch single admin by ID
      const singleAdmin = await Auth.findById(id);
      if (!singleAdmin) {
        return res.status(404).json({ msg: "Admin not found" });
      }
      return res.status(200).json(singleAdmin);
    }

    // Fetch all admins
    const admins = await Auth.find();
    return res.status(200).json(admins);

  } catch (err) {
    console.error("Error in getAllAdmin:", err);
    return res.status(500).json({ msg: err.message });
  }
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

export const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    let updatedAdmin = await Auth.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedAdmin) {
      return res.status(404).json({
        message: 'Admin not found',
        status: false
      });
    }

    res.status(200).json({
      message: 'Admin Updated Successfully',
      updatedAdmin,
      status: true
    });

  } catch (err) {
    console.error("Update Admin Error:", err);
    res.status(500).json({
      message: 'Failed to Update Admin',
      status: false,
      error: err.message
    });
  }
}


export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAdmin = await Auth.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Admin Deleted Successfully',
      deletedAdmin,
      status: true
    })
  }
  catch (err) {
    res.status(500).json({
      message: 'Failed to Delete Admin',
      status: false,
      error: err.message
    })
  }
}