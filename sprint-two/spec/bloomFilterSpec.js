describe('bloomFilter', function(){
  var bloomFilter;
  var inputs = ['fnord', 'limit', 'zappo', 'hmhmm'];
  // exFalPos = number of expected false positives
  var exFalPos = Math.pow(1-Math.exp(-3*4/18), 3);
  var falPosCounter = 0;

  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  // add/contains function
  it('should store values that were inserted', function() {
    expect(hashTable.contains('uuuuu')).to.equal(false);
    bloomFilter.insert('uuuuu');
    expect(hashTable.contains('uuuuu')).to.equal(true);
    expect(hashTable.contains('yyyyy')).to.equal(false);
  });

  // approximate false positives function

  // set range of counter, between expectations-100 and expectations+100
  it('should have false positives within the expected range', function() {
    // for i from 0 to 10000
    for (var i = 0; i < 10000; i++) {
      // generate random string
      var str = generateRandomString(5);
      // check if string is in input array
      var isFound = _.some(inputs, function(item) {
        return str === item;
      });
      // if contains returns true and if string is not in input array
      if (bloomFilter.contains(str) && isFound) {
        falPosCounter++;
      }
    }
    expect(falPosCounter > exFalPos - 100).to.equal(true);
    expect(falPosCounter < exFalPos + 100).to.equal(true);
  });
})