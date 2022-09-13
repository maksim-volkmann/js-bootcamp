import birdModel from "../models/birdModel.js";
import catModel from "../models/catModel.js";
import dogModel from "../models/dogModel.js";
import FavoritePlaceModel from "../models/favoritePlaceModel.js";

export const createfavoritePlace = async (req, res) => {
  try {
    const newFavoritePlace = new FavoritePlaceModel({
      ...req.body,
    });
    await newFavoritePlace.save();
    res.status(201).send("New favoritePlace is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllFavoritePlaces = async (req, res) => {
  try {
    const allFavoritePlaces = await FavoritePlaceModel.find();

    res.status(202).json(allFavoritePlaces);
  } catch (error) {
    console.error(error);
  }
};

export const getFavoritePlaceById = async (req, res) => {
  try {
    const FavoritePlace = await FavoritePlaceModel.findById(req.params.id);
    const { password, ...remainingFavoritePlaceData } = FavoritePlace._doc;
    res.status(200).json(remainingFavoritePlaceData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteFavoritePlaceById = async (req, res) => {
  try {
    await FavoritePlaceModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`FavoritePlace has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllFavoritePlaces = async (req, res) => {
  try {
    await FavoritePlaceModel.deleteMany({
      FavoritePlaceName: req.body.FavoritePlaceName,
    });
    res.status(200).send(`all FavoritePlaces has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateFavoritePlace = async (req, res) => {
  try {
    const updatedFavoritePlace = await FavoritePlaceModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedFavoritePlace);
  } catch (error) {
    console.error(error);
  }
};

export const getAnimalsByPlace = async (req, res) => {
  const animalModels = {
    ["bird"]: birdModel,
    ["cat"]: catModel,
    ["dog"]: dogModel,
  };
  try {
    const getFavoritePlace = await FavoritePlaceModel.findOne({
      place: req.params.placeName,
    });
    const animals = await Promise.all(
      getFavoritePlace.animal.map(async (animal) => {
        if (animal.entity === "dog") {
          return await dogModel.findById(animal.id);
        }
        if (animal.entity === "cat") {
          return await catModel.findById(animal.id);
        }
        if (animal.entity === "bird") {
          return await birdModel.findById(animal.id);
        }
      })
    );
    res.status(200).json(animals);
  } catch (error) {
    console.error(error);
  }
};

export const getMostPopularPlace = async (req, res) => {
  try {
    const favoritePlace = await FavoritePlaceModel.find();
    const favoritePlaces = [];
    favoritePlace.reduce((prev, curr) =>
      prev.animal?.length >= curr.animal?.length
        ? favoritePlaces.push(prev.place)
        : favoritePlaces.push(curr.place)
    );
    let answer;
    if (favoritePlaces.length !== 0) {
      answer = favoritePlaces.length > 1 ? favoritePlaces : favoritePlaces[0];
    }

    res.status(200).json(answer);
  } catch (error) {
    console.log(error);
  }
};
