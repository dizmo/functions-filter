import { expect } from "chai";
import { filter } from "../lib";

import "mocha";

describe("index.filter", () => {
    it("should exist", () => {
        expect(filter).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(filter).to.be.a("function");
    });
});

describe("index.filter", () => {
    it("should return empty array", async () => {
        expect(await filter([0,1,2,3,4], () => {
            return Promise.resolve(false);
        })).to.deep.equal([]);
    });
    it("should return full array", async () => {
        expect(await filter([0,1,2,3,4], () => {
            return Promise.resolve(true);
        })).to.deep.equal([0,1,2,3,4]);
    });
    it("should return even numbers", async () => {
        expect(await filter([0,1,2,3,4], (n) => new Promise(
            (resolve) => setTimeout(() => resolve(n % 2 === 0))
        ))).to.deep.equal([0,2,4]);
    });
    it("should return odd numbers", async () => {
        expect(await filter([0,1,2,3,4], (n) => new Promise(
            (resolve) => setTimeout(() => resolve(n % 2 === 1))
        ))).to.deep.equal([1,3]);
    });
});
