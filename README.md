# 🎯 UniqueSignalDetector

A lightweight JavaScript utility for identifying a unique signal within a small redundant dataset.

---

## 📖 Project Overview

UniqueSignalDetector demonstrates how simple comparison logic can reliably identify an anomalous value when redundancy is intentionally built into incoming data.

Rather than treating three values as ordinary numbers, this project models them as duplicated verification signals where two represent the expected reading and one represents an unexpected or exceptional event.

The system efficiently determines the unique signal using only a few comparisons without requiring additional memory or sorting.

---

# 🌍 Real-World Concept

Imagine a monitoring system where three sensors report the same measurement.

- Two sensors agree.
- One sensor reports an abnormal reading.

The objective is to immediately determine which reading is different so that it can be inspected, logged, or corrected.

This concept appears in:

- 🔧 Sensor redundancy
- 🛰 Fault-tolerant embedded systems
- 📡 Communication verification
- 📊 Data validation pipelines
- 🤖 Automated monitoring systems

---

# 💡 Core Concept

Instead of counting frequencies or sorting values, the detector compares the three readings directly.

Since two readings are guaranteed to match:

- if A == B → C is unique
- if A == C → B is unique
- otherwise A is unique

This minimizes both computation and memory usage.

---

# ⚙️ How the System Works

1. Receive three redundant readings.
2. Compare the first two values.
3. Compare the first and third values if necessary.
4. Identify the unmatched reading.
5. Return the detected anomaly.

---

# 🧠 Algorithm Used

- Constant-Time Conditional Comparison
- Decision Tree Logic
- Direct Equality Matching

No sorting.

No hashing.

No frequency maps.

---

# 🔄 Step-by-Step Logic

```text
Receive A, B, C

│
├── Is A == B ?
│      │
│      ├── Yes → Unique = C
│      │
│      └── No
│
├── Is A == C ?
│      │
│      ├── Yes → Unique = B
│      │
│      └── No → Unique = A
│
Return unique value
```

---

# ✨ Key Features

- ⚡ Constant-time execution
- 🧠 Minimal comparison logic
- 📦 No additional memory allocation
- 🔍 Reliable anomaly detection
- 📈 Easy integration into monitoring software
- 💻 Clean JavaScript implementation

---

# 📌 Example Use Case

### Sensor Inputs

```text
Primary Sensor   : 42
Backup Sensor    : 42
Emergency Sensor : 38
```

### Detection Result

```text
Unique Signal → 38
```

---

# 📥 Example

Input

```text
[5, 7, 7]
```

Output

```text
5
```

---

# ⏱ Complexity Analysis

| Metric | Complexity |
|---------|------------|
| Time | O(1) |
| Space | O(1) |

The algorithm performs only a fixed number of comparisons regardless of input.

---

# 🛠 Technologies Used

- JavaScript (ES6)
- Node.js

---

# 📁 Project Structure

```text
UniqueSignalDetector/
│
├── src/
│   └── uniqueSignalDetector.js
│
├── README.md
│
└── LICENSE
```

---

# 🚀 How to Run

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/UniqueSignalDetector.git
```

Open the project

```bash
cd UniqueSignalDetector
```

Run

```bash
node src/uniqueSignalDetector.js
```

---

# 📚 Learning Outcomes

This project demonstrates:

- Constant-time algorithm design
- Efficient conditional branching
- Decision-tree based logic
- Lightweight anomaly detection
- Practical redundancy validation
- Writing clean and maintainable JavaScript

---

# 🚀 Future Improvements

- Support larger datasets
- Frequency-based anomaly detection
- Configurable validation rules
- REST API version
- Browser package
- Visualization dashboard
- TypeScript support

---

# 📄 License

This project is released under the MIT License.

Feel free to use, modify, and distribute it for educational and commercial purposes.
