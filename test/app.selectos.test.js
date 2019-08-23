import {expect} from 'chai';
import {GetPostsListSelector, GetPostsState} from '../app/app.selectors';
import Sinon from 'sinon';
// import proxyquire from 'proxyquire';
const proxyquire = require('proxyquire').noCallThru();

describe("App. Selectors", () => {
    it("", () => {

        const state ={
            GetPostsState:() => 2
            // posts: []
        }
        // GetPostsState = sinon.fake.returns(() => state.posts)
        // console.log(GetPostsListSelector.resultFunc())
        var foo = proxyquire('../app/app.selectors', { 'GetPostsState': state });

        expect(2).to.equal(2)
    })

})