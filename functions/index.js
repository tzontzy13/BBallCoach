const functions = require("firebase-functions");
const axios = require("axios");

exports.triggerML = functions.firestore
   .document("users/{docId}").onUpdate((change, context) => {

      const data = change.after.data()
      const prevData = change.before.data()

      if (data.games == prevData.games) {
         return "no need to trigger"
      }

      if (data.mlStats != prevData.mlStats) {
         return "no need to trigger 2"
      }

      const fetcher = axios.create({
         baseURL: "https://europe-west3-basketball-311116.cloudfunctions.net/SVC",
         headers: {
            'Content-Type': 'application/json',
         },
      });

      const games = data.games;

      if (games.length >= 50) {

         const boxScores = games.map(game => game.boxScore[game.boxScore.length - 1].stats)

         const winner = games.map(game => {
            if (game.homeScore.total > game.awayScore.total) {
               return 1
            } else {
               return 0
            }
         })

         const combine = boxScores.map((game, index) => {
            return { ...game, winner: winner[index] }
         })

         fetcher.post('', { ...combine }).then(res => {
            return change.after.ref.update({
               "mlStats": res.data
            }, { merge: true })
         }).catch(err => {
            return change.after.ref.update({
               "mlStats": err
            }, { merge: true })
         })


      } else {
         return change.after.ref.update({
            "mlStats": 'less than 50 games, not available'
         }, { merge: true })
      }
   });