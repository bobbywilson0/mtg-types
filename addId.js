const types = require('./types.json');
const links = require('./links.json');
const fs = require('fs');

const typesWithId = types.map((t, i) => {
    t.id = i
    return t
})

const results = {}
const idLinks = new Set()

links.map((l, i) => {
    let su0 = l['sut'][0];
    let su1 = l['sut'][1];

    let t0 = l['t'][0];
    let t1 = l['t'][1];
    let t2 = l['t'][2];
    let t3 = l['t'][3];
    let t4 = l['t'][4];

    let sub0 = l['st'][0];
    let sub1 = l['st'][1];
    let sub2 = l['st'][2];
    let sub3 = l['st'][3];

    if (su0 && su1) {
        idLinks.add({
            // id: `${su0}-${su1}`,
            source: su0,
            target: su1,
            value: l.count
        })
    }

    const sutTail = l['sut'][l['sut'].length - 1]
    if (sutTail && t0) {
        idLinks.add({
            // id: `${su0}-${su1}`,
            source: sutTail,
            target: t0,
            value: l.count
        })
    }

    if (t0 && t1) {
        idLinks.add({
            // id: `${t0}-${t1}`,
            source: t0,
            target: t1,
            value: l.count
        })
    }

    if (t1 && t2) {
        idLinks.add({
            // id: `${t1}-${t2}`,
            source: t1,
            target: t2,
            value: l.count
        })
    }

    if (t2 && t3) {
        idLinks.add({
            // id: `${t2}-${t3}`,
            source: t2,
            target: t3,
            value: l.count
        })
    }

    if (t3 && t4) {
        idLinks.add({
            // id: `${t3}-${t4}`,
            source: t3,
            target: t4,
            value: l.count
        })
    }

    const ttail = l['t'][l['t'].length - 1]
    if (ttail && sub0) {
        idLinks.add({
            // id: `${sub0}-${sub1}`,
            source: ttail,
            target: sub0,
            value: l.count
        })
    }

    if (sub0 && sub1) {
        idLinks.add({
            // id: `${sub0}-${sub1}`,
            source: sub0,
            target: sub1,
            value: l.count
        })
    }

    if (sub1 && sub2) {
        idLinks.add({
            // id: `${sub2}-${sub2}`,
            source: sub1,
            target: sub2,
            value: l.count
        })
    }

    if (sub2 && sub3) {
        idLinks.add({
            // id: `${sub2}-${sub3}`,
            source: sub2,
            target: sub3,
            value: l.count
        })
    }
})

results.links = Array.from(idLinks);
results.nodes = typesWithId;

fs.writeFile('data.json', JSON.stringify(results), (err) => {
    if (err) {
        console.error(err)
        return
    }
})
