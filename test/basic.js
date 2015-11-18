/* globals describe, it */

import { plus, minus } from '../math';

describe('it', function() {
  it('should add', function() {
    plus(2, 2).should.be.equal(4);
  });
  it('should subtract', function() {
    minus(2, 2).should.be.equal(0);
  });
});
