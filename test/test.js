var assert = require('assert')
var exercise = require('../loops.js')

describe('Refactoring loops.js using native methods', () => {
  describe('#toSentence', () => {
    it('should take an array of names and return a string with proper grammar and punction for listing names', () => {
      assert.deepEqual(exercise.toSentence(['Sue', 'Will']),
        'Sue and Will'
      );
      assert.deepEqual(exercise.toSentence(['Sue', 'Will', 'Rachel']),
        'Sue, Will and Rachel'
      );
    });
  });
  describe('#arrayOfNumbers', () => {
    it('should take a number and return an array the length of the number and each index increases by 1', () => {
      assert.deepEqual(exercise.arrayOfNumbers(3),[
        1, 2, 3
      ])
    })
  })
  describe('#acronym', () => {
    it('should take an array of words and return the acronym as a string', () => {
      assert.deepEqual(exercise.acronym(['Sue', 'Will']),
        'SW'
      )
      assert.deepEqual(exercise.acronym(['Java', 'Script', 'Object', 'Notation']),
        'JSON'
      )
    })
  })
  describe('#replace', () => {
    it('should take an array of numbers, a specfic number, and a number to change the specific number to and return an array of numbers with the specific number changed', () => {
      assert.deepEqual(exercise.replace([1, 3, 2, 1, 3], 1, 4), [
        4, 3, 2, 4, 3
      ])
    })
  })
});
