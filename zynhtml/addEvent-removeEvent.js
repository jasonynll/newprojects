/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-19 18:30:49
 * @version $Id$
 */

function addEvent(node, type, fn) {
    if (!node) return false;
    if (node.addEventListener) {
        node.addEventListener(type, fn, false);
        return true;
    }
    else if (node.attachEvent) {
        node['e' + type + fn] = fn;
        node[type + fn] = function() {
            node['e' + type + fn](window.event);
        };
        node.attachEvent('on' + type, node[type + fn]);
        return true;
    }
    return false;
}

function removeEvent(node, type, fn) {
    if (!node) return false;
    if (node.removeEventListener) {
        node.removeEventListener(type, fn, false);
        return true;
    }
    else if (node.detachEvent) {
        node.detachEvent('on' + type, node[type + fn]);
        node[type + fn] = null;
    }
    return false;
}