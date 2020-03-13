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
const Scene = require('Scene');
const Patches = require('Patches');
const Reactive = require('Reactive');

    const dix = Patches.getScalarValue('DoItX');
    const diy = Patches.getScalarValue('DoItY');
    const diz = Patches.getScalarValue('DoItZ');

Patches.getPulseValue('Pulse1').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set1', position);
});
Patches.getPulseValue('Pulse2').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set2', position);
});
Patches.getPulseValue('Pulse3').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set3', position);
});
Patches.getPulseValue('Pulse4').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set4', position);
});
Patches.getPulseValue('Pulse5').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set5', position);
});
Patches.getPulseValue('Pulse6').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set6', position);
});
Patches.getPulseValue('Pulse7').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set7', position);
});
Patches.getPulseValue('Pulse8').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set8', position);
});
Patches.getPulseValue('Pulse9').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set9', position);
});
Patches.getPulseValue('Pulse10').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set10', position);
});
Patches.getPulseValue('Pulse11').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set11', position);
});
Patches.getPulseValue('Pulse12').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set12', position);
});
Patches.getPulseValue('Pulse13').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set13', position);
});
Patches.getPulseValue('Pulse14').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set14', position);
});
Patches.getPulseValue('Pulse15').subscribe(function () {
    const position = Reactive.vector(Reactive.val(dix.lastValue), Reactive.val(diy.lastValue), Reactive.val(diz.lastValue) );
    Patches.setVectorValue('Set15', position);
});