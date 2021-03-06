from __future__ import unicode_literals
from __future__ import division
from __future__ import absolute_import
from __future__ import print_function
from builtins import str as unicode

from quark_runtime import *
_lazyImport.plug("package_md.test_Test_go_Method")
import quark.reflect

class test_Test_go_Method(quark.reflect.Method):
    def _init(self):
        quark.reflect.Method._init(self)

    def __init__(self):
        super(test_Test_go_Method, self).__init__(u"quark.void", u"go", _List([]));

    def invoke(self, object, args):
        obj = _cast(object, lambda: test.Test);
        (obj).go();
        return None

    def _getClass(self):
        return _cast(None, lambda: unicode)

    def _getField(self, name):
        return None

    def _setField(self, name, value):
        pass

class test_Test(quark.reflect.Class):
    def _init(self):
        quark.reflect.Class._init(self)

    def __init__(self):
        super(test_Test, self).__init__(u"test.Test");
        (self).name = u"test.Test"
        (self).parameters = _List([])
        (self).fields = _List([quark.reflect.Field(u"quark.String", u"name")])
        (self).methods = _List([test_Test_go_Method()])
        (self).parents = _List([u"quark.Object"])

    def construct(self, args):
        return test.Test()

    def isAbstract(self):
        return False

    def _getClass(self):
        return _cast(None, lambda: unicode)

    def _getField(self, name):
        return None

    def _setField(self, name, value):
        pass
test_Test.singleton = test_Test()
class test_subtest_Test_go_Method(quark.reflect.Method):
    def _init(self):
        quark.reflect.Method._init(self)

    def __init__(self):
        super(test_subtest_Test_go_Method, self).__init__(u"quark.void", u"go", _List([]));

    def invoke(self, object, args):
        obj = _cast(object, lambda: test.subtest.Test);
        (obj).go();
        return None

    def _getClass(self):
        return _cast(None, lambda: unicode)

    def _getField(self, name):
        return None

    def _setField(self, name, value):
        pass

class test_subtest_Test(quark.reflect.Class):
    def _init(self):
        quark.reflect.Class._init(self)

    def __init__(self):
        super(test_subtest_Test, self).__init__(u"test.subtest.Test");
        (self).name = u"test.subtest.Test"
        (self).parameters = _List([])
        (self).fields = _List([quark.reflect.Field(u"quark.int", u"size")])
        (self).methods = _List([test_subtest_Test_go_Method()])
        (self).parents = _List([u"quark.Object"])

    def construct(self, args):
        return test.subtest.Test()

    def isAbstract(self):
        return False

    def _getClass(self):
        return _cast(None, lambda: unicode)

    def _getField(self, name):
        return None

    def _setField(self, name, value):
        pass
test_subtest_Test.singleton = test_subtest_Test()
class Root(_QObject):
    def _init(self):
        pass
    def __init__(self): self._init()

    def _getClass(self):
        return _cast(None, lambda: unicode)

    def _getField(self, name):
        return None

    def _setField(self, name, value):
        pass
Root.test_Test_md = test_Test.singleton
Root.test_subtest_Test_md = test_subtest_Test.singleton

def _lazy_import_test():
    import test
    globals().update(locals())
_lazyImport("import test", _lazy_import_test)

def _lazy_import_test_subtest():
    import test.subtest
    globals().update(locals())
_lazyImport("import test.subtest", _lazy_import_test_subtest)



_lazyImport.pump("package_md.test_Test_go_Method")
