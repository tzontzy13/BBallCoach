import '@testing-library/jest-dom';

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// npm run test -- --coverage --watchAll=false