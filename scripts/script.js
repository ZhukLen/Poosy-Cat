/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Patches = require('Patches');
const Scene = require('Scene');
const Reactive = require('Reactive');

const number = Patches.getScalarValue('Value');
Patches.setStringValue('Text', number.toString());

var distance = 1;
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

Patches.getPulseValue('Start').subscribe(function () {
    Patches.setPulseValue('GoGo', Reactive.once());
});

const cat = Scene.root.find("Cat01");
const catPivot = Scene.root.find("CatPivot");

Patches.getPulseValue('PulseClear').subscribe(function () {
    list.push(Patches.getScalarValue('PooNumClear').lastValue);
});


Patches.getPulseValue('PulseRotate').subscribe(function () {
    var lookAtPoint = Patches.getPointValue('LookAt');
    catPivot.transform.position = cat.transform.position;
    
    distance = cat.transform.position.distance(lookAtPoint).lastValue;
    Patches.setScalarValue('Distance', Reactive.val(distance));
    
    var lookAtTransform = catPivot.transform.lookAt(lookAtPoint);
    Patches.setVectorValue('Rotation', Reactive.vector(lookAtTransform.rotationX, lookAtTransform.rotationY, lookAtTransform.rotationZ));
});

Patches.getPulseValue('PulseEndTransition').subscribe(function () {
    Patches.setScalarValue('PooNumDump', Reactive.val(list[0]));
    list.shift();
    if (list.length == 0) list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const x = Patches.getScalarValue('TransitionX');
    const y = Patches.getScalarValue('TransitionY');
    const z = Patches.getScalarValue('TransitionZ');
    const position = Reactive.vector(Reactive.val(x.lastValue), Reactive.val(y.lastValue), Reactive.val(z.lastValue) );
    Patches.setVectorValue('CurrentPosition', position);
    Patches.setPulseValue('GoGo', Reactive.once());
});