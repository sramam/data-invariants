"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const __1 = require("..");
const JSON2 = (j) => JSON.stringify(j, null, 2);
ava_1.default(`exclusion patterns`, (t) => {
    const data = {
        deep: {
            active: true,
            children: [
                {
                    lastActive: Date.now() - Math.random() * 24 * 3600 * 100,
                    name: "john",
                },
                {
                    lastActive: Date.now() - Math.random() * 24 * 3600 * 100,
                    name: "alice",
                },
            ],
            id: 1,
            inf: Infinity,
            ninf: -Infinity,
            null: null,
        },
        key: "Invariant Key",
        obj: {},
        arr: [],
        bool: Math.random() < 0.5,
        signature: Math.random(),
        timestamp: Date.now(),
    };
    const variantFilters = [
        "!**/timestamp",
        "!**/signature",
        "!**/lastActive",
        "!**/obj",
        "!**/arr",
        "!**/bool",
    ];
    const invariant = __1.dataInvariants(data, variantFilters);
    try {
        t.snapshot(invariant);
    }
    catch (err) {
        console.error(JSON2({ data, variantFilters }));
        throw err;
    }
});
//# sourceMappingURL=index.js.map