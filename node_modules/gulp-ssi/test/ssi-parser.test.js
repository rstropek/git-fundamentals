var {describe, it} = require('mocha')
var expect = require('chai').expect
var assert = require('assert')
var File = require('vinyl')
var es = require('event-stream')
var fs = require('fs')
var parser = require('../')

function tester (fileSpec, expected, root = {}) {
    var fakeFile = new File(fileSpec)
    var res = parser(root)
    res.write(fakeFile)
    res.once('data', file => {
        assert.equal(file.contents.toString('utf8'), expected)
    })
}

describe('ssi parser does correct replacements', function () {
    it('handles a root include', function () {
            tester({
                path: 'test/samples/hello.html',
                contents: Buffer.from('<!--#include file="/one.inc" -->\n'),
            }, '<p>This is the first</p>\n')
        }
    )
    it('handles relative includes', function () {
        tester({
            path: 'test/samples/hello.html',
            contents: Buffer.from('<!--#include file="one.inc" -->\n')
        }, '<p>This is the first</p>\n')
    })
    it('handles includes with virtual key', function () {
        tester({
            path: 'test/samples/hello.html',
            contents: Buffer.from('<!--#include virtual="one.inc" -->\n')
        }, '<p>This is the first</p>\n')
    })
    it('handles includes with other attributes', function () {
        tester({
            path: 'test/samples/hello.html',
            contents: Buffer.from('<!--#include file="one.inc" stub="empty" -->\n')
        }, '<p>This is the first</p>\n')
    })
    it('handles dot relative includes', function () {
        tester({
            path: 'test/samples/deeper/hello.html',
            contents: Buffer.from('<!--#include file="../one.inc" -->\n')
        }, '<p>This is the first</p>\n')
    })
    it('handles deeper relative links ', function () {
        tester({
            path: 'test/samples/deeper-inc/hello.html',
            contents: Buffer.from('<!--#include file="one.inc" -->\n')
        }, '<p>This is another</p>\n')
    })
    it('handles deeper relative links the other way ', function () {
        tester({
            path: 'test/samples/hello.html',
            contents: Buffer.from('<!--#include file="deeper-inc/one.inc" -->\n')
        }, '<p>This is another</p>\n')
    })
    it('handles deeper relative links the other way 2', function () {
        tester({
            path: 'test/samples/hello.html',
            contents: Buffer.from('<!--#include file="./deeper-inc/one.inc" -->\n')
        }, '<p>This is another</p>\n')
    })
    it('handles special root config', function () {
        tester({
                path: 'test/samples/hello.html',
                contents: Buffer.from('<!--#include file="one.inc" -->\n')
            }, '<p>This is the other</p>\n',
            {root: 'test/root'})
    })
    it('handles special root config deeper', function () {
        tester({
                path: 'test/samples/hello.html',
                contents: Buffer.from('<!--#include file="deeper/one.inc" -->\n')
            }, '<p>This is the other, but deeper</p>\n',
            {root: 'test/root'})
    })
    it('handles special root config with root include', function () {
        tester({
                path: 'test/samples/hello.html',
                contents: Buffer.from('<!--#include file="/one.inc" -->\n')
            }, '<p>This is the other</p>\n',
            {root: 'test/root'})
    })
    it('handles special root config with dot include', () => {
        tester({
                path: 'test/samples/deeper/hello.html',
                contents: Buffer.from('<!--#include file="../one.inc" -->\n')
            }, '<p>This is the other</p>\n',
            {root: 'test/root'})
    })
    it('handles special root config with deeper dot include', () => {
        tester({
                path: 'test/samples/deeper/hello.html',
                contents: Buffer.from('<!--#include file="../deeper/one.inc" -->\n')
            }, '<p>This is the other, but deeper</p>\n',
            {root: 'test/root'})
    })
    it('STRANGELY handles an edge case', () => {
        tester({
                path: 'test/samples/deeper/really/deep/hello.html',
                contents: Buffer.from('<!--#include file="../deeper/one.inc" -->\n')
            }, '<p>This is the other, but deeper</p>\n',
            {root: 'test/root'})
    })

})
