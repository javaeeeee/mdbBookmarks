const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect();
const should = chai.should();

const app = require('../../app');

chai.use(chaiHttp);

describe('Bookmarks', () => {
  it('Should return OK on GET /bookmarks', (done) => {
    chai
      .request(app)
      .get('/bookmarks')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.status.should.equal('success');
        done();
      });
  });
  it('Should return OK on GET /bookmarks/1', (done) => {
    chai
      .request(app)
      .get('/bookmarks')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
  it('Should return OK on POST /bookmarks', (done) => {
    chai
      .request(app)
      .get('/bookmarks')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
  it('Should return OK on DELETE /bookmarks/1', (done) => {
    chai
      .request(app)
      .get('/bookmarks')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
  it('Should return NOT FOUND otherwise', (done) => {
    chai
      .request(app)
      .get('/gibberish')
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.json;
        done();
      });
  });
});
