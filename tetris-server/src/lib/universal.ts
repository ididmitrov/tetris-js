// import { IGenre, Genre } from "../Schema/Genre";
// import mongoose from "mongoose";

// export const getGenre = async (genre: string) => {
//   const genres = genre.split(",").map((gen: string) => gen.trim());
//   const genreIds: string[] = await Promise.all(
//     genres.map(async (name: string) => {
//       const genre = await getOrCreateGenre(name);
//       return genre;
//     })
//   );

//   return genreIds;
// };
// const getOrCreateGenre = async (name: string) => {
//   const res: IGenre = await Genre.findOne({ name });
//   //if res is null create it
//   if (!res) {
//     const genre: IGenre = await Genre.create({
//       _id: mongoose.Types.ObjectId(),
//       name,
//     });
//     return genre._id;
//   }

//   return res._id;
// };
