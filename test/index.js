const assert = require("chai").assert
const index = require("../index.js");

describe("index",() => {
  it("should pass normal email form",() => {
    assert(index.check_email("qwertyui@gmail.com"))
    assert(index.check_email("123456789@yahoo.com.tw"))
  })
  it("should include @", () => {
    assert.isFalse(index.check_email("123456789"))
  })
  it("should include character before and after @",() => {
    assert.isFalse(index.check_email("123456@"))
    assert.isFalse(index.check_email("@qwertyui"))
  })
  it("should deny special character", () => {
    assert.isFalse(index.check_email("!@#$"))
    assert.isFalse(index.check_email("豬@123456"))
  })
})