window.BENCHMARK_DATA = {
  "lastUpdate": 1785510713770,
  "repoUrl": "https://github.com/paradedb/github-action-benchmark",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "RJ Barman",
            "username": "barbarj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f",
          "message": "Merge pull request #2 from paradedb/barbarj.clone-only-branch\n\nshallow-clone the target branch only",
          "timestamp": "2026-07-31T11:10:54-04:00",
          "tree_id": "f6e6db3c46b76eca309defac805a2983d066627f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f"
        },
        "date": 1785510676655,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 353.8,
            "unit": "ns/op",
            "extra": "3429945 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 44360,
            "unit": "ns/op",
            "extra": "27313 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric",
            "value": 44267,
            "unit": "ns/op\t         4.000 auxMetricUnits",
            "extra": "27205 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - ns/op",
            "value": 44267,
            "unit": "ns/op",
            "extra": "27205 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - auxMetricUnits",
            "value": 4,
            "unit": "auxMetricUnits",
            "extra": "27205 times\n4 procs"
          }
        ]
      }
    ],
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "RJ Barman",
            "username": "barbarj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f",
          "message": "Merge pull request #2 from paradedb/barbarj.clone-only-branch\n\nshallow-clone the target branch only",
          "timestamp": "2026-07-31T11:10:54-04:00",
          "tree_id": "f6e6db3c46b76eca309defac805a2983d066627f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f"
        },
        "date": 1785510677841,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_fib_10",
            "value": 150.03,
            "range": "± 3.80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_fib_20",
            "value": 18912.23,
            "range": "± 185.49",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "RJ Barman",
            "username": "barbarj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f",
          "message": "Merge pull request #2 from paradedb/barbarj.clone-only-branch\n\nshallow-clone the target branch only",
          "timestamp": "2026-07-31T11:10:54-04:00",
          "tree_id": "f6e6db3c46b76eca309defac805a2983d066627f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f"
        },
        "date": 1785510685791,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench.py::test_fib_10",
            "value": 75585.91143796827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012107644103207949",
            "extra": "mean: 13.229978721903466 usec\nrounds: 42767"
          },
          {
            "name": "bench.py::test_fib_20",
            "value": 610.8706905337308,
            "unit": "iter/sec",
            "range": "stddev: 0.00011011619742641755",
            "extra": "mean: 1.6370076605349628 msec\nrounds: 598"
          }
        ]
      }
    ],
    "Benchmark.js Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "RJ Barman",
            "username": "barbarj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f",
          "message": "Merge pull request #2 from paradedb/barbarj.clone-only-branch\n\nshallow-clone the target branch only",
          "timestamp": "2026-07-31T11:10:54-04:00",
          "tree_id": "f6e6db3c46b76eca309defac805a2983d066627f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f"
        },
        "date": 1785510683542,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "fib(10)",
            "value": 1425733,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "fib(20)",
            "value": 11655,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "99 samples"
          }
        ]
      }
    ],
    "Catch2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "RJ Barman",
            "username": "barbarj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f",
          "message": "Merge pull request #2 from paradedb/barbarj.clone-only-branch\n\nshallow-clone the target branch only",
          "timestamp": "2026-07-31T11:10:54-04:00",
          "tree_id": "f6e6db3c46b76eca309defac805a2983d066627f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/ddc9e59bfb2a35a1208c7c2bfae1962fc1c8f73f"
        },
        "date": 1785510711653,
        "tool": "catch2",
        "benches": [
          {
            "name": "Fibonacci 10",
            "value": 84.2548,
            "range": "± 5.36851",
            "unit": "ns",
            "extra": "100 samples\n348 iterations"
          },
          {
            "name": "Fibonacci 20",
            "value": 7.65914,
            "range": "± 453.933",
            "unit": "us",
            "extra": "100 samples\n4 iterations"
          }
        ]
      }
    ]
  }
}