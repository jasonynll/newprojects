/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-19 18:44:44
 * @version $Id$
 */

function getEvent(e) {
    return e || window.event;
}

function getTarget(e) {
    return e.target || e.scrElement;
}

function preventDefault(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false;
}

function stopPropagation(e) {
    if (e.stopPropagation)
        e.stopPropagation();
    else
        e.cancelBubble = true;
}