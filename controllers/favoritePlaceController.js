import FavoritePlaceModel from "../models/favoritePlaceModel.js";

export const getAllFavoritePlaces = async (req, res) => {
  try {
    const allFavoritePlaces = await FavoritePlaceModel.find(
      {},
      { password: 0 }
    );

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
        isAdmin: req.FavoritePlace.isAdmin ? req.body.isAdmin : false,
      },
      { new: true }
    );

    res.status(200).json(updatedFavoritePlace);
  } catch (error) {
    console.error(error);
  }
};
