window.BENCHMARK_DATA = {
  "lastUpdate": 1785526475625,
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
      },
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "committer": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "distinct": true,
          "id": "a216e36849d760173bdc82e454b22d308d70db41",
          "message": "Remove failing, unecessary line from release script",
          "timestamp": "2026-07-31T13:33:46-06:00",
          "tree_id": "4e5bb8330e92097222df5303ea05f174b6e74a2f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/a216e36849d760173bdc82e454b22d308d70db41"
        },
        "date": 1785526463876,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkFib10",
            "value": 353.4,
            "unit": "ns/op",
            "extra": "3410636 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20",
            "value": 44255,
            "unit": "ns/op",
            "extra": "27133 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric",
            "value": 44383,
            "unit": "ns/op\t         4.000 auxMetricUnits",
            "extra": "27212 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - ns/op",
            "value": 44383,
            "unit": "ns/op",
            "extra": "27212 times\n4 procs"
          },
          {
            "name": "BenchmarkFib20WithAuxMetric - auxMetricUnits",
            "value": 4,
            "unit": "auxMetricUnits",
            "extra": "27212 times\n4 procs"
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
      },
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "committer": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "distinct": true,
          "id": "a216e36849d760173bdc82e454b22d308d70db41",
          "message": "Remove failing, unecessary line from release script",
          "timestamp": "2026-07-31T13:33:46-06:00",
          "tree_id": "4e5bb8330e92097222df5303ea05f174b6e74a2f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/a216e36849d760173bdc82e454b22d308d70db41"
        },
        "date": 1785526448166,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_fib_10",
            "value": 149.59,
            "range": "± 1.69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_fib_20",
            "value": 18898.73,
            "range": "± 208.76",
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
      },
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "committer": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "distinct": true,
          "id": "a216e36849d760173bdc82e454b22d308d70db41",
          "message": "Remove failing, unecessary line from release script",
          "timestamp": "2026-07-31T13:33:46-06:00",
          "tree_id": "4e5bb8330e92097222df5303ea05f174b6e74a2f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/a216e36849d760173bdc82e454b22d308d70db41"
        },
        "date": 1785526466865,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench.py::test_fib_10",
            "value": 105679.08797908502,
            "unit": "iter/sec",
            "range": "stddev: 9.570065946796615e-7",
            "extra": "mean: 9.462610050135089 usec\nrounds: 36497"
          },
          {
            "name": "bench.py::test_fib_20",
            "value": 875.7876560990269,
            "unit": "iter/sec",
            "range": "stddev: 0.00005800032637369506",
            "extra": "mean: 1.1418292927925537 msec\nrounds: 888"
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
      },
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "committer": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "distinct": true,
          "id": "a216e36849d760173bdc82e454b22d308d70db41",
          "message": "Remove failing, unecessary line from release script",
          "timestamp": "2026-07-31T13:33:46-06:00",
          "tree_id": "4e5bb8330e92097222df5303ea05f174b6e74a2f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/a216e36849d760173bdc82e454b22d308d70db41"
        },
        "date": 1785526466268,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "fib(10)",
            "value": 1575863,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "fib(20)",
            "value": 12646,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "94 samples"
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
      },
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "committer": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "distinct": true,
          "id": "a216e36849d760173bdc82e454b22d308d70db41",
          "message": "Remove failing, unecessary line from release script",
          "timestamp": "2026-07-31T13:33:46-06:00",
          "tree_id": "4e5bb8330e92097222df5303ea05f174b6e74a2f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/a216e36849d760173bdc82e454b22d308d70db41"
        },
        "date": 1785526470827,
        "tool": "catch2",
        "benches": [
          {
            "name": "Fibonacci 10",
            "value": 86.8737,
            "range": "± 9.31939",
            "unit": "ns",
            "extra": "100 samples\n356 iterations"
          },
          {
            "name": "Fibonacci 20",
            "value": 7.99009,
            "range": "± 553.589",
            "unit": "us",
            "extra": "100 samples\n4 iterations"
          }
        ]
      }
    ],
    "Julia benchmark result": [
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
        "date": 1785510714502,
        "tool": "julia",
        "benches": [
          {
            "name": "fib/10",
            "value": 255.3830985915493,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":355,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "fib/20",
            "value": 31982,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ],
    "JMH Benchmark": [
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
        "date": 1785510720426,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.openjdk.jmh.samples.JMHSample_01_HelloWorld.wellHelloThere",
            "value": 1965206461.6287463,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ],
    "Catch2 Benchmark (v3)": [
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
        "date": 1785510719834,
        "tool": "catch2",
        "benches": [
          {
            "name": "Fibonacci 10",
            "value": 83.4566,
            "range": "± 3.31485",
            "unit": "ns",
            "extra": "100 samples\n267 iterations"
          },
          {
            "name": "Fibonacci 20",
            "value": 7.63129,
            "range": "± 233.349",
            "unit": "us",
            "extra": "100 samples\n3 iterations"
          }
        ]
      }
    ],
    "Benchmark.Net Benchmark": [
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
        "date": 1785510737780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Sample.Benchmarks.Fib10",
            "value": 23.43085188070933,
            "unit": "ns",
            "range": "± 0.2467525240269058"
          },
          {
            "name": "Sample.Benchmarks.Fib20",
            "value": 45.10342793862025,
            "unit": "ns",
            "range": "± 0.4608906763108066"
          }
        ]
      }
    ],
    "C++ Benchmark": [
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
        "date": 1785510739637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fib_10",
            "value": 179.7425515059713,
            "unit": "ns/iter",
            "extra": "iterations: 3939689\ncpu: 179.72862731042986 ns\nthreads: 1"
          },
          {
            "name": "fib_20",
            "value": 22323.12876730281,
            "unit": "ns/iter",
            "extra": "iterations: 30559\ncpu: 22321.959422755983 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "committer": {
            "email": "rjhallsted@gmail.com",
            "name": "rjhallsted",
            "username": "barbarj"
          },
          "distinct": true,
          "id": "a216e36849d760173bdc82e454b22d308d70db41",
          "message": "Remove failing, unecessary line from release script",
          "timestamp": "2026-07-31T13:33:46-06:00",
          "tree_id": "4e5bb8330e92097222df5303ea05f174b6e74a2f",
          "url": "https://github.com/paradedb/github-action-benchmark/commit/a216e36849d760173bdc82e454b22d308d70db41"
        },
        "date": 1785526454330,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fib_10",
            "value": 199.4866237303163,
            "unit": "ns/iter",
            "extra": "iterations: 3505499\ncpu: 199.47189572725597 ns\nthreads: 1"
          },
          {
            "name": "fib_20",
            "value": 24757.004874602535,
            "unit": "ns/iter",
            "extra": "iterations: 28310\ncpu: 24755.419392440832 ns\nthreads: 1"
          }
        ]
      }
    ],
    "Criterion.rs Benchmark": [
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
        "date": 1785510778156,
        "tool": "cargo",
        "benches": [
          {
            "name": "BenchFib10",
            "value": 166,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "BenchFib20",
            "value": 21316,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Recursive/20",
            "value": 21322,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Iterative/20",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Recursive/21",
            "value": 35912,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci/Iterative/21",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}