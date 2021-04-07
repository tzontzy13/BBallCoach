import * as underTest from './firebase.utils'

it('t', () => {

})

// describe("saveGameBoxScoreToUser", () => {
//    const userRefStub = {
//       update: givenObj => {
//          return new Promise((resolve, reject) => {
//             reject();
//          });
//       }
//    };
//    const docStub = {
//       doc: givenUser => {
//          console.log(givenUser);
//          return userRefStub;
//       }
//    };
//    const fireStoreStub = {
//       collection: givenKey => {
//          return docStub;
//       }
//    };
//    const authStub = {
//       currentUser: {
//          uid: "Malone Nr.1"
//       }
//    };

//    beforeEach(() => {
//    })

//    it("proof of concept", async () => {
//       //Given
//       global.getFireStore = () => { return fireStoreStub };
//       global.getAuth = () => { return authStub; };

//       const testCollectionKey = "someTestCollectionKey";
//       const testBoxScore = "1-1";
//       const testHomeScore = "2-1";
//       const testAwayScore = "3-4";


//       //When
//       await underTest.saveGameBoxScoreToUser(testCollectionKey, testBoxScore, testHomeScore, testAwayScore);

//       //Then
//    })
// })