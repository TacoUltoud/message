const assert = require("chai").assert
const router = require("../router.js");

describe("index",() => {
  it("should pass normal email form",() => {
    assert(router.check_email("qwertyui@gmail.com"))
    assert(router.check_email("123456789@yahoo.com.tw"))
  })
  it("should include @", () => {
    assert.isFalse(router.check_email("123456789"))
  })
  it("should include character before and after @",() => {
    assert.isFalse(router.check_email("123456@"))
    assert.isFalse(router.check_email("@qwertyui"))
  })
  it("should deny special character", () => {
    assert.isFalse(router.check_email("!@#$"))
    assert.isFalse(router.check_email("豬@123456"))
  })
})