import axios from "axios";

const ACCESS_TOKEN = 430156646243481;


export const getBasicHeroInfoById = async (id) => {
     const { data: powerstats } = await axios.get(`https://superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/powerstats`);
     const { data: image } =  await axios.get(`https://superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/image`);

     // console.log("Powerstats:", powerstats);
     // console.log("Powerstats name:", powerstats.name);
     // console.log("Image:", image);
     // console.log(image, powerstats, powerstats.name)
     return { name: powerstats.name, powerstats: powerstats, imgUrl: image.url }
}