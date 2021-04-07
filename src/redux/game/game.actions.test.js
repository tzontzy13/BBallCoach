import * as actions from './game.actions'

it('should create an action to reset game', () => {

   const expectedAction = {
      type: 'RESET_GAME',
   }

   expect(actions.resetGame()).toEqual(expectedAction)
})

it('should create an action to add playewr to starting 5', () => {

   const expectedAction = {
      type: 'ADD_PLAYER_TO_5',
      payload: 1
   }

   expect(actions.addPlayerTo5(1)).toEqual(expectedAction)
})

it('should create an action to set bench', () => {

   const expectedAction = {
      type: 'SET_BENCH',
      payload: 'bench'
   }

   expect(actions.setBench('bench')).toEqual(expectedAction)
})

it('should create an action to set opponent name', () => {

   const expectedAction = {
      type: 'SET_OPPONENT_NAME',
      payload: 'name'
   }

   expect(actions.setOpponentName('name')).toEqual(expectedAction)
})

it('should create an action to toggle time running', () => {

   const expectedAction = {
      type: 'TOGGLE_TIME_RUNNING',
   }

   expect(actions.toggleTimeRunning()).toEqual(expectedAction)
})

it('should create an action to toggle possession', () => {

   const expectedAction = {
      type: 'TOGGLE_POSSESSION',
   }

   expect(actions.togglePossession()).toEqual(expectedAction)
})

it('should create an action to set time', () => {

   const expectedAction = {
      type: 'SET_TIME',
      payload: 'time'
   }

   expect(actions.setTime('time')).toEqual(expectedAction)
})

it('should create an action to sub players', () => {

   const expectedAction = {
      type: 'SUB_PLAYERS',
      payload: { playerIn: { playerNumber: 1 }, playerOut: { playerNumber: 2 } }
   }

   expect(actions.subPlayers({ playerIn: { playerNumber: 1 }, playerOut: { playerNumber: 2 } })).toEqual(expectedAction)
})

it('should create an action to select a player', () => {

   const expectedAction = {
      type: 'SELECT_PLAYER',
      payload: 2
   }

   expect(actions.selectPlayer(2)).toEqual(expectedAction)
})

it('should create an action add a block', () => {

   const expectedAction = {
      type: 'ADD_BLOCK',
   }

   expect(actions.addBlock()).toEqual(expectedAction)
})

it('should create an action add a steal', () => {

   const expectedAction = {
      type: 'ADD_STEAL',
   }

   expect(actions.addSteal()).toEqual(expectedAction)
})

it('should create an action add a defensive rebound', () => {

   const expectedAction = {
      type: 'ADD_DREB',
   }

   expect(actions.addDReb()).toEqual(expectedAction)
})

it('should create an action add a defensive foul', () => {

   const expectedAction = {
      type: 'ADD_DFOUL',
   }

   expect(actions.addDFoul()).toEqual(expectedAction)
})

it('should create an action add a offensive rebound', () => {

   const expectedAction = {
      type: 'ADD_OREB',
   }

   expect(actions.addOReb()).toEqual(expectedAction)
})

it('should create an action add an ofensive foul', () => {

   const expectedAction = {
      type: 'ADD_OFOUL',
   }

   expect(actions.addOFoul()).toEqual(expectedAction)
})

it('should create an action add a turnover', () => {

   const expectedAction = {
      type: 'ADD_TOV',
   }

   expect(actions.addTov()).toEqual(expectedAction)
})

it('should create an action set opponet socre', () => {

   const expectedAction = {
      type: 'OPPONENT_SCORE',
      payload: 2
   }

   expect(actions.opponentScore(2)).toEqual(expectedAction)
})

it('should create an action to record a shot', () => {

   const expectedAction = {
      type: 'SHOT',
      payload: { madeOrMiss: 'miss', position: 'p2dunk', assistBy: 'coco' }
   }

   expect(actions.shot('miss', 'p2dunk', 'coco')).toEqual(expectedAction)
})