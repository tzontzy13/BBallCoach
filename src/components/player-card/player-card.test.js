import { shallow } from 'enzyme';
import React from 'react'
import App from './player-card.component';

import { Provider } from 'react-redux';

let wrapper;

beforeEach(() => {
   const mockProps = {
      checkUserSession: jest.fn(),
      getState: jest.fn(),
      subscribe: jest.fn(),
      dispatch: jest.fn()
   }

   wrapper = mockProps
})

it('Expect to render App component', () => {
   const component = shallow(
      <Provider store={wrapper}>
         <App />
      </Provider>
   )
   expect(component).toMatchSnapshot();
})