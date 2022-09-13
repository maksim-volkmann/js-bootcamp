import birdModel from "../models/birdModel.js";

export const createBird = async (req, res) => {
  try {
    const newBird = new birdModel({
      ...req.body,
    });
    await newBird.save();
    res.status(201).send("New Bird is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllBirds = async (req, res) => {
  try {
    const allBirds = await birdModel.find({}, { password: 0 });

    res.status(202).json(allBirds);
  } catch (error) {
    console.error(error);
  }
};

export const getBirdById = async (req, res) => {
  try {
    const Bird = await birdModel.findById(req.params.id);
    const { password, ...remainingBirdData } = Bird._doc;
    res.status(200).json(remainingBirdData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteBirdById = async (req, res) => {
  try {
    await birdModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Bird has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllBirds = async (req, res) => {
  try {
    await birdModel.deleteMany({ BirdName: req.body.BirdName });
    res.status(200).send(`all Birds has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateBird = async (req, res) => {
  try {
    const updatedBird = await birdModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedBird);
  } catch (error) {
    console.error(error);
  }
};
