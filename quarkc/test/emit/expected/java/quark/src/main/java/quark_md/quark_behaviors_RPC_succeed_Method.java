package quark_md;

public class quark_behaviors_RPC_succeed_Method extends quark.reflect.Method implements io.datawire.quark.runtime.QObject {
    public quark_behaviors_RPC_succeed_Method() {
        super("quark.void", "succeed", new java.util.ArrayList(java.util.Arrays.asList(new Object[]{"quark.String"})));
    }
    public Object invoke(Object object, java.util.ArrayList<Object> args) {
        quark.behaviors.RPC obj = (quark.behaviors.RPC) (object);
        (obj).succeed((String) ((args).get(0)));
        return null;
    }
    public String _getClass() {
        return (String) (null);
    }
    public Object _getField(String name) {
        return null;
    }
    public void _setField(String name, Object value) {}
}
