const assert = require("chai").assert
const router = require("../router.js");
const server = require("../index.js")
const request = require("supertest")

const mockReq = {
  author: "qqq",
  email: "123456789@qq",
  time: new Date().toJSON(),
  message: "Hello World"
}

describe("check email format", () => {
  it("should pass normal email form",() => {
    assert(router.check_email("qwertyui@gmail.com"))
    assert(router.check_email("123456789@yahoo.com.tw"))
  })
  it("should include @", () => {
    assert.isFalse(router.check_email("123456789"))
  })
  it("should include character before and after @", () => {
    assert.isFalse(router.check_email("123456@"))
    assert.isFalse(router.check_email("@qwertyui"))
  })
  it("should deny special character", () => {
    assert.isFalse(router.check_email("!@#$"))
    assert.isFalse(router.check_email("豬@123456"))
  })
})

describe("check message content", () => {
  it("should deny improper word", () => {
    assert.isFalse(router.check_message("qwertyfuckzxn!@"))
    assert.isFalse(router.check_message("<sldp>shit{ddl}%^"))
  })
})

describe("POST /send", () => {
  it("should return same message when input correct format message", (done) => {
    request(server)
      .post("/send")
      .send(mockReq)
      .expect(200)
      .end((err,result) => {
        assert.notExists(err)
        console.log(result.body)
        assert.deepEqual(result.body,mockReq)
        done()
      })
  })
})