import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

import { JSDOM } from 'jsdom';

global.env = null;

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

Enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.document = dom.window.document;
global.window = dom.window;
