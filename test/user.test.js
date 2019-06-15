// Import the dependencies for testing
const chai = require ('chai');
const chaiHttp = require ('chai-http');
const app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("User", () => {
    describe("GET /api/user", () => {
        // Test to get all user records
        it("should get all users", (done) => {
            chai.request(app)
                .get('/api/user')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});
