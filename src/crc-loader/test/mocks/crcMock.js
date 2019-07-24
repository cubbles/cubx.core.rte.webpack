var CRCMock = function () {
  console.log('init CRCMock');
};
CRCMock.prototype.init = function () {
  return; // eslint-disable-line no-useless-return
};
CRCMock.prototype.getDependencyMgr = function () {
  return {
    init: function () {
      return; // eslint-disable-line no-useless-return
    },
    run: function () {
      return; // eslint-disable-line no-useless-return
    }
  };
};
export default CRCMock;
