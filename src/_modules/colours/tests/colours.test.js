'use strict';

import Colours from '../colours';

describe('Colours View', function() {

  beforeEach(() => {
    this.colours = new Colours();
  });

  it('Should run a few assertions', () => {
    expect(this.colours).toBeDefined();
  });

});
