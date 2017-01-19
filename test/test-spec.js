const server = require('../server');
const supertest = require('supertest');
const chai = require('chai');
chai.should();

const agent = supertest.agent(server);

