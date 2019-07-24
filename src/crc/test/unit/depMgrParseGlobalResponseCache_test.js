/**
 * Created by jtrs on 19.05.2015.
 */
import { before, after, describe } from 'mocha';
import 'sinon';

import CubxNamespaceManager from './utils/CubxNamespaceManager';
import CRC from '../../modules/crc/CRC';
import pkg from './addToCache/webpackageDocument';
import pkg1 from './addToCache/webpackageDocument1';
import pkg2 from './addToCache/webpackageDocument2';
import pkg3 from './addToCache/webpackageDocument3';
import pkg4 from './addToCache/webpackageDocument4';
import pkg5 from './addToCache/webpackageDocument5';
import pkg6 from './addToCache/webpackageDocument6';
import pkg7 from './addToCache/webpackageDocument7';
import pkg8 from './addToCache/webpackageDocument8';
import pkg9 from './addToCache/webpackageDocument9';

var crcDepMgr;

function cloneObject (obj) {
  return JSON.parse(JSON.stringify(obj));
}
describe('Global Cache Parsing', function () {
  describe('#_parseGlobalResponseCache', function () {
    var globalResponseCache = [];
    var expectedLocalResponseCache = {};

    before(function () {
      CubxNamespaceManager.resetNamespace(CRC);
      crcDepMgr = window.cubx.CRC.getDependencyMgr();
      crcDepMgr.init();
      globalResponseCache.push(pkg);
      globalResponseCache.push(pkg1);
      globalResponseCache.push(pkg2);
      globalResponseCache.push(pkg3);
      globalResponseCache.push(pkg4);
      globalResponseCache.push(pkg5);
      globalResponseCache.push(pkg6);
      globalResponseCache.push(pkg7);
      globalResponseCache.push(pkg8);
      globalResponseCache.push(pkg9);
      expectedLocalResponseCache[ 'org.example.my-webpackage@0.2.0' ] = cloneObject(globalResponseCache[0]);
      expectedLocalResponseCache['org.example.package-1@1.0.0'] = cloneObject(
        globalResponseCache[1]
      );
      expectedLocalResponseCache['org.example.package-2@1.0.0'] = cloneObject(
        globalResponseCache[2]
      );
      expectedLocalResponseCache['org.example.package-3@1.0.0'] = cloneObject(
        globalResponseCache[3]
      );
      expectedLocalResponseCache['org.example.package-4@1.0.0'] = cloneObject(
        globalResponseCache[4]
      );
      expectedLocalResponseCache['org.example.package-5@1.0.0'] = cloneObject(
        globalResponseCache[5]
      );
      expectedLocalResponseCache['org.example.package-6@1.0.0'] = cloneObject(
        globalResponseCache[6]
      );
      expectedLocalResponseCache['org.example.package-7@1.0.0'] = cloneObject(
        globalResponseCache[7]
      );
      expectedLocalResponseCache['org.example.package-8@1.0.0'] = cloneObject(
        globalResponseCache[8]
      );
      expectedLocalResponseCache['package-9@1.0.0'] = cloneObject(
        globalResponseCache[9]
      );
      crcDepMgr._parseGlobalResponseCache(globalResponseCache);
    });
    after(function () {
      CubxNamespaceManager.resetNamespace(CRC);
    });
    it('should fill local _responseCache using globalResponseCache', function () {
      Object.keys(crcDepMgr._responseCache._cache).should.have.length(
        globalResponseCache.length
      );
    });
    it('should be equal the cache-entry with the initialised manifest for each webpackage', function () {
      crcDepMgr._responseCache._cache[ 'org.example.my-webpackage@0.2.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.my-webpackage@0.2.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-1@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-1@1.0.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-2@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-2@1.0.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-3@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-3@1.0.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-4@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-4@1.0.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-5@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-5@1.0.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-6@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-6@1.0.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-7@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-7@1.0.0']
      );
      crcDepMgr._responseCache._cache[ 'org.example.package-8@1.0.0' ].should.deep.equal(
        expectedLocalResponseCache['org.example.package-8@1.0.0']
      );
      crcDepMgr._responseCache._cache['package-9@1.0.0'].should.deep.equal(
        expectedLocalResponseCache['package-9@1.0.0']
      );
    });
  });
});
