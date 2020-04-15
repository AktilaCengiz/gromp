//dependencies
const request = require('node-superfetch');
module.exports = {
//summoner
summonerPP : async function(profileIconId) {
     if(!profileIconId) {
          throw new TypeError("Lütfen summonerPP(profileIconId) şeklinde kullanınız!")
     } else {
          return "https://cdn2.leagueofgraphs.com/img/summonerIcons/10.7/64/" + profileIconId + ".png"
     }
 },
summoner : async function(region, summonerName, apiKey) {
       
     if(!region) {
          throw new TypeError("Lütfen verilen argümanların doğru girildiğine emin olunuz. \n await gromp.summoner = (region, summonerName, apiKey)")
     } else if(!summonerName) {
          throw new TypeError("Lütfen verilen argümanların doğru girildiğine emin olunuz. \n await gromp.summoner = (region, summonerName, apiKey)")
     } else if(!apiKey) {
          throw new TypeError("Lütfen verilen argümanların doğru girildiğine emin olunuz. \n await gromp.summoner = (region, summonerName, apiKey)")
     }

try {
     const { body } = await request.get("https://" + region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + apiKey);
              return body;
          } catch (err) {
              throw new TypeError(err);
          }
      }

}