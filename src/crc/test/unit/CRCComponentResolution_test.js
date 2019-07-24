import { before, after, describe, beforeEach, afterEach, it } from 'mocha';
import { expect } from 'chai';
import 'sinon';

import CubxNamespaceManager from './utils/CubxNamespaceManager';
import CRC from '../../modules/crc/CRC';
import doc1 from './componentResolution/webpackageDocument1';
import doc2 from './componentResolution/webpackageDocument2';
import doc3 from './componentResolution/webpackageDocument3';
import doc4 from './componentResolution/webpackageDocument4';
import doc5 from './componentResolution/webpackageDocument5';
import resolvedComponent from './componentResolution/resolvedComponent';

describe('CRCComponentResolution', function () {
  var cache;
  var documents = {};
  var depMgr;
  before(function () {
    CubxNamespaceManager.resetNamespace(CRC, 'CRCComponentResolution.before');
    cache = window.cubx.CRC.getCache();
    depMgr = window.cubx.CRC.getDependencyMgr();
    depMgr.init();

    documents['test.compound-A@1.0.0'] = doc1;
    documents['test.compound-B@1.0.0'] = doc2;
    documents['test.elementary-C@1.0.0'] = doc3;
    documents['test.elementary-D@1.0.0'] = doc4;
    documents['test.elementary-E@1.0.0'] = doc5;
  });
  after(function () {
    CubxNamespaceManager.resetNamespace(
      undefined,
      'CRCComponentResolution.after'
    );
  });
  describe('#getResolvedComponent', function () {
    describe('build resolvedComponent, if initial not in cache', function () {
      beforeEach(function () {
        depMgr._storeManifestFiles(
          documents['test.compound-A@1.0.0'],
          'compound-A'
        );
        depMgr._storeManifestFiles(
          documents['test.compound-B@1.0.0'],
          'compound-B'
        );
        depMgr._storeManifestFiles(
          documents['test.elementary-C@1.0.0'],
          'elementary-C'
        );
        depMgr._storeManifestFiles(
          documents['test.elementary-D@1.0.0'],
          'elementary-D'
        );
        depMgr._storeManifestFiles(
          documents['test.elementary-E@1.0.0'],
          'elementary-E'
        );
        depMgr._storeManifestFiles(
          documents['test.compound-A@1.0.0'],
          'elementary-F'
        );
      });
      afterEach(function () {
        delete cache._componentCache['compound-A'];
        delete cache._componentCache['compound-B'];
        delete cache._componentCache['elementary-C'];
        delete cache._componentCache['elementary-D'];
        delete cache._componentCache['elementary-E'];
        delete cache._componentCache['elementary-F'];
        delete cache._resolvedComponents['compound-A'];
      });
      describe('resolvedComponent should be build, if not in ', function () {
        var spy;

        beforeEach(function () {
          cache._resolvedComponents = {};
          spy = sinon.spy(window.cubx.CRC, '_resolveComponent');
        });
        afterEach(function () {
          window.cubx.CRC._resolveComponent.restore();
        });
        it('should be equals with resolvedComponent', function () {
          var processedErg = window.cubx.CRC.getResolvedComponent('compound-A');
          expect(processedErg).to.be.not.undefined;
          expect(processedErg).to.be.not.null;
          expect(processedErg).to.be.not.empty;
          expect(processedErg).to.deep.equals(resolvedComponent);
        });
        it('the method "_resolveComponent" should be called', function () {
          window.cubx.CRC.getResolvedComponent('compound-A');
          expect(spy.calledOnce).to.be.true;
        });
        it('resolvedComponent should be stored in cache ', function () {
          window.cubx.CRC.getResolvedComponent('compound-A');
          cache._resolvedComponents.should.be.have.property('compound-A');
          cache._resolvedComponents['compound-A'].should.be.an('object');
          expect(spy.calledOnce).to.be.true;
        });
      });
      describe('resolvedComponent should be get from cache', function () {
        var spy;

        beforeEach(function () {
          window.cubx.CRC.getResolvedComponent('compound-A');
          spy = sinon.spy(window.cubx.CRC, '_resolveComponent');
        });
        afterEach(function () {
          window.cubx.CRC._resolveComponent.restore();
        });
        it('should be equals with an expected document ', function () {
          var processedErg = window.cubx.CRC.getResolvedComponent('compound-A');
          expect(processedErg).to.be.not.undefined;
          expect(processedErg).to.be.not.null;
          expect(processedErg).to.be.not.empty;
          expect(processedErg).to.deep.equals(resolvedComponent);
        });
        it('the method "_resolveComponent" should be not called', function () {
          window.cubx.CRC.getResolvedComponent('compound-A');
          expect(spy.called).to.be.not.true;
        });
      });
    });
  });
  describe('#invalidateResolvedManifest', function () {
    var cache;
    beforeEach(function () {
      cache = window.cubx.CRC.getCache();
      cache._resolvedComponents['compound-A'] = resolvedComponent;
    });
    it('the cache "_resolvedComponents" should have not contains the resolvedComponent after invalidate', function () {
      expect(cache._resolvedComponents).to.have.property('compound-A');
      window.cubx.CRC.invalidateResolvedManifest('compound-A');
      expect(cache._resolvedComponents).to.have.not.property('compound-A');
    });
  });
});
