import dogModel from "../models/dogModel.js";

export const createDog = async (req, res) => {
  console.log("here");
  try {
    const newDog = new dogModel({
      ...req.body,
    });
    await newDog.save();
    res.status(201).send("New Dog is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllDogs = async (req, res) => {
  try {
    const allDogs = await dogModel.find({}, { password: 0 });

    res.status(202).json(allDogs);
  } catch (error) {
    console.error(error);
  }
};

export const getDogById = async (req, res) => {
  try {
    const Dog = await dogModel.findById(req.params.id);
    const { password, ...remainingDogData } = Dog._doc;
    res.status(200).json(remainingDogData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteDogById = async (req, res) => {
  try {
    await dogModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Dog has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllDogs = async (req, res) => {
  try {
    await dogModel.deleteMany({ DogName: req.body.DogName });
    res.status(200).send(`all Dogs has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateDog = async (req, res) => {
  try {
    const updatedDog = await dogModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedDog);
  } catch (error) {
    console.error(error);
  }
};
