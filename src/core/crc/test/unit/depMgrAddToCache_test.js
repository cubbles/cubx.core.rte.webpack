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

var crcDepMgr;

describe('DepMgrComponentCaching', function () {
  var documents = {};

  before(function () {
    CubxNamespaceManager.resetNamespace(CRC, 'DepMgr.addToCache.before');
    crcDepMgr = CRC.getDependencyMgr();
    crcDepMgr.init();
    documents['org.example.my-webpackage@0.2.0'] = pkg;
    documents['org.example.package-1@1.0.0'] = pkg1;
    documents['org.example.package-2@1.0.0'] = pkg2;
    documents['org.example.package-3@1.0.0'] = pkg3;
    documents['org.example.package-4@1.0.0'] = pkg4;
    documents['org.example.package-5@1.0.0'] = pkg5;
    documents['org.example.package-6@1.0.0'] = pkg6;
    documents['org.example.package-7@1.0.0'] = pkg7;
  });
  after(function () {
    CubxNamespaceManager.resetNamespace(CRC, 'DepMgr.addToCache.after');
  });
});
