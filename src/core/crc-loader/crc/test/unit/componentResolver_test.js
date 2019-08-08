import { before, after, describe, it } from 'mocha';
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

var resolver;
var documents = [];
var depMgr;
var cache;
var resolvedComponentObject;

describe('ComponentResolver', function () {
  before(function () {
    CubxNamespaceManager.resetNamespace(CRC, 'ComponentResolver.before');
    depMgr = window.cubx.CRC.getDependencyMgr();
    depMgr.init();
    cache = window.cubx.CRC.getCache();
    cache._componentCache = {};
    resolver = window.cubx.CRC.getComponentResolver();
    documents['test.compound-A@1.0.0'] = doc1;
    documents['test.compound-B@1.0.0'] = doc2;
    documents['test.elementary-C@1.0.0'] = doc3;
    documents['test.elementary-D@1.0.0'] = doc4;
    documents['test.elementary-E@1.0.0'] = doc5;
    resolvedComponentObject = resolvedComponent;
  });
  after(function () {
    CubxNamespaceManager.resetNamespace(undefined, 'ComponentResolver.after');
  });
  describe('#resolvedComponent', function () {
    describe('build resolvedComponent', function () {
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
      });
      it('should be equals with an expected document', function () {
        var processedErg = resolver.processManifest('compound-A');
        // console.log('processedErg', JSON.stringify(processedErg, null, 2));
        expect(processedErg).to.be.not.undefined;
        expect(processedErg).to.be.not.null;
        expect(processedErg).to.be.not.empty;
        expect(processedErg).to.eql(resolvedComponentObject);
      });
    });
  });
});
