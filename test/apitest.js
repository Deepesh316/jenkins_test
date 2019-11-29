const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("../src/index");

//Our parent block
describe("Podcast", () => {
  describe("/GET media", () => {
    it("it should GET all the podcast", done => {
      chai
        .request(server)
        .get("/media")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.podcasts.length.should.be.eql(1);
          done();
        });
    });
  });
  describe("/GET message", () => {
    it("it should GET a message", done => {
      chai
        .request(server)
        .get("/message")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
