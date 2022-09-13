import catModel from "../models/catModel.js";

export const createCat = async (req, res) => {
  try {
    const newCat = new catModel({
      ...req.body,
    });
    await newCat.save();
    res.status(201).send("New Cat is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllCats = async (req, res) => {
  try {
    const allCats = await catModel.find({}, { password: 0 });

    res.status(202).json(allCats);
  } catch (error) {
    console.error(error);
  }
};

export const getCatById = async (req, res) => {
  try {
    const Cat = await catModel.findById(req.params.id);
    const { password, ...remainingCatData } = Cat._doc;
    res.status(200).json(remainingCatData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteCatById = async (req, res) => {
  try {
    await catModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Cat has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllCats = async (req, res) => {
  try {
    await catModel.deleteMany({ CatName: req.body.CatName });
    res.status(200).send(`all Cats has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateCat = async (req, res) => {
  try {
    const updatedCat = await catModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCat);
  } catch (error) {
    console.error(error);
  }
};
