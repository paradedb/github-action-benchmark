"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBenchmarkEntry = addBenchmarkEntry;
const core = __importStar(require("@actions/core"));
const normalizeBenchmark_1 = require("./normalizeBenchmark");
const gitGraph_1 = require("./gitGraph");
function addBenchmarkEntry(benchName, benchEntry, entries, maxItems) {
    let prevBench = null;
    let normalizedCurrentBench = benchEntry;
    const gitAnalyzer = new gitGraph_1.GitGraphAnalyzer();
    // Add benchmark result
    if (entries[benchName] === undefined) {
        entries[benchName] = [benchEntry];
        core.debug(`No suite was found for benchmark '${benchName}' in existing data. Created`);
    }
    else {
        const suites = entries[benchName];
        // Find previous benchmark using git ancestry
        core.debug(`Finding previous benchmark for commit: ${benchEntry.commit.id}`);
        prevBench = gitAnalyzer.findPreviousBenchmark(suites, benchEntry.commit.id);
        if (prevBench) {
            core.debug(`Found previous benchmark: ${prevBench.commit.id}`);
        }
        else {
            core.debug('No previous benchmark found');
        }
        normalizedCurrentBench = (0, normalizeBenchmark_1.normalizeBenchmark)(prevBench, benchEntry);
        // Insert at the correct position based on git ancestry
        const insertionIndex = gitAnalyzer.findInsertionIndex(suites, benchEntry.commit.id);
        core.debug(`Inserting benchmark at index ${insertionIndex} (of ${suites.length} existing entries)`);
        suites.splice(insertionIndex, 0, normalizedCurrentBench);
        if (maxItems !== null && suites.length > maxItems) {
            suites.splice(0, suites.length - maxItems);
            core.debug(`Number of data items for '${benchName}' was truncated to ${maxItems} due to max-items-in-charts`);
        }
    }
    return { prevBench, normalizedCurrentBench };
}
//# sourceMappingURL=addBenchmarkEntry.js.map